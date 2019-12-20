package com.ustglobal.libms.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ustglobal.libms.dao.AdminDAO;
import com.ustglobal.libms.dao.AdminDaoImpl;
import com.ustglobal.libms.dto.Users;
import com.ustglobal.libms.exceptions.CustomException;
import com.ustglobal.libms.validation.Validation;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	AdminDAO dao = new AdminDaoImpl();

	Validation validation = new Validation();

	//add librarian
	@Override
	public Users addLibrarian(Users users) throws CustomException  {
		if(users!= null) {
			validation.validateEmail(users.getEmail());
			validation.validatePassword(users.getPassword());
			return dao.addLibrarian(users);
		}
		return null;
	}

	//delete librarian
	@Override
	public Boolean deleteLibrarian(int id) throws CustomException  {
		return dao.deleteLibrarian(id);
	}

	//display librarian
	@Override
	public List<Users> displayLibrarian() throws CustomException  {
		return dao.displayLibrarian();
	}
}