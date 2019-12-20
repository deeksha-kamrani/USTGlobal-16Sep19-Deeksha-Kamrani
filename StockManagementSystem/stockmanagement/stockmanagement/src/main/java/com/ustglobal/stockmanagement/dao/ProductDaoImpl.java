package com.ustglobal.stockmanagement.dao;

import java.util.List;
import javax.persistence.*;
import org.springframework.stereotype.Repository;
import com.ustglobal.stockmanagement.dto.ProductBean;

@Repository
public class ProductDaoImpl implements ProductDAO{

	@PersistenceUnit
	private EntityManagerFactory factory;

	@Override
	public ProductBean addProduct(ProductBean product) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();

		try {
			transaction.begin();
			manager.persist(product);
			transaction.commit();

		}catch (Exception e) {
			e.printStackTrace();
		}
		return product;
	}// end of addProduct()

	@Override
	public ProductBean updateProduct(ProductBean product) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();

		ProductBean Bean = manager.find(ProductBean.class, product.getProductId());
		if (Bean != null) {

			if (product.getProductName() != null) {
				Bean.setProductName(product.getProductName());
			}
			if (product.getProductCategory() != null) {
				Bean.setProductCategory(product.getProductCategory());
			}
			if (product.getProductCompany() != null) {
				Bean.setProductCompany(product.getProductCompany());
			}
			if (product.getProductQuantity() != 0) {
				Bean.setProductQuantity(product.getProductQuantity());
			}
			if (product.getProductPrice() != 0) {
				Bean.setProductPrice(product.getProductPrice());
			}
		}
		try {
			transaction.begin();
			manager.persist(Bean);
			transaction.commit();

		} catch (Exception e) {
			e.printStackTrace();
		}
		manager.close();

		return Bean;
	}// end of updateProduct()

	@Override
	public boolean deleteProduct(int productId) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();

		try {
			transaction.begin();
			ProductBean product = manager.find(ProductBean.class, productId);
			manager.remove(product);
			transaction.commit();
			return true;

		}catch (Exception e) {
			return false;
		}
	}// end of deleteProduct()

	@Override
	public List<ProductBean> getProductById(int productId) {
		EntityManager manager = factory.createEntityManager();
		return (List<ProductBean>) manager.find(ProductBean.class, productId);
	}// end of getProductById()

	@Override
	public List<ProductBean> getProductByName(String productName) {
		EntityManager manager = factory.createEntityManager();

		try {
			String jpql = "from ProductBean where productName=:productName";
			TypedQuery<ProductBean> typedQuery = manager.createQuery(jpql, ProductBean.class);
			typedQuery.setParameter("productName", productName);
			List<ProductBean> product = typedQuery.getResultList();
			return product;

		}catch (Exception e) {
			return null;
		}
	}// end of getProductByName()

	@Override
	public List<ProductBean> getProductByCategory(String productCategory) {
		EntityManager manager = factory.createEntityManager();
		String jpql = "from ProductBean where productCategory=:productCategory";

		TypedQuery<ProductBean> typedQuery = manager.createQuery(jpql, ProductBean.class);
		typedQuery.setParameter("productCategory", productCategory);

		return typedQuery.getResultList();
	}// end of getProductByCategory()

	@Override
	public List<ProductBean> getProductByCompany(String productCompany) {
		EntityManager manager = factory.createEntityManager();
		String jpql = "from ProductBean where productCompany=:productCompany";

		TypedQuery<ProductBean> typedQuery = manager.createQuery(jpql, ProductBean.class);
		typedQuery.setParameter("productCompany", productCompany);

		return typedQuery.getResultList();
	}// end of getProductByCompany()

	@Override
	public List<ProductBean> getAllProduct() {
		EntityManager manager = factory.createEntityManager();
		String jpql = "from ProductBean";

		Query query = manager.createQuery(jpql);
		List<ProductBean> productList = null;

		try {
			productList = query.getResultList();

		} catch (Exception e) {
			e.printStackTrace();
		}
		return productList;
	}// end of getAllProduct()

	@Override
	public ProductBean updateQunatity(ProductBean product) {

		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();

		ProductBean productBean = manager.find(ProductBean.class, product.getProductId());
		if (productBean != null) {

			if (product.getProductQuantity() <= 0) {
				productBean.setProductQuantity(product.getProductQuantity());
			}
		}
		try {
			transaction.begin();
			manager.persist(productBean);
			transaction.commit();

		} catch (Exception e) {
			e.printStackTrace();
		}
		manager.close();
		return productBean;

	}// end of updateQuantity()

	@Override
	public boolean checkProductName(String productName) {
		EntityManager manager = factory.createEntityManager();

		String jpql = "from ProductBean";
		Query query = manager.createQuery(jpql);
		List<ProductBean> list = query.getResultList();

		for (ProductBean productNameList : list) {

			if (productName.equals(productNameList.getProductName())) {
				return true;
			}
		}

		return false;
	}// end of checkProductName()

}
