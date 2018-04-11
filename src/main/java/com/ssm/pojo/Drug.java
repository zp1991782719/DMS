package com.ssm.pojo;

import java.util.Date;

/**
 *  药品信息
 * @Author zhujia-zp
 * @Date 2018/4/11 23:30
 */
public class Drug {

    private int id;
    private String name;
    private int catagory_id;
    private int provide_id;
    private double price;
    private Date validDate;

    public Drug(){

    }

    public Drug(int id, String name, int catagory_id, int provide_id, double price, Date validDate) {
        this.id = id;
        this.name = name;
        this.catagory_id = catagory_id;
        this.provide_id = provide_id;
        this.price = price;
        this.validDate = validDate;
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

    public int getCatagory_id() {
        return catagory_id;
    }

    public void setCatagory_id(int catagory_id) {
        this.catagory_id = catagory_id;
    }

    public int getProvide_id() {
        return provide_id;
    }

    public void setProvide_id(int provide_id) {
        this.provide_id = provide_id;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Date getValidDate() {
        return validDate;
    }

    public void setValidDate(Date validDate) {
        this.validDate = validDate;
    }

    @Override
    public String toString() {
        return "Drug{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", catagory_id=" + catagory_id +
                ", provide_id=" + provide_id +
                ", price=" + price +
                ", validDate=" + validDate +
                '}';
    }
}
