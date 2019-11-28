package com.ustglobal.collectionframework.list;

import java.util.ArrayList;
import java.util.ListIterator;

public class TestK {

	public static void main(String[] args) {

		ArrayList <Employee> al = new ArrayList <Employee> ();

		Employee e1 = new Employee(01,"Pari","developer");
		Employee e2 = new Employee(02, "Dk", "devops");
		Employee e3 = new Employee(03, "Deeksha", "tester");
		Employee e4 = new Employee(04, "kamrani", "manager");

		al.add(e1);
		al.add(e2);
		al.add(e3);
		al.add(e4);

		System.out.println("===== Using for loop ======");

		for(int i = 0 ; i < al.size() ; i++)
		{
			Employee e = al.get(i);

			System.out.println("Employee id is "+e.id);
			System.out.println("Employee name is "+e.name);
			System.out.println("Employee dept is "+e.dept);
		}

		System.out.println("====== foreach loop ======");

		for(Employee e : al) {

			System.out.println(e);
		}

		System.out.println("====== Using list iterator =====");

		ListIterator <Employee> l = al.listIterator();

		while(l.hasNext()) {

			Employee e = l.next();
			System.out.println(e);
		}


	}

}
