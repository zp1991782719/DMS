package com.ssm.controller;

import com.ssm.pojo.Provide;
import com.ssm.service.ProvideService;
import com.ssm.utils.ResponseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/4/14 13:10
 */
@Controller
@RequestMapping("/provide")
public class ProcideController {

    @Autowired
    ProvideService provideService;

    @RequestMapping("/provideList")
    public @ResponseBody List<Provide> provideList(){
        return provideService.findAll();
    }

    @RequestMapping("/provideDetail")
    public @ResponseBody Provide provideDetail(int id){
        return provideService.getProvideById(id);
    }

    @RequestMapping("/provideEdit")
    public @ResponseBody ResponseResult provideEdit(Provide provide){
        return provideService.editProvide(provide);
    }

    @RequestMapping("/provideAdd")
    public @ResponseBody ResponseResult provideAdd(Provide provide){
        return provideService.addProvide(provide);
    }

    @RequestMapping("/provideDelete")
    public @ResponseBody ResponseResult provideDelete(int id){
        return provideService.deleteProvide(id);
    }




}
