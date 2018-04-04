package com.ssm.controller;

import com.ssm.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


/**
 * 描述:用户controller<BR>
 * 创建人:<BR>
 * 时间:2017年7月10日下午7:15:58<BR>
 * @version
 */
@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/index")
    public String userLogin(String username,String password){

        return "san_test";
//        return "index";
    }

    @RequestMapping("/userList")
    @ResponseBody
    public String userLogin(){
        return "HELLO";
    }


}
