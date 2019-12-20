package com.ustglobal.libms.service;

import java.util.List;

import com.ustglobal.libms.dto.Users;
import com.ustglobal.libms.exceptions.CustomException;

public interface AdminService {

	public Users addLibrarian(Users users) throws CustomException ;
	public Boolean deleteLibrarian(int id) throws CustomException;
	public List<Users> displayLibrarian() throws CustomException ;
}
