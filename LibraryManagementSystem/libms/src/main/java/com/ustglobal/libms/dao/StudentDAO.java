package com.ustglobal.libms.dao;

import java.util.List;

import com.ustglobal.libms.dto.Books;
import com.ustglobal.libms.exceptions.CustomException;

public interface StudentDAO {

	public List<Books> searchBook(Books booksInventory) throws CustomException;
	public Boolean requestBook(int bookId) throws CustomException;
}
