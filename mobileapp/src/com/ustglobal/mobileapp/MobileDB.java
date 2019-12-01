package com.ustglobal.mobileapp;

import java.sql.*;

public class MobileDB {
	
	private  static Connection conn = null;
	private static String url = "jdbc:mysql://localhost:3306/contactfile?user=root&password=tiger";
	public static Connection getDbConnection() {
		try {
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(url);
		return conn;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
