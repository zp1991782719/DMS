package com.ssm.mapper;

import com.ssm.model.User;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/2/24 13:49
 */
public interface UserMapper {

    void saveUser(User user);

    boolean updateUser(User user);

    boolean deleteUser(int id);

    User findUserById(int id);

    List<User> findAll();

}
