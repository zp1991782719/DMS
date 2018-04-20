package com.ssm.service.dto;

import java.util.Date;

/**
 * @Author zhujia-zp
 * @Date 2018/4/14 21:04
 */
public class DrugDto {

    private int id;
    private String name;
    private int categoryId;
    private String categoryName;
    private int provideId;
    private String provideName;
    private double price;
    private Date validDate;
    private String image;

    public DrugDto() {
    }

    public DrugDto(int id, String name, int categoryId, String categoryName, int provideId, String provideName, double price, Date validDate, String image) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.provideId = provideId;
        this.provideName = provideName;
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

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public int getProvideId() {
        return provideId;
    }

    public void setProvideId(int provideId) {
        this.provideId = provideId;
    }

    public String getProvideName() {
        return provideName;
    }

    public void setProvideName(String provideName) {
        this.provideName = provideName;
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
        return "DrugDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", categoryId=" + categoryId +
                ", categoryName='" + categoryName + '\'' +
                ", provideId=" + provideId +
                ", provideName='" + provideName + '\'' +
                ", price=" + price +
                ", validDate=" + validDate +
                ", image='" + image + '\'' +
                '}';
    }
}
