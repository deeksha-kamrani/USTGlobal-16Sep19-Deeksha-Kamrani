package com.ustglobal.mobileapp.dao;

import java.util.List;

import com.ustglobal.mobileapp.dto.MobileBean;

public interface MobileDAO {
	
	public List<MobileBean> getAllContacts();
	public MobileBean searchContacts(String name);
	public int DeleteContactData(String name);
	public int insertContactData(MobileBean bean);
	public int updateContactData(MobileBean bean);
	
}
