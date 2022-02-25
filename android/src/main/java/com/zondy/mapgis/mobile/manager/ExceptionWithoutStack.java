package com.zondy.mapgis.mobile.manager;


import androidx.annotation.NonNull;

/**
 * 不输出栈信息的Exception，用作已知异常的处理和流程控制，因为重写了特定方法而不影响性能。<br>
 * 其性能损失基本等同于if else<br>
 */
public class ExceptionWithoutStack extends Exception {
    private static final long serialVersionUID = -8616618198284202008L;
    private String message;

    public ExceptionWithoutStack(String message) {
        this.message = message;
    }

    public ExceptionWithoutStack() {
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    /**
     * 重写耗时的fillInStackTrace方法
     *
     * @return
     */
    @NonNull
    @Override
    public /*synchronized*/ Throwable fillInStackTrace() {
//        return super.fillInStackTrace();
        return this;
    }

    /**
     * toString()方法也一并重写
     *
     * @return
     */
    @NonNull
    @Override
    public String toString() {
        return message;
    }
}
