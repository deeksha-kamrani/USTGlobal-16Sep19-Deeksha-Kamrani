package com.ustglobal.shoppingwebapp.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.ustglobal.shoppingwebapp.beans.Product;
import com.ustglobal.shoppingwebapp.beans.Retailer;

@Repository
public class ShoppingDaoImpl implements ShoppingDAO {


	@PersistenceUnit
	private EntityManagerFactory factory;


	@Override
	public int register(Retailer bean) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		try {
			manager.persist(bean);
			transaction.commit();
			return bean.getRetailerId();
		}catch (Exception e) {
			e.printStackTrace();
			return -1;
		}
	}


	@Override
	public Retailer login(int retailerId, String password) {
		String jpql = "from Retailer where retailerId=:retailerId and password=:password";
		EntityManager manager = factory.createEntityManager();

		TypedQuery<Retailer> query = manager.createQuery(jpql, Retailer.class);

		query.setParameter("retailerId", retailerId);
		query.setParameter("password", password);

		try {
			Retailer bean =query.getSingleResult();
			return bean;
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}


	@Override
	public Retailer searchProduct(int retailerId) {
		EntityManager manager = factory.createEntityManager();
		return manager.find(Retailer.class, retailerId);
	}

	@Override
	public boolean updatePassword(int retailerId, String Password) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		transaction.begin();
		Retailer bean = manager.find(Retailer.class, retailerId);
		bean.setPassword(Password);
		transaction.commit();
		return true;
	}


	@Override
	public double totalAmount(Product amount) {
		return 0;
	}

	@Override
	public List<Product> getAllOrders() {
		return null;
	}


}
