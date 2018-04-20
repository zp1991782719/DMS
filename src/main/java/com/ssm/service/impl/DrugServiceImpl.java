package com.ssm.service.impl;


import com.ssm.mapper.CategoryMapper;
import com.ssm.mapper.DrugMapper;
import com.ssm.pojo.Category;
import com.ssm.pojo.Drug;
import com.ssm.service.DrugService;
import com.ssm.service.dto.DrugDto;
import com.ssm.utils.LogUtil;
import com.ssm.utils.ResponseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * @Author zhujia-zp
 * @Date 2018/4/14 13:15
 */

@Service
public class DrugServiceImpl implements DrugService{

    @Autowired
    DrugMapper drugMapper;

    @Autowired
    CategoryMapper categoryMapper;

    public List<DrugDto> findAll(){
        return drugMapper.findAll();
    }

    public ResponseResult addDrug(String name,Integer categoryId,int provideId,double price,String validDate,MultipartFile image) {
        ResponseResult responseResult = new ResponseResult();
        Category category = categoryMapper.getCategoryById(categoryId);
        if("0".equals(category.getLeaf())){
            responseResult.setMsg("只能在根类别下添加药品");
            responseResult.setResult("error");
            return responseResult;
        }
        Drug drug = new Drug();
        drug.setName(name);
        drug.setCategoryId(categoryId);
        drug.setProvideId(provideId);
        drug.setPrice(price);
        Date date = null;
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        try {
            date = sdf.parse(validDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        drug.setValidDate(date);
        String filename = image.getOriginalFilename();
        String newFileName = UUID.randomUUID()+filename.substring(filename.lastIndexOf("."));
        LogUtil.getInstance().debug(newFileName);
        File file = new File("D:\\upload\\",newFileName);
        if (!file.getParentFile().exists()) {
            file.getParentFile().mkdirs();
        }
        try {
            image.transferTo(file);
            drug.setImage(newFileName);
        } catch (IOException e) {
            e.printStackTrace();
        }
        drugMapper.addDrug(drug);
        responseResult.setMsg("成功");
        responseResult.setResult("success");
        return responseResult;
    }

    public void drugDownLoad(String fileName, HttpServletResponse response) {
        File file = new File("D:\\upload\\",fileName);
        FileInputStream inputStream = null;
        OutputStream outputStream = null;
        try {
            inputStream = new FileInputStream(file);
            outputStream = response.getOutputStream();
            byte bytes[] = new byte[1024];
            int length = 0;
            while((length=inputStream.read(bytes,0,1024))!=-1){
                outputStream.write(bytes,0,length);
            }
            outputStream.flush();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            try {
                if(inputStream!=null){
                    inputStream.close();
                }
                if(outputStream!=null){
                    outputStream.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public DrugDto getDrugDtoById(int id) {
        return drugMapper.getDrugDtoById(id);
    }

}
