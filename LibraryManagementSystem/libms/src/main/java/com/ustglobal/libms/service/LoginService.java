package com.ustglobal.libms.service;

import com.ustglobal.libms.dto.Users;
import com.ustglobal.libms.exceptions.CustomException;

public interface LoginService {

	public Users login(Users users) throws CustomException;
}
