package com.ssm.service;

import com.ssm.pojo.User;
import com.ssm.utils.PageHelp;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/2/24 13:59
 */

public interface UserService {

    public boolean userLogin(String username,String password);

}
