package com.ustglobal.sorting.list;

public class Laptop implements Comparable<Laptop>{
	
	int price;
	String name;
	String ram;
	
	public Laptop(int price, String name, String ram) {
		super();
		this.price = price;
		this.name = name;
		this.ram = ram;
	}
	
	@Override
	public int compareTo(Laptop l) {
	
   if(this.price > l.price) {
			
		return 0;
		
	}else if (this.price < l.price) {
		
		return -1;
		
	}else {
		
		return 0;
	}

	}
}
