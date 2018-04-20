package com.ssm.pojo;

/**
 * @Author zhujia-zp
 * @Date 2018/4/15 20:00
 */
public class Store {

    private int id;
    private int drugId;
    private int provideId;
    private int count;

    public Store() {
    }

    public Store(int id, int drugId, int provideId, int count) {
        this.id = id;
        this.drugId = drugId;
        this.provideId = provideId;
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

    @Override
    public String toString() {
        return "Store{" +
                "id=" + id +
                ", drugId=" + drugId +
                ", provideId=" + provideId +
                ", count=" + count +
                '}';
    }
}
