package com.ssm.service.impl;

import com.ssm.mapper.UserMapper;
import com.ssm.model.User;
import com.ssm.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/2/24 14:01
 */
@Service
public class UserServiceImpl implements UserService {

    /**
     * 注入UserMapper接口
     */
    @Autowired
    private UserMapper userMapper;

    /**
     * 新增用户
     */

    public void saveUser(User user) {
        userMapper.saveUser(user);
    }

    /**
     * 更新用户
     */

    public boolean updateUser(User user) {
        return userMapper.updateUser(user);
    }

    /**
     * 根据Id删除用户
     */

    public boolean deleteUser(int id) {
        return userMapper.deleteUser(id);
    }

    /**
     * 根据id查找用户
     */

    public User findUserById(int id) {
        User user = userMapper.findUserById(id);
        return user;
    }

    /**
     * 查询所有用户
     */
    public List<User> findAll() {
        List<User> allUser = userMapper.findAll();
        return allUser;
    }


}
