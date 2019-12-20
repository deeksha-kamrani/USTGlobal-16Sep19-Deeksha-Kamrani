package com.ustglobal.stockmanagement.service;

import java.util.List;

import javax.websocket.server.ServerEndpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ustglobal.stockmanagement.dao.CartDAO;
import com.ustglobal.stockmanagement.dto.CartBean;
@Service
public class CartServiceImpl implements CartService{
	
	@Autowired
	private CartDAO dao;

	@Override
	public List<CartBean> viewCartProduct(CartBean cartBean) {
		return dao.viewCartProduct(cartBean) ;
	}

	@Override
	public CartBean addProductToCart(CartBean cartBean) {
		return dao.addProductToCart(cartBean);
	}

	@Override
	public CartBean orderProduct(CartBean cartBean) {
		return dao.orderProduct(cartBean);
	}

	@Override
	public double payment(CartBean cartBean) {
		return dao.payment(cartBean);
	}

}
