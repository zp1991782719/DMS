package com.ssm.service.impl;

import com.ssm.mapper.ProvideMapper;
import com.ssm.pojo.Provide;
import com.ssm.service.ProvideService;
import com.ssm.utils.ResponseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/4/14 13:15
 */

@Service
public class ProvideServiceImpl implements ProvideService{

    @Autowired
    ProvideMapper provideMapper;

    public List<Provide> findAll(){
        return provideMapper.findAll();
    }

    public Provide getProvideById(int id) {
        return provideMapper.getProvideById(id);
    }

    public ResponseResult editProvide(Provide provide) {
        ResponseResult responseResult = new ResponseResult();
        int editNum = provideMapper.editProvide(provide);
        if(editNum<=0){
            responseResult.setResult("error");
            responseResult.setMsg("修改供应商失败,请联系管理员周大大");
        }else{
            responseResult.setResult("success");
            responseResult.setMsg("修改供应商成功");
        }
        return responseResult;
    }

    public ResponseResult addProvide(Provide provide) {
        ResponseResult responseResult = new ResponseResult();
        int addNum = provideMapper.addProvide(provide);
        if(addNum<=0){
            responseResult.setResult("error");
            responseResult.setMsg("添加"+provide.getName()+"供应商失败,请联系管理员周大大");
        }else{
            responseResult.setResult("success");
            responseResult.setMsg("添加"+provide.getName()+"供应商成功");
        }
        return responseResult;
    }

    public ResponseResult deleteProvide(int id) {
        ResponseResult responseResult = new ResponseResult();
        int deleteNum = provideMapper.deleteProvide(id);
        if(deleteNum<=0){
            responseResult.setResult("error");
            responseResult.setMsg("删除供应商失败,请联系管理员周大大");
        }else{
            responseResult.setResult("success");
            responseResult.setMsg("删除供应商成功");
        }
        return responseResult;
    }

}
