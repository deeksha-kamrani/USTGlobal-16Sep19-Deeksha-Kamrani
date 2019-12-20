package com.ustglobal.libms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.libms.dao.StudentDAO;
import com.ustglobal.libms.dao.StudentDAOImpl;
import com.ustglobal.libms.dto.Books;
import com.ustglobal.libms.exceptions.CustomException;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	StudentDAO dao = new StudentDAOImpl();

	@Override
	public List<Books> searchBook(Books booksInventory) throws CustomException {
		return dao.searchBook(booksInventory);
	}

	@Override
	public Boolean requestBook(int bookId) throws CustomException {
		return dao.requestBook(bookId);
	}

	
}
