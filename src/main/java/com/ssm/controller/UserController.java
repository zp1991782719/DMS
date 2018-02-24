package com.ssm.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.ssm.model.User;
import com.ssm.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/user")
/**
 * 描述:用户controller<BR>
 * 创建人:<BR>
 * 时间:2017年7月10日下午7:15:58<BR>
 * @version
 */
public class UserController {

    @Autowired
    private UserService userService;

    /**
     *跳转到添加用户界面
     */
    @RequestMapping("toAddUser")
    public String toAddUser(){
        return "addUser";
    }

    /**
     * 添加用户并重定向
     * @param model
     * @param user
     * @return
     */
    @RequestMapping("addUser")
    public String addUser(Model model,User user){
        if(user != null){
            userService.saveUser(user);
        }
        return "redirect:/user/userInfo";
    }

    /**
     * 修改用户
     * @param model
     * @param request
     * @param user
     * @return
     */
    @RequestMapping("updateUser")
    public String UpdateUser(Model model,User user){
        if(userService.updateUser(user)){
            user = userService.findUserById(user.getId());
            model.addAttribute("user", user);
            return "redirect:/user/userInfo";
        }
        return "/error";
    }

    /**
     * 查询所有用户
     * @param request
     * @param model
     * @return
     */
    @RequestMapping("getAllUser")
    public String getAllUser(Model model){
        List<User> user = userService.findAll();
        model.addAttribute("userList",user);
        return "allUser";
    }

    /**
     * 查询单个用户
     * @param id
     * @param request
     * @param model
     * @return
     */
    @RequestMapping("/getUser")
    public String getUser(int id,Model model){
        model.addAttribute("user", userService.findUserById(id));
        return "editUser";
    }
    /**
     * 根据id删除用户
     * @param id
     * @param request
     * @param response
     */
    @RequestMapping("/delUser")
    public String deleteUser(int id,Model model){
        model.addAttribute("user", userService.deleteUser(id));
        return "redirect:/user/userInfo";
    }

    /**
     * 分页查询用户信息
     * @param pn 默认从第一页开始  请求参数
     * @param model
     * @return
     */
    @RequestMapping("userInfo")
    public String getUsers(@RequestParam(value="pn",defaultValue="1")Integer pn, Model model){
        //从第一条开始 每页查询五条数据
        PageHelper.startPage(pn, 5);
        List<User> users = userService.findAll();
        //将用户信息放入PageInfo对象里
        PageInfo page = new PageInfo(users,5);
        model.addAttribute("pageInfo", page);
        return "allUser";
    }
}
