package com.ustglobal.sorting.list;

import java.util.Iterator;
import java.util.TreeSet;

public class TestJ {
	
	public static void main(String[] args) {
		
		SortByName sn = new SortByName();
		
		TreeSet<Customer> ts = new TreeSet<Customer>();
		
		Customer c1 = new Customer("Dk" , 01 , 25000);
		Customer c2 = new Customer("Deeksha" , 02 , 35000);
		Customer c3 = new Customer("Deekayy" , 03 , 45000);
		Customer c4 = new Customer("Dkamrani" , 04 , 65000);
		
		ts.add(c1);
		ts.add(c2);
		ts.add(c3);
		ts.add(c4);
		
		System.out.println("==== Using Iterator ======");
		Iterator<Customer> it = ts.iterator();
		while(it.hasNext())
		{
			Customer c = it.next();
			
			System.out.println("Name is "+c.name);
			System.out.println("ID is " +c.id);
			System.out.println("Salary is " +c.Salary);
		}
		
		
	}

}
