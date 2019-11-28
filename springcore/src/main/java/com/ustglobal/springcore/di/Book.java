package com.ustglobal.springcore.di;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

public class Book {
	
	String author;
	String name;
	double price;
	
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	@PostConstruct
	public void init() {
		System.out.println("Init method from book");
	}
	
	@PreDestroy
	public void destroy() {
		System.out.println("Destroy method from book");
	}
}
