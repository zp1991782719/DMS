package com.ssm.service.impl;

import com.ssm.mapper.UserMapper;
import com.ssm.pojo.User;
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
        User user = userMapper.findUserByUsername(username);
        if(user!=null&&password!=null&&user.getPassword().equals(password)){
            return true;
        }
        return false;
    }

    /**
     *
     * @return 所有用户
     */
    public List<User> findAll(){
        return userMapper.findAll();
    }

   /**  分页显示
     *MethodParam
     *return
    */
    public PageHelp findPageAll(int draw,int start, int length) {
        PageHelp pageHelp = new PageHelp();
        pageHelp.setDraw(draw);
        pageHelp.setStart(start);
        pageHelp.setLength(length);
        pageHelp.setData(userMapper.findPageAll(pageHelp));
        pageHelp.setRecordsTotal(userMapper.findAll().size());
        pageHelp.setRecordsFiltered(userMapper.findAll().size());
        return pageHelp;
    }


}
