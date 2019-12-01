package com.ustglobal.mobileapp.util;

import com.ustglobal.mobileapp.dao.MobileDAO;
import com.ustglobal.mobileapp.dao.MobileDAOImpl;

public class MobileManager {
	
	public static MobileDAO getMobileDAO() {
		return new MobileDAOImpl();
	}

}
