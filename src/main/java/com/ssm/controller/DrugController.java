package com.ssm.controller;

import com.ssm.pojo.Drug;
import com.ssm.service.DrugService;
import com.ssm.service.dto.DrugDto;
import com.ssm.utils.LogUtil;
import com.ssm.utils.ResponseResult;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/4/11 23:36
 */
@Controller
@RequestMapping("/drug")
public class DrugController {

    @Autowired
    DrugService drugService;

    @RequestMapping("/drugList")
    public @ResponseBody List<DrugDto> drugList(){
        return drugService.findAll();
    }


    @RequestMapping("/drugAdd")
    public @ResponseBody ResponseResult drugAdd(String name,Integer categoryId,int provideId,double price,String validDate,MultipartFile image){
        LogUtil.getInstance().debug(
                "name="+name+
                ",categoryId="+categoryId+
                ",privideId="+provideId+
                ",price="+price+
                ",validDate="+validDate+
                ",image=:"+image);
        return drugService.addDrug(name,categoryId,provideId,price,validDate,image);
    }

    @RequestMapping("/drugDownload")
    public void drugDownload(String fileName, HttpServletResponse response){
        LogUtil.getInstance().debug(response+"|"+fileName);
        drugService.drugDownLoad(fileName,response);
    }

    @RequestMapping("/drugDetail")
    public @ResponseBody DrugDto drugDetail(int id){
        return drugService.getDrugDtoById(id);
    }


}
