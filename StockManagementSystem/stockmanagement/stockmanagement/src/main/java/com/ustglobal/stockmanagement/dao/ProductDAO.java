package com.ustglobal.stockmanagement.dao;

import java.util.List;

import com.ustglobal.stockmanagement.dto.ProductBean;

public interface ProductDAO {

	public ProductBean addProduct(ProductBean product);

	public ProductBean updateProduct(ProductBean product);
	
	public boolean deleteProduct(int productId);

	public List<ProductBean> getProductById(int productId);

	public List<ProductBean> getProductByName(String productName);

	public List<ProductBean> getProductByCategory(String productCategory);

	public List<ProductBean> getProductByCompany(String productCompany);

	public List<ProductBean> getAllProduct();

	public ProductBean updateQunatity(ProductBean product);
	
	public boolean checkProductName(String productName);

}// end of interface
