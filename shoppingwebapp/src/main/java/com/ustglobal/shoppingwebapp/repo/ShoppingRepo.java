package com.ustglobal.shoppingwebapp.repo;

import java.util.List;

import com.ustglobal.shoppingwebapp.beans.Product;
import com.ustglobal.shoppingwebapp.beans.Retailer;

public interface ShoppingRepo {
	public int register( Retailer bean);
	public Retailer login(int retailerId, String password);
	public Retailer searchProduct(int retailerId);
	public boolean updatePassword(int retailerId,String Password);
	public double totalAmount(Product amount);
	public List<Product> getAllOrders();
}
