package com.ustglobal.stockmanagement.response;

import java.util.List;

import com.ustglobal.stockmanagement.dto.OrderBean;
import com.ustglobal.stockmanagement.dto.ProductBean;

public class ProductResponse {

	private int statusCode;
	private String message;
	private String description;

	private ProductBean productBean;
	private List<ProductBean> productBeanList;

	private OrderBean orderBean;
	private List<ProductBean> orderBeanList;

	// getter and setter methods

	public int getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public ProductBean getProductBean() {
		return productBean;
	}
	public void setProductBean(ProductBean productBean) {
		this.productBean = productBean;
	}
	public List<ProductBean> getProductBeanList() {
		return productBeanList;
	}
	public void setProductBeanList(List<ProductBean> productBeanList) {
		this.productBeanList = productBeanList;
	}
	public OrderBean getOrderBean() {
		return orderBean;
	}
	public void setOrderBean(OrderBean orderBean) {
		this.orderBean = orderBean;
	}
	public List<ProductBean> getOrderBeanList() {
		return orderBeanList;
	}
	public void setOrderBeanList(List<ProductBean> orderBeanList) {
		this.orderBeanList = orderBeanList;
	}
}
