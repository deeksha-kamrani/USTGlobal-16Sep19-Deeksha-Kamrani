package com.ustglobal.stockmanagement.dto;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "Products_Info")
public class ProductBean {
	@Id
	@Column
	@GeneratedValue
	private int productId;
	@Column(unique = true)
	private String productName;
	@Column
	private String productCategory;
	@Column
	private String productCompany;
	@Column
	private int productQuantity;
	@Column
	private double productPrice;
	
	//getter and setter methods
	
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductCategory() {
		return productCategory;
	}
	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}
	public String getProductCompany() {
		return productCompany;
	}
	public void setProductCompany(String productCompany) {
		this.productCompany = productCompany;
	}
	public int getProductQuantity() {
		return productQuantity;
	}
	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}
	public double getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(double productPrice) {
		this.productPrice = productPrice;
	}
		
}
