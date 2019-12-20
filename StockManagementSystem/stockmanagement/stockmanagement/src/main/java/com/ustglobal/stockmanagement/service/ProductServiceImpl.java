package com.ustglobal.stockmanagement.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ustglobal.stockmanagement.dao.ProductDAO;
import com.ustglobal.stockmanagement.dto.ProductBean;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductDAO dao;

	@Override
	public ProductBean addProduct(ProductBean product) {
		return dao.addProduct(product);
	}

	@Override
	public ProductBean updateProduct(ProductBean product) {
		return dao.updateProduct(product);
	}

	@Override
	public boolean deleteProduct(int productId) {
		return dao.deleteProduct(productId);
	}

	@Override
	public List<ProductBean> getProductById(int productId) {
		return dao.getProductById(productId);
	}

	@Override
	public List<ProductBean> getProductByName(String productName) {
		return dao.getProductByName(productName);
	}

	@Override
	public List<ProductBean> getProductByCategory(String productCategory) {
		return dao.getProductByCategory(productCategory);
	}

	@Override
	public List<ProductBean> getProductByCompany(String productCompany) {
		return dao.getProductByCompany(productCompany);
	}

	@Override
	public List<ProductBean> getAllProduct() {
		return dao.getAllProduct();
	}

	@Override
	public ProductBean updateQunatity(ProductBean product) {
		return dao.updateQunatity(product);
	}

	@Override
	public boolean checkProductName(String productName) {
		return dao.checkProductName(productName);
	}
}