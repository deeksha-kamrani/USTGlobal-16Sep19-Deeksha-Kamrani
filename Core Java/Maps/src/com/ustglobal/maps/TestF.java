package com.ustglobal.maps;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;

public class TestF {
	
	public static void main(String[] args) {
		
		Student s1 = new Student(2, "divya" , 67.89);
		Student s2 = new Student(5, "ambika" , 20.56);
		Student s3 = new Student(1, "pari" , 90.87);
		Student s4 = new Student(4, "paritoshi" , 45.98);
		Student s5 = new Student(98, "deeksha" , 23.78);
		Student s6 = new Student(23, "deekayy" , 43.98);
		Student s7 = new Student(49, "dkamrani" , 56.98);
		Student s8 = new Student(14, "dk" , 69.34);
		Student s9 = new Student(48, "kamrani" , 34.76);
		
		ArrayList<Student> al = new ArrayList<Student>();
		al.add(s1);
		al.add(s2);
		al.add(s3);
		
		ArrayList<Student> al1 = new ArrayList<Student>();
		al1.add(s4);
		al1.add(s5);
		al1.add(s6);
		
		ArrayList<Student> al2 = new ArrayList<Student>();
		al2.add(s7);
		al2.add(s8);
		al2.add(s9);
		
		HashMap<String, ArrayList<Student>> hm = new HashMap<>();
		hm.put("first", al);
		hm.put("second", al1);
		hm.put("third", al2);
		
		ArrayList<Student> first = hm.get("second");
		
		Iterator<Student> it = first.iterator();
		
		while(it.hasNext()) {
			
			Student s = it.next();
			
			System.out.println("Id is "+s.id);
			System.out.println("Name is "+s.name);
			System.out.println("Percentage is "+s.percentage);
			System.out.println("===================");
		}
		
		
	}

}
