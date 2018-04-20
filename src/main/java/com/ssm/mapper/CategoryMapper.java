package com.ssm.mapper;

import com.ssm.pojo.Category;

import java.util.List;

/**
 * @Author zhujia-zp
 * @Date 2018/4/12 22:52
 */
public interface CategoryMapper {

    public List<Category> findAll();

    public int editCategory(Category category);

    public Category getCategoryById(int id);

    public Category getParentCategoryById(int parentId);

    public int deleteCategory(int id);

    public int getChildCountCategoryById(int parentId);

    public int addCategory(Category category);

}
