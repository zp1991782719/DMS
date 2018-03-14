package com.ssm.service;

import com.ssm.model.User;
import com.ssm.utils.PageHelp;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/2/24 13:59
 */

public interface UserService {

    public boolean userLogin(String username,String password);

    void saveUser(User user);

    boolean updateUser(User user);

    boolean deleteUser(int id);

    User findUserById(int id);

    List<User> findAll();

    PageHelp findUserList(int start,int length);
}
