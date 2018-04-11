package com.ssm.mapper;

import com.ssm.pojo.User;
import com.ssm.utils.PageHelp;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/2/24 13:49
 */
public interface UserMapper {

    public User findUserByUsername(String username);

    public User findUserById(int id);

    public List<User> findAll();

    public List<User> findPageAll(PageHelp pageHelp);

    public int editUser(User user);

    public int addUser(User user);

    public int deleteUser(int id);

}
