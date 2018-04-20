package com.ssm.controller;

import com.ssm.service.CategoryService;
import com.ssm.utils.ResponseResult;
import com.ssm.utils.TreeView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/4/12 12:06
 */
@Controller
@RequestMapping("category")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @RequestMapping("/categoryList")
    public @ResponseBody List<TreeView> categoryList(){
        return categoryService.findAll();
    }


    @RequestMapping("/categoryEdit")
    public @ResponseBody ResponseResult categoryEdit(TreeView treeView){
        return categoryService.editCategory(treeView);
    }

    @RequestMapping("/categoryDelete")
    public @ResponseBody ResponseResult categoryDelete(int id){
        return categoryService.deleteCategory(id);
    }

    @RequestMapping("/categoryAdd")
    public @ResponseBody ResponseResult categoryAdd(int parentId,String text,String icon){
        return categoryService.addCategory(parentId,text,icon);
    }

}
