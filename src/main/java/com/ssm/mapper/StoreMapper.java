package com.ssm.mapper;

import com.ssm.pojo.Provide;
import com.ssm.pojo.Store;
import com.ssm.service.dto.StoreDto;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/4/12 22:52
 */
public interface StoreMapper {

    public List<Store> findAllStore();

    public List<StoreDto> findAll();

    public int editStore(Store store);

    public int addStore(Store store);

}
