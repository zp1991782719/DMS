package com.ssm.mapper;

import com.ssm.pojo.Provide;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/4/12 22:52
 */
public interface ProvideMapper {

    public List<Provide> findAll();

    public Provide getProvideById(int id);

    public int editProvide(Provide provide);

    public int addProvide(Provide provide);

    public int deleteProvide(int id);


}
