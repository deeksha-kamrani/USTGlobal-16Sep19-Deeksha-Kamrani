package com.ustglobal.libms.service;

import java.util.List;

import com.ustglobal.libms.dto.Books;
import com.ustglobal.libms.exceptions.CustomException;

public interface StudentService {

	public List<Books> searchBook(Books booksInventory) throws CustomException ;
	public Boolean requestBook(int bookId) throws CustomException ;
}
