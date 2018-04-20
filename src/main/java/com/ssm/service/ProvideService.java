package com.ssm.service;

import com.ssm.mapper.ProvideMapper;
import com.ssm.pojo.Provide;
import com.ssm.utils.ResponseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/4/14 13:15
 */


public interface ProvideService {

    public List<Provide> findAll();

    public Provide getProvideById(int id);

    public ResponseResult editProvide(Provide provide);

    public ResponseResult addProvide(Provide provide);

    public ResponseResult deleteProvide(int id);

}
