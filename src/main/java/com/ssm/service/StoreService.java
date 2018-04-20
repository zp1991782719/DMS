package com.ssm.service;

import com.ssm.pojo.Store;
import com.ssm.service.dto.StoreDto;
import com.ssm.utils.ResponseResult;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/4/15 20:14
 */
public interface StoreService {

    public List<StoreDto> findAll();

    public ResponseResult storeIn(Store store);

    public ResponseResult storeOut(Store store);

}
