package com.ustglobal.libms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.libms.dao.LibrarianDAO;
import com.ustglobal.libms.dao.LibrarianDAOImpl;
import com.ustglobal.libms.dto.Books;
import com.ustglobal.libms.dto.BooksRegistration;
import com.ustglobal.libms.dto.Transaction;
import com.ustglobal.libms.dto.Users;
import com.ustglobal.libms.exceptions.CustomException;
import com.ustglobal.libms.validation.Validation;

@Service
public class LibrarianServiceImpl implements LibrarianService {

	@Autowired
	 LibrarianDAO dao = new LibrarianDAOImpl();
	
	Validation validation = new Validation();

	@Override
	public Users registerStudent(Users user) throws CustomException {
		if(user!= null) {
			validation.validateEmail(user.getEmail());
			validation.validatePassword(user.getPassword());
			return dao.registerStudent(user);
		}
		return null;
	}
 
	@Override
	public Boolean addBooks(Books booksInventory) throws CustomException {
		return dao.addBooks(booksInventory);
	}

	@Override
	public Boolean deleteBook(int bookId) throws CustomException  {
		return dao.deleteBook(bookId);
	}

	@Override
	public List<Books> showAllBooks() throws CustomException {
		return dao.showAllBooks();
	}

	@Override
	public Users getStudentInfo(int id) throws CustomException {
		return dao.getStudentInfo(id);
	}

	@Override
	public List<BooksRegistration> viewRequest() throws CustomException {
		return dao.viewRequest();
	}

	@Override
	public Boolean deleteStudent(int id) throws CustomException {
		return dao.deleteStudent(id);
	}
	
	@Override
	public List<Transaction> getIssuedBooks() throws CustomException{
		return dao.getIssuedBooks();
	}

	@Override
	public Boolean rejectBook(int registrationId) throws CustomException {
		return dao.rejectBook(registrationId);
	}

	@Override
	public Boolean acceptRequest(int registrationId) throws CustomException {
		return dao.acceptRequest(registrationId);
	}
}