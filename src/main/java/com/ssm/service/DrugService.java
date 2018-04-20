package com.ssm.service;


import com.ssm.pojo.Drug;
import com.ssm.service.dto.DrugDto;
import com.ssm.utils.ResponseResult;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/4/14 13:15
 */


public interface DrugService {

    public List<DrugDto> findAll();

    public ResponseResult addDrug(String name,Integer categoryId,int provideId,double price,String validDate,MultipartFile image);

    public void drugDownLoad(String fileName, HttpServletResponse response);

    public DrugDto getDrugDtoById(int id);

}
