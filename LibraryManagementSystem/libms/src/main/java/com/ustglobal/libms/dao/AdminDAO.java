package com.ustglobal.libms.dao;

import java.util.List;

import com.ustglobal.libms.dto.Users;
import com.ustglobal.libms.exceptions.CustomException;

public interface AdminDAO {

	public Users addLibrarian(Users users)  throws CustomException ;
	public Boolean deleteLibrarian(int id)  throws CustomException;
	public List<Users> displayLibrarian()  throws CustomException;

}
