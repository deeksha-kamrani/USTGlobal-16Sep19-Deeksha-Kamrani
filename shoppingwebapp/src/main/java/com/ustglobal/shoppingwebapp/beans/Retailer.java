package com.ustglobal.shoppingwebapp.beans;

import java.util.List;

import javax.persistence.*;

import net.bytebuddy.build.ToStringPlugin.Exclude;

@Entity
@Table(name= "retailer")
public class Retailer {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int retailerId;
	@Column
	private String name;
	@Column
	private String email;
	@Column
	private String password;
	
	@Exclude
	@OneToMany(mappedBy = "retailer")
	private List<Product> product;

	public int getRetailerId() {
		return retailerId;
	}

	public void setRetailerId(int retailerId) {
		this.retailerId = retailerId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Product> getProduct() {
		return product;
	}

	public void setProduct(List<Product> product) {
		this.product = product;
	}

	
}
