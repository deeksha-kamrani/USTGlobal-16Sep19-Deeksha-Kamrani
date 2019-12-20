package com.ustglobal.stockmanagement.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.ustglobal.stockmanagement.dto.CartBean;
import com.ustglobal.stockmanagement.dto.ProductBean;

@Repository
public class CartDaoImpl implements CartDAO {
	@PersistenceUnit
	private EntityManagerFactory emf;

	@Override
	public List<CartBean> viewCartProduct(CartBean cartBean) {
		EntityManager em = emf.createEntityManager();
		EntityTransaction et = em.getTransaction();
		String jpql = "from CartBean where id=:id";

		et.begin();
		Query que = em.createQuery(jpql);
		int id = cartBean.getId();
		que.setParameter("id", id);
		List<CartBean> cartList = null;
		cartList = que.getResultList();

		et.commit();
		return cartList;
	}

	@Override
	public CartBean addProductToCart(CartBean cartBean) {
		EntityManager em = emf.createEntityManager();
		EntityTransaction et = em.getTransaction();
		ProductBean productBean = null;
		et.begin();
		String productName = cartBean.getProductName();
		String jpql2 = "from ProductBean where productName=:productName";
		Query q2 = em.createQuery(jpql2);
		q2.setParameter("productName", productName);
		productBean = (ProductBean) q2.getSingleResult();
		cartBean.setProductName(productName);

		double productPrice = productBean.getProductPrice();
		cartBean.setProductPrice(productPrice);

		int productId = productBean.getProductId();
		cartBean.setProductId(productId);

		String productCompany = productBean.getProductCompany();
		cartBean.setProductDescription(productCompany);

		String productCategory = productBean.getProductCategory();
		cartBean.setProductCategory(productCategory);

		int productQuantity = cartBean.getProductQuantity();
		cartBean.setProductQuantity(productQuantity);
		try {

			em.persist(cartBean);
			et.commit();

		} catch (Exception e) {
			e.printStackTrace();
		}
		em.close();
		return cartBean;
	}

	

	@Override
	public CartBean orderProduct(CartBean cartBean) {
		return null;
	}

	@Override
	public double payment(CartBean cartBean) {
		EntityManager em = emf.createEntityManager();
		EntityTransaction et = em.getTransaction();
		String jpql = "select SUM(productPrice*productQuantity) from CartBean where id=:id AND productId=:productId";

		et.begin();
		Query que = em.createQuery(jpql);
		
		int id = cartBean.getId();
		System.out.println(".."+id);
		
		int productId = cartBean.getProductId();
		System.out.println(".."+productId);
		
		que.setParameter("id", id);
		que.setParameter("productId", productId);
		
		double totalBill = 0;
		List<Double> list = que.getResultList();
		for (Double double1 : list) {
			totalBill = double1.doubleValue();
		}

		et.commit();
		return totalBill;
	}
	}


