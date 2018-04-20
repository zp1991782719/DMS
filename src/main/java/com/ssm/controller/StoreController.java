package com.ssm.controller;

import com.ssm.pojo.Store;
import com.ssm.service.StoreService;
import com.ssm.service.dto.StoreDto;
import com.ssm.utils.ResponseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/4/15 20:04
 */
@Controller
@RequestMapping("/store")
public class StoreController {

    @Autowired
    StoreService storeService;

    @RequestMapping("/storeList")
    public @ResponseBody List<StoreDto> storeList(){
        return storeService.findAll();
    }


    @RequestMapping("/storeIn")
    public @ResponseBody ResponseResult storeIn(Store store){
        return storeService.storeIn(store);
    }

    @RequestMapping("/storeOut")
    public @ResponseBody ResponseResult storeOut(Store store){
        return storeService.storeOut(store);
    }


}
