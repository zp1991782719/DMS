package com.ssm.service.impl;

import com.ssm.mapper.UserMapper;
import com.ssm.model.User;
import com.ssm.service.UserService;
import com.ssm.utils.PageHelp;
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


    public boolean userLogin(String username, String password) {
        if(username!=null){

        }
        String findPasswordByUsername = userMapper.findUserByUsername(username);
        if(password!=null&&!"".equals(password)){
            if(password.equals(findPasswordByUsername)){
                return true;
            }
        }
        return false;
    }

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

    /*
     *  分页显示
     *MethodParam
     *return
     */
    public PageHelp findUserList(int start, int length) {
        PageHelp pageHelp = new PageHelp();
        pageHelp.setStart(start);
        pageHelp.setLength(length);
        pageHelp.setData(userMapper.findUserList(pageHelp));
        pageHelp.setRecordsTotal(findAll().size());
        pageHelp.setRecordsFiltered(findAll().size());
        return pageHelp;
    }


}
