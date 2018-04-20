package com.ssm.service.impl;

import com.ssm.mapper.CategoryMapper;
import com.ssm.pojo.Category;
import com.ssm.service.CategoryService;
import com.ssm.utils.LogUtil;
import com.ssm.utils.ResponseResult;
import com.ssm.utils.TreeView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/4/12 22:57
 */
@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    CategoryMapper categoryMapper;


    /**
     *  查找所有类别
     * @return  树的封装包装类
     */
    public List<TreeView> findAll() {
        List<TreeView> treeViewList = new ArrayList<TreeView>();
        List<Category> categoryList = categoryMapper.findAll();
        for(int i=0;i<categoryList.size();i++){
            Category category = categoryList.get(i);
            if(category.getParentId()==-1){
                TreeView treeView = new TreeView();
                treeView.setId(category.getId());
                treeView.setIcon(category.getIcon());
                treeView.setText(category.getName());
                treeView = getChildCategoryList(categoryList,treeView);
                treeViewList.add(treeView);
            }
        }
        return treeViewList;
    }

    /**
     *     修改类别
     * @param treeView  修改的内容
     * @return  结果
     */
    public ResponseResult editCategory(TreeView treeView) {
        ResponseResult responseResult = new ResponseResult();
        Category category = categoryMapper.getCategoryById(treeView.getId());
        category.setName(treeView.getText());
        category.setIcon(treeView.getIcon());
        int num = categoryMapper.editCategory(category);
        if(num>0){
            responseResult.setResult("success");
            responseResult.setMsg("修改类别成功");
        }else{
            responseResult.setResult("error");
            responseResult.setMsg("修改类别失败，请联系管理员周大大");
        }
        return responseResult;
    }

    /**
     *     删除类别
     * @param id
     * @return
     */
    public ResponseResult deleteCategory(int id) {
        ResponseResult responseResult = new ResponseResult();
        Category category = categoryMapper.getCategoryById(id);
        if("1".equals(category.getLeaf())){
            int childCount = categoryMapper.getChildCountCategoryById(category.getParentId());
            if(childCount<=1){
                Category parentCategory = categoryMapper.getParentCategoryById(category.getParentId());
                parentCategory.setLeaf("1");
                int editNum = categoryMapper.editCategory(parentCategory);
                if(editNum<=0){
                    responseResult.setResult("error");
                    responseResult.setMsg("删除"+category.getName()+"类别失败,关联的节点没改变");
                    return responseResult;
                }
            }
            int deleteNum = categoryMapper.deleteCategory(id);
            if(deleteNum<=0){
                responseResult.setResult("error");
                responseResult.setMsg("删除"+category.getName()+"类别失败,请联系管理员");
                return responseResult;
            }
            responseResult.setResult("success");
            responseResult.setMsg("删除"+category.getName()+"类别成功");
        }else{
            responseResult.setResult("error");
            responseResult.setMsg("删除"+category.getName()+"类别失败,只能删除根类别");
        }
        return responseResult;
    }

    public ResponseResult addCategory(int parentId, String text, String icon) {
        ResponseResult responseResult = new ResponseResult();
        Category category = new Category();
        category.setName(text);
        category.setParentId(parentId);
        category.setIcon(icon);
        category.setLeaf("1");
        Category parentCategory = categoryMapper.getCategoryById(parentId);
        LogUtil.getInstance().debug(category+"parent");
        if("1".equals(parentCategory.getLeaf())){
            parentCategory.setLeaf("0");
            LogUtil.getInstance().debug(parentCategory+"parent");
            int editNum = categoryMapper.editCategory(parentCategory);
            if(editNum<=0){
                responseResult.setResult("error");
                responseResult.setMsg("添加"+category.getName()+"类别时关联的父节点没改变");
                return responseResult;
            }
        }
        int addNum = categoryMapper.addCategory(category);
        if(addNum<=0){
            responseResult.setResult("error");
            responseResult.setMsg("添加"+category.getName()+"类别失败，请联系管理员周大大");
        }else{
            responseResult.setResult("success");
            responseResult.setMsg("添加"+category.getName()+"类别成功");
        }
        return responseResult;
    }


    /**
     *      将菜单的子元素设置好
     * @param categoryList
     * @param parentTreeView
     * @return
     */

    public TreeView getChildCategoryList(List<Category> categoryList,TreeView parentTreeView){
        List<TreeView> treeViews = new ArrayList<TreeView>();
        for(int i=0;i<categoryList.size();i++){
            Category category = categoryList.get(i);
            if(category.getParentId()==parentTreeView.getId()){
                TreeView childTree = new TreeView();
                childTree.setId(category.getId());
                childTree.setIcon(category.getIcon());
                childTree.setText(category.getName());
                if("0".equals(category.getLeaf())){
                    childTree = getChildCategoryList(categoryList,childTree);
                }
                treeViews.add(childTree);
            }
        }
        parentTreeView.setNodes(treeViews);
        return parentTreeView;
    }

}
