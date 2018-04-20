package com.ssm.service.impl;

import com.ssm.mapper.StoreMapper;
import com.ssm.pojo.Store;
import com.ssm.service.StoreService;
import com.ssm.service.dto.StoreDto;
import com.ssm.utils.ResponseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/4/15 20:14
 */
@Service
public class StoreServiceImpl implements  StoreService{

    @Autowired
    StoreMapper storeMapper;

    public List<StoreDto> findAll(){
        return storeMapper.findAll();
    }

    public ResponseResult storeIn(Store store) {
        ResponseResult responseResult = new ResponseResult();
        List<Store> storeList = storeMapper.findAllStore();
        for(Store store1: storeList){
            if(store1.getDrugId()==store.getDrugId()&&store1.getProvideId()==store.getProvideId()){
                store.setId(store1.getId());
                store.setCount(store.getCount()+store1.getCount());
                int editNum = storeMapper.editStore(store);
                if(editNum<=0){
                    responseResult.setResult("error");
                    responseResult.setMsg("入库失败,请联系管理员周大大");
                    return responseResult;
                }else{
                    responseResult.setResult("success");
                    responseResult.setMsg("入库成功");
                    return responseResult;
                }
            }
        }
        int addNum = storeMapper.addStore(store);
        if(addNum<=0){
            responseResult.setResult("error");
            responseResult.setMsg("入库失败,请联系管理员周大大");
            return responseResult;
        }
        responseResult.setResult("success");
        responseResult.setMsg("入库成功");
        return responseResult;
    }

    public ResponseResult storeOut(Store store) {
        ResponseResult responseResult = new ResponseResult();
        List<Store> storeList = storeMapper.findAllStore();
        for(Store store1: storeList){
            if(store1.getDrugId()==store.getDrugId()&&store1.getProvideId()==store.getProvideId()){
                if(store1.getCount()<store.getCount()){
                    responseResult.setResult("error");
                    responseResult.setMsg("出库失败,库存量不足");
                    return responseResult;
                }
                store.setId(store1.getId());
                store.setCount(store1.getCount()-store.getCount());
                int editNum = storeMapper.editStore(store);
                if(editNum<=0){
                    responseResult.setResult("error");
                    responseResult.setMsg("出库失败,请联系管理员周大大");
                    return responseResult;
                }else{
                    responseResult.setResult("success");
                    responseResult.setMsg("出库成功");
                    return responseResult;
                }
            }
        }
        responseResult.setResult("error");
        responseResult.setMsg("出库失败,库存不存在该药品");
        return responseResult;
    }

}
