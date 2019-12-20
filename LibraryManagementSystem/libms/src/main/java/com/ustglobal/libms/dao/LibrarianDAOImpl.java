package com.ustglobal.libms.dao;

import java.util.*;
import javax.persistence.*;
import org.springframework.stereotype.Repository;
import com.ustglobal.libms.dto.Books;
import com.ustglobal.libms.dto.BooksRegistration;
import com.ustglobal.libms.dto.Transaction;
import com.ustglobal.libms.dto.Users;
import com.ustglobal.libms.exceptions.CustomException;

@Repository
public class LibrarianDAOImpl implements LibrarianDAO {

	static final EntityManagerFactory FACTORY = Persistence.createEntityManagerFactory("book-unit");

	// Add Student
	@Override
	public Users registerStudent(Users user) throws CustomException {
		user.setType("Student");
		try {
			EntityManager manager = FACTORY.createEntityManager();
			manager.getTransaction().begin();
			manager.persist(user);
			manager.getTransaction().commit();
			manager.close();
		} catch (Exception e) {
			throw new CustomException("Failed to add Student");
		}
		return user;
	}

	// delete Student
	@Override
	public Boolean deleteStudent(int id) throws CustomException  {
		boolean isDeleted = false;
		try {
			EntityManager manager = FACTORY.createEntityManager();
			manager.getTransaction().begin();
			Users users = manager.find(Users.class, id);
			manager.remove(users);
			manager.getTransaction().commit();
			isDeleted = true;
			manager.close();
		} catch (Exception e) {
			throw new CustomException("Failed to delete the Student");
		}
		return isDeleted;
	}

	// add Book
	@Override
	public Boolean addBooks(Books booksInventory) throws CustomException{
		boolean isAdded = false;
		Random random = new Random();
		booksInventory.setBookId(random.nextInt(1000));
		try {
			EntityManager manager = FACTORY.createEntityManager();
			manager.getTransaction().begin();
			manager.persist(booksInventory);
			manager.getTransaction().commit();
			isAdded = true;
			manager.close();
		} catch (Exception e) {
			throw new CustomException("Failed to add the book");
		}
		return isAdded;
	}

	// delete Book
	@Override
	public Boolean deleteBook(int bookId)  throws CustomException{
		boolean isDeleted = false;
		try {
			EntityManager manager = FACTORY.createEntityManager();
			manager.getTransaction().begin();
			Books booksInventory = manager.find(Books.class, bookId);
			manager.remove(booksInventory);
			manager.getTransaction().commit();
			isDeleted = true;
			manager.close();
		} catch (Exception e) {
			throw new CustomException("Failed to delete the book from Books");
		}
		return isDeleted;
	}

	// student information
	@Override
	public Users getStudentInfo(int id) throws CustomException{
		Users users = null;
		try {
			EntityManager manager = FACTORY.createEntityManager();
			manager.getTransaction().begin();
			users = manager.find(Users.class, id);
			manager.getTransaction().commit();
			manager.close();
		} catch (Exception e) {
			throw new CustomException("Failed to fetch the Student Info");
		}
		return users;
	}


	// view request
	@Override
	public List<BooksRegistration> viewRequest() throws CustomException {
		List<BooksRegistration> booksRegistrations = null;
		try {
			EntityManager manager = FACTORY.createEntityManager();
			TypedQuery<BooksRegistration> typedQuery = manager.createQuery("FROM BooksRegistration", BooksRegistration.class);
			booksRegistrations = typedQuery.getResultList();
			manager.close();
		} catch (Exception e) {
			throw new CustomException("Failed to Fetch the Requests");
		}
		return booksRegistrations;
	}

	// show all books()
	@Override
	public List<Books> showAllBooks() throws CustomException{
		List<Books> booksInventories = null;
		try {
			EntityManager manager = FACTORY.createEntityManager();
			TypedQuery<Books> query = manager.createQuery("FROM Books", Books.class);
			booksInventories = query.getResultList();
		} catch (Exception e) {
			throw new CustomException("Failed to fetch the books from Books");
		}
		return booksInventories;
	}	
	@Override
	public List<Transaction> getIssuedBooks() throws CustomException{
		List<Transaction> trans = null;
		try {
			EntityManager manager = FACTORY.createEntityManager();
			TypedQuery<Transaction> jpql = manager.createQuery("FROM Transaction", Transaction.class);
			trans = jpql.getResultList();
			manager.close();
		} catch (Exception e) {
			throw new CustomException("Failed to fetch the books from Books");
		}
		return trans;

	}

	//acceptRequest
	@Override
	public Boolean acceptRequest(int registrationId) throws CustomException {
		boolean isAccepted = false;
		Transaction trans = new Transaction();
		try {
			EntityManager manager = FACTORY.createEntityManager();
			manager.getTransaction().begin();
			BooksRegistration br = manager.find(BooksRegistration.class, registrationId);
			trans.setRegistrationId(br.getRegistrationId());
			trans.setIssueDate(br.getRegistrationDate());
			manager.persist(trans);
			manager.remove(registrationId);
			manager.getTransaction().commit();
			isAccepted = true;
			manager.close();
		} catch (Exception e) {
			throw new CustomException("Failed to fetch issued Books");
		}
		return isAccepted;
	}// end of acceptRequest()

	@Override
	public Boolean rejectBook(int registrationId) throws CustomException {
		boolean isDeleted = false;
		try {
			EntityManager manager = FACTORY.createEntityManager();
			manager.getTransaction().begin();
			BooksRegistration booksRegistration = manager.find(BooksRegistration.class, registrationId);
			manager.remove(booksRegistration);
			manager.getTransaction().commit();
			isDeleted = true;
			manager.close();
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Failed to delete the book from Books");

		}
		return isDeleted;
	}

}