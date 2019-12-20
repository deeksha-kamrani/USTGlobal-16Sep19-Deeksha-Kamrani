package com.ustglobal.libms.dao;

import com.ustglobal.libms.dto.Users;
import com.ustglobal.libms.exceptions.CustomException;

public interface LoginDAO {

	public Users login(Users users) throws CustomException ;
}
