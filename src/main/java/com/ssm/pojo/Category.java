package com.ssm.pojo;

/**
 * @Author zhujia-zp
 * @Date 2018/4/12 12:04
 */
public class Category {

    private int id;
    private String name;
    private int parentId;
    private String icon;
    private String leaf;

    public Category(){

    }

    public Category(int id, String name, int parentId) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
    }

    public Category(int id, String name, int parentId, String icon, String leaf) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
        this.icon = icon;
        this.leaf = leaf;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getParentId() {
        return parentId;
    }

    public void setParentId(int parentId) {
        this.parentId = parentId;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getLeaf() {
        return leaf;
    }

    public void setLeaf(String leaf) {
        this.leaf = leaf;
    }

    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", parentId=" + parentId +
                ", icon='" + icon + '\'' +
                ", leaf='" + leaf + '\'' +
                '}';
    }
}
