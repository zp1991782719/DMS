package com.ssm.controller;

import com.ssm.pojo.User;
import com.ssm.service.UserService;
import com.ssm.utils.LogUtil;
import com.ssm.utils.PageHelp;
import com.ssm.utils.ResponseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @Author zhujia-zp
 * @Date 2018/4/5 16:48
 * 用户映射处理
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

//    /**
//     *  用户列表
//     * @param draw datatables列表访问次数
//     * @param start 分页开始
//     * @param length 分页长度
//     * @return
//     */
//    @RequestMapping("/userList")
//    public @ResponseBody PageHelp userList(int draw,int start,int length){
//        PageHelp pageHelp = userService.findPageAll(draw,start,length);
//        return pageHelp;
//    }

    @RequestMapping("/userList")
    public @ResponseBody List<User> userList(){
        LogUtil.getInstance().debug("前端发起查询用户列表请求");
        System.out.println(userService.findAll());
        return userService.findAll();
    }

    /**
     *
     * @param id 用户id
     * @return 用户
     */
    @RequestMapping("/userDetail")
    public @ResponseBody User userDetail(int id){
        return userService.findUserById(id);
    }

    /**
     *
     * @param user
     * @return 处理结果
     */
    @RequestMapping("/userEdit")
    public @ResponseBody ResponseResult userEdit(User user){
        return userService.editUser(user);
    }

    /**
     *  新增用户
     */
    @RequestMapping("/userAdd")
    public @ResponseBody ResponseResult userAdd(User user){
        return userService.addUser(user);
    }

    /**
     *  删除用户
     */
    @RequestMapping("/userDelete")
    public @ResponseBody ResponseResult userDelete(int id){
        return userService.deleteUser(id);
    }

}
