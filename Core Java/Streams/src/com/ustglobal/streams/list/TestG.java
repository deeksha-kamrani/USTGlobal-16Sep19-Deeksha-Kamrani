package com.ustglobal.streams.list;

import java.util.*;
import java.util.stream.Collectors;

public class TestG {

	public static void main(String[] args) {

		ArrayList<Employee> al = new ArrayList<Employee>();
		Employee e1 = new Employee(1, "Dk");
		Employee e2 = new Employee(4, "Deeksha");
		Employee e3 = new Employee(2, "Dkamrani");

		Comparator <Employee> cmp = (e5, e6) -> {
			return e5.name.compareTo(e6.name);
		};

		List<Employee> l
		= al.stream().sorted(cmp).collect(Collectors.toList());

		Iterator<Employee> it = l.iterator();
		while(it.hasNext()) {
			Employee e = it.next();
			System.out.println("Id is "+e.id);
			System.out.println("Name is "+e.name);
			System.out.println("====================");
		}		
	}
}
