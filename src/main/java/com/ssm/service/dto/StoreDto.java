package com.ssm.service.dto;

/**
 * @Author zhujia-zp
 * @Date 2018/4/15 20:00
 */
public class StoreDto {

    private int id;
    private int drugId;
    private String drugName;
    private int provideId;
    private String provideName;
    private int count;

    public StoreDto() {
    }

    public StoreDto(int id, int drugId, int provideId, int count) {
        this.id = id;
        this.drugId = drugId;
        this.provideId = provideId;
        this.count = count;
    }

    public StoreDto(int id, int drugId, String drugName, int provideId, String provideName, int count) {
        this.id = id;
        this.drugId = drugId;
        this.drugName = drugName;
        this.provideId = provideId;
        this.provideName = provideName;
        this.count = count;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getDrugId() {
        return drugId;
    }

    public void setDrugId(int drugId) {
        this.drugId = drugId;
    }

    public int getProvideId() {
        return provideId;
    }

    public void setProvideId(int provideId) {
        this.provideId = provideId;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public String getDrugName() {
        return drugName;
    }

    public void setDrugName(String drugName) {
        this.drugName = drugName;
    }

    public String getProvideName() {
        return provideName;
    }

    public void setProvideName(String provideName) {
        this.provideName = provideName;
    }

    @Override
    public String toString() {
        return "StoreDto{" +
                "id=" + id +
                ", drugId=" + drugId +
                ", drugName='" + drugName + '\'' +
                ", provideId=" + provideId +
                ", provideName='" + provideName + '\'' +
                ", count=" + count +
                '}';
    }
}
