package com.ustglobal.springmvcassessment.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "user")
public class User {


	@Column
	@GeneratedValue
	private int id;
	@Column
	private String name;
	@Id
	@Column
	private String email;
	@Column
	private String password;
}
