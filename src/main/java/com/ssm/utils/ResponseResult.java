package com.ssm.utils;

/**
 * @Author zhujia-zp
 * @Date 2018/4/9 22:31
 */
public class ResponseResult {

    private String result;

    private String msg;

    public ResponseResult() {
    }

    public ResponseResult(String result, String msg) {
        this.result = result;
        this.msg = msg;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    @Override
    public String toString() {
        return "ResponseResult{" +
                "result='" + result + '\'' +
                ", msg='" + msg + '\'' +
                '}';
    }
}
