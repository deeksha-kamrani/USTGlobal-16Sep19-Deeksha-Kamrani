package com.ustglobal.springmvcassessment.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name ="product1")
public class Product {
	
	@Column
	@GeneratedValue
	private int pid;
	@Column
	private int price;
	@Id
	@Column
	private String pname;
	
}
