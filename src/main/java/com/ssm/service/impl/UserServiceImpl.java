package com.ssm.service.impl;

import com.ssm.mapper.UserMapper;
import com.ssm.pojo.User;
import com.ssm.service.UserService;
import com.ssm.utils.PageHelp;
import com.ssm.utils.ResponseResult;
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
     *  用户id一致的用户
     * @param id
     * @return
     */
    public User findUserById(int id) {
        return userMapper.findUserById(id);
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

    public ResponseResult editUser(User user) {
        ResponseResult responseResult = new ResponseResult();
        List<User> userList = userMapper.findAll();
        for(User u: userList){
            if(u.getUsername().equals(user.getUsername())){
                responseResult.setMsg("对不起，该用户已存在");
                responseResult.setResult("error");
                return responseResult;
            }
        }
        int num = userMapper.editUser(user);
        if(num>0){
            responseResult.setResult("success");
        }else{
            responseResult.setResult("error");
        }
        return responseResult;
    }

    public ResponseResult addUser(User user) {
        ResponseResult responseResult = new ResponseResult();
        List<User> userList = userMapper.findAll();
        for(User u: userList){
            if(u.getUsername().equals(user.getUsername())){
                responseResult.setMsg("对不起，已存在该用户");
                responseResult.setResult("error");
                return responseResult;
            }
        }

        int num = userMapper.addUser(user);
        if(num>0){
            responseResult.setMsg("添加用户"+user.getUsername()+"成功");
            responseResult.setResult("success");
        }else{
            responseResult.setMsg("添加失败，请联系管理员周大大");
            responseResult.setResult("error");
        }
        return responseResult;
    }

    public ResponseResult deleteUser(int id) {
        ResponseResult responseResult = new ResponseResult();
        int num = userMapper.deleteUser(id);
        if(num>0){
            responseResult.setResult("success");
        }else{
            responseResult.setResult("error");
        }
        return responseResult;
    }


}
