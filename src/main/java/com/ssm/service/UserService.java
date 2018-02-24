package com.ssm.service;

import com.ssm.model.User;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/2/24 13:59
 */

public interface UserService {

    void saveUser(User user);

    boolean updateUser(User user);

    boolean deleteUser(int id);

    User findUserById(int id);

    List<User> findAll();

}
