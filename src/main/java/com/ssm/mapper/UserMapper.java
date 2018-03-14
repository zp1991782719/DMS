package com.ssm.mapper;

import com.ssm.model.User;
import com.ssm.utils.PageHelp;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/2/24 13:49
 */
public interface UserMapper {

    public String findUserByUsername(String username);

    void saveUser(User user);

    boolean updateUser(User user);

    boolean deleteUser(int id);

    User findUserById(int id);

    List<User> findAll();

    List<User> findUserList(PageHelp pageHelp);

}
