package com.ustglobal.mobileapp.dao;

import java.sql.*;
import java.util.*;
import com.mysql.jdbc.Driver;

import com.ustglobal.mobileapp.MobileDB;
import com.ustglobal.mobileapp.dto.MobileBean;

public class MobileDAOImpl extends MobileDB implements MobileDAO {

	private static final String Select_Query = "select * from contact";
	private static final String Search_Query = "select * from contact where name = ?";
	private static final String Insert_Query = "insert into contact values(?,?,?)";
	private static final String Delete_Query = "delete from contact where name=?";
	private static final String Update_Query = "update contact set number=?, groups=? where name = ?";

	@Override
	public List<MobileBean> getAllContacts() {

		try(Connection conn = MobileDB.getDbConnection();
				PreparedStatement pstmt = conn.prepareStatement(Select_Query)) {
			List<MobileBean> list = new ArrayList<MobileBean>();
			try(ResultSet rs = pstmt.executeQuery()){
				MobileBean bean = new MobileBean();
				while(rs.next()) {
					bean.setName(rs.getString("name"));
					bean.setNumber(rs.getInt("number"));
					bean.setGroups(rs.getString("groups"));
				}
				list.add(bean);
				return  list;
			}
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}

	}//end of getAllContacts()

	@Override
	public MobileBean searchContacts(String name) {

		try(Connection conn = MobileDB.getDbConnection();
				PreparedStatement pstmt = conn.prepareStatement(Search_Query)) {
			pstmt.setString(1, name);
			try(ResultSet rs = pstmt.executeQuery()){
				MobileBean bean = new MobileBean();
				if(rs.next()) {
					bean.setName(rs.getString("name"));
					bean.setNumber(rs.getInt("number"));
					bean.setGroups(rs.getString("groups"));
				}
				return bean;
			}
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}// end of searchContacts()		

	@Override
	public int DeleteContactData(String name) {
		try(Connection conn = MobileDB.getDbConnection();
				PreparedStatement pstmt = conn.prepareStatement(Delete_Query)) {
			pstmt.setString(1, name);
			int count = pstmt.executeUpdate();
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}// end of DeleteContactData


	@Override
	public int insertContactData(MobileBean bean) {
		try(Connection conn = MobileDB.getDbConnection();
				PreparedStatement pstmt = conn.prepareStatement(Insert_Query)) {
			pstmt.setString(1,bean.getName());
			pstmt.setInt(2, bean.getNumber());
			pstmt.setString(3, bean.getGroups());
			int count = pstmt.executeUpdate();
			return count;
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}// end of insertContactData


	@Override
	public int updateContactData(MobileBean bean) {

		try(Connection conn = MobileDB.getDbConnection();
				PreparedStatement pstmt = conn.prepareStatement(Update_Query)) {
			pstmt.setInt(1, bean.getNumber());
			pstmt.setString(2, bean.getGroups());
			pstmt.setString(3, bean.getName());
			int count = pstmt.executeUpdate();
			return count;

		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
	}// end of updateContactData
}
