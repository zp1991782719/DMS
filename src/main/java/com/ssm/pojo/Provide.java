package com.ssm.pojo;

/**
 *  供应商
 * @Author zhujia-zp
 * @Date 2018/4/14 12:41
 */
public class Provide {

    private int id;
    private String name;
    private String director;
    private String phone;
    private String email;

    public Provide() {
    }

    public Provide(int id, String name, String director, String phone, String email) {
        this.id = id;
        this.name = name;
        this.director = director;
        this.phone = phone;
        this.email = email;
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

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Provide{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", director='" + director + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
