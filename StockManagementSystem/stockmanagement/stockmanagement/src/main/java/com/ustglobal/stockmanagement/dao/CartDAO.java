package com.ustglobal.stockmanagement.dao;

import java.util.List;

import com.ustglobal.stockmanagement.dto.CartBean;

public interface CartDAO {
	
	public List<CartBean> viewCartProduct(CartBean cartBean);

	public CartBean addProductToCart(CartBean cartBean);

	public CartBean orderProduct(CartBean cartBean);
		
	public double payment(CartBean cartBean);

}
