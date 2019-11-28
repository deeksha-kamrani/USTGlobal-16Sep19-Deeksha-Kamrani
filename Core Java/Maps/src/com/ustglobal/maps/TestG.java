package com.ustglobal.maps;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;

public class TestG {

	public static void main(String[] args) {
		
		Employee e1 = new Employee(1, "dk", 67000);
		Employee e2 = new Employee(9, "deek", 70000);
		Employee e3 = new Employee(4, "dkayy", 86000);
		Employee e4 = new Employee(3, "deekayy", 56000);
		Employee e5 = new Employee(5, "dkamrani", 45000);
		Employee e6 = new Employee(12, "deeksha", 12000);
		Employee e7 = new Employee(10, "pari", 34000);
		Employee e8 = new Employee(17, "peehu", 23000);
		Employee e9 = new Employee(1, "pummy", 27000);
		
		ArrayList<Employee> al1 = new ArrayList<Employee>();
		al1.add(e1);
		al1.add(e2);
		al1.add(e3);
		
		ArrayList<Employee> al2 = new ArrayList<Employee>();
		al2.add(e4);
		al2.add(e5);
		al2.add(e6);
		
		ArrayList<Employee> al3 = new ArrayList<Employee>();
		al3.add(e7);
		al3.add(e8);
		al3.add(e9);
		
		HashMap<Integer, ArrayList<Employee>> hm = new HashMap<Integer, ArrayList<Employee>>();

		hm.put(1,al1);
		hm.put(2,al2);
		hm.put(3,al3);
		
		ArrayList<Employee> second = hm.get(2); 
		
		Iterator<Employee> e = second.iterator();
		
             while(e.hasNext()) {
			
			Employee s = e.next();
			
			System.out.println("Id is "+s.id);
			System.out.println("Name is "+s.name);
			System.out.println("Percentage is "+s.Salary);
			System.out.println("===================");
		
             }
		
		
	}

}
