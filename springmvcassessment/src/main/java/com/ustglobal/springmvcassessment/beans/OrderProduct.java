package com.ustglobal.springmvcassessment.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="orderproduct")
public class OrderProduct {

	@Id
	@Column
	@GeneratedValue
	private int oid;
	
	private String pname;
	@Column
	private int quantity;
	@Column
	private int price;
	@Column
	private int total;
	@Column
	private String email;
}
