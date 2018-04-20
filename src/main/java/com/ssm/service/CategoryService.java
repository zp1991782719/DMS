package com.ssm.service;

import com.ssm.utils.ResponseResult;
import com.ssm.utils.TreeView;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/4/12 22:57
 */
public interface CategoryService {

    public List<TreeView> findAll();

    public ResponseResult editCategory(TreeView treeView);

    public ResponseResult deleteCategory(int id);

    public ResponseResult addCategory(int parentId,String text,String icon);

}
