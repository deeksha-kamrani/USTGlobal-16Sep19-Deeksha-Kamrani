package com.ustglobal.stockmanagement.service;

import java.util.List;

import com.ustglobal.stockmanagement.dto.CartBean;

public interface CartService {
	public List<CartBean> viewCartProduct(CartBean cartBean);

	public CartBean addProductToCart(CartBean cartBean);

	public CartBean orderProduct(CartBean cartBean);
		
	public double payment(CartBean cartBean);

}
