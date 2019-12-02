package com.ustglobal.shoppingwebapp.beans;

import java.util.List;

import javax.persistence.*;

import net.bytebuddy.build.ToStringPlugin.Exclude;


@Entity
@Table(name="product")
public class Product {
	@Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int orderId;
    @Column
	private int quantity;
    @Column
	private double amountPayable;
	@Column
	private String productName;
	@Column
	private String pricePerUnit;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="retailerId", nullable = false)
	
	private Retailer retailer;
	
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getAmountPayable() {
		return amountPayable;
	}
	public void setAmountPayable(double amountPayable) {
		this.amountPayable = amountPayable;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getPricePerUnit() {
		return pricePerUnit;
	}
	public void setPricePerUnit(String pricePerUnit) {
		this.pricePerUnit = pricePerUnit;
	}
	
	
	
}
