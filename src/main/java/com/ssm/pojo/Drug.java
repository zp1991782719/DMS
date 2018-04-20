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
    private int categoryId;
    private int provideId;
    private double price;
    private Date validDate;
    private String image;

    public Drug(){

    }

    public Drug(int id, String name, int categoryId, int provideId, double price, Date validDate, String image) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.provideId = provideId;
        this.price = price;
        this.validDate = validDate;
        this.image = image;
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

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public int getProvideId() {
        return provideId;
    }

    public void setProvideId(int provideId) {
        this.provideId = provideId;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Drug{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", categoryId=" + categoryId +
                ", provideId=" + provideId +
                ", price=" + price +
                ", validDate=" + validDate +
                ", image='" + image + '\'' +
                '}';
    }
}
