package com.ustglobal.springmvcassessment.service;

import java.util.List;

import com.ustglobal.springmvcassessment.beans.OrderProduct;
import com.ustglobal.springmvcassessment.beans.Product;
import com.ustglobal.springmvcassessment.beans.User;

public interface ProductService {
	public User login(String email,String password);
	public boolean register(User user);
	public Product search(String pname);
	public boolean updatePassword(String email,String password);
	public List<OrderProduct> getProducts(String email);
	public boolean buyProduct(User user,Product product,int quantity);
}
