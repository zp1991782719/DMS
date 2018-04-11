package com.ssm.utils;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;

/**
 *  单例日志工具包
 */
public class LogUtil {

    private static Logger logger;

    private LogUtil(){

    }
    public static Logger getInstance(){
        if(logger==null){
            logger = Logger.getLogger(LogUtil.class);
        }
        BasicConfigurator.configure();
        //设置日志输出级别为info，这将覆盖配置文件中设置的级别
        logger.setLevel(Level.DEBUG);
        return logger;
    }

}
