package com.ustglobal.stockmanagement.dto;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "Order_Info")
public class OrderBean {
	@Id
	@Column
	@GeneratedValue
	private int orderId;
	@Column
	private double totalPrice;
	@Column
	private double gstPrice;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name= "Order_History_Info", joinColumns = @JoinColumn(name="orderId"), 
	inverseJoinColumns = @JoinColumn(name="productId"))
	
	private List<ProductBean> ProductBean;
	
	// getter and setter methods
	
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	public double getGstPrice() {
		return gstPrice;
	}
	public void setGstPrice(double gstPrice) {
		this.gstPrice = gstPrice;
	}
	public List<ProductBean> getProductBean() {
		return ProductBean;
	}
	public void setProductBean(List<ProductBean> productBean) {
		ProductBean = productBean;
	}
}
