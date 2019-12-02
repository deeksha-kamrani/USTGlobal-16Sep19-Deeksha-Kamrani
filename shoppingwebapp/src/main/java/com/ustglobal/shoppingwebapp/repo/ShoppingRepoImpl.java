package com.ustglobal.shoppingwebapp.repo;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.shoppingwebapp.beans.Product;
import com.ustglobal.shoppingwebapp.beans.Retailer;
import com.ustglobal.shoppingwebapp.dao.ShoppingDAO;

@Service
public class ShoppingRepoImpl implements ShoppingRepo{
	
	@Autowired
	private ShoppingDAO dao;

	@Override
	public int register(Retailer bean) {
		return dao.register(bean);
	}

	@Override
	public Retailer login(int retailerId, String password) {
		return dao.login(retailerId, password);
	}

	@Override
	public Retailer searchProduct(int retailerId) {
		return dao.searchProduct(retailerId);
	}

	@Override
	public boolean updatePassword(int retailerId, String Password) {
		return dao.updatePassword(retailerId, Password);
	}

	@Override
	public double totalAmount(Product amount) {
		return dao.totalAmount(amount);
	}

	@Override
	public List<Product> getAllOrders() {
		return dao.getAllOrders();
	}

	
}