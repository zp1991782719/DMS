package com.ssm.mapper;


import com.ssm.pojo.Drug;
import com.ssm.service.dto.DrugDto;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/4/12 22:52
 */
public interface DrugMapper {

    public List<DrugDto> findAll();

    public int addDrug(Drug drug);

    public DrugDto getDrugDtoById(int id);

}
