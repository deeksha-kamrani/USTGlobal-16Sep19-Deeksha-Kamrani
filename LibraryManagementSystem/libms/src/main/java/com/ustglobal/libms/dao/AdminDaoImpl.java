package com.ustglobal.libms.dao;

import java.util.List;
import javax.persistence.*;
import org.springframework.stereotype.Repository;
import com.ustglobal.libms.dto.Users;
import com.ustglobal.libms.exceptions.CustomException;

@Repository
public class AdminDaoImpl implements AdminDAO {

	static final EntityManagerFactory FACTORY = Persistence.createEntityManagerFactory("book-unit");

	// Add Librarian
	@Override
	public Users addLibrarian(Users users)  throws CustomException {
		//users.setType("Librarian");
		try {
			EntityManager manager = FACTORY.createEntityManager();
			manager.getTransaction().begin();
			manager.persist(users);
			manager.getTransaction().commit();
			manager.close();
		} catch (Exception e) {
			throw new CustomException("Failed to add Librarin");
		}
		return users;
	}

	// delete Librarian
	@Override
	public Boolean deleteLibrarian(int id) throws CustomException{
		boolean isDeleted = false;
		try {
			EntityManager manager = FACTORY.createEntityManager();
			Users user = manager.find(Users.class, id);
			manager.getTransaction().begin();
			manager.remove(user);
			manager.getTransaction().commit();
			isDeleted = true;
			manager.close();
		} catch (Exception e) {
			throw new CustomException("Failed to Delete Librarin");
		}
		return isDeleted;
	}

	// display Librarian
	@Override
	public List<Users> displayLibrarian() throws CustomException {
		List<Users> userList = null;
		try {
			EntityManager manager = FACTORY.createEntityManager();
			TypedQuery<Users> typedQuery = manager.createQuery("FROM Users WHERE type = 'Librarian'", Users.class);
			userList = typedQuery.getResultList();
		} catch (Exception e) {
			throw new CustomException("No Data Found");
		}
		return userList;
	}
}