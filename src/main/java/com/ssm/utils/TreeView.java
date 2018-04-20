package com.ssm.utils;

import java.util.List;

/**
 *  树结构
 * @Author zhujia-zp
 * @Date 2018/4/12 23:01
 */
public class TreeView {

    private int id;
    private String text;
    private String icon;
    private List<TreeView> nodes;

    public TreeView(){}

    public TreeView(String text, String icon, List<TreeView> nodes) {
        this.text = text;
        this.icon = icon;
        this.nodes = nodes;
    }


    public TreeView(int id, String text, String icon, List<TreeView> nodes) {
        this.id = id;
        this.text = text;
        this.icon = icon;
        this.nodes = nodes;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public List<TreeView> getNodes() {
        return nodes;
    }

    public void setNodes(List<TreeView> nodes) {
        this.nodes = nodes;
    }


    @Override
    public String toString() {
        return "TreeView{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", icon='" + icon + '\'' +
                ", nodes=" + nodes +
                '}';
    }
}
