package com.ssm.service;

import com.ssm.pojo.User;
import com.ssm.utils.PageHelp;
import com.ssm.utils.ResponseResult;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/2/24 13:59
 */

public interface UserService {

    public boolean userLogin(String username,String password);

    public User findUserById(int id);

    public List<User> findAll();

    public PageHelp findPageAll(int draw,int start,int length);

    public ResponseResult editUser(User user);

    public ResponseResult addUser(User user);

    public ResponseResult deleteUser(int id);

}
