package com.ustglobal.streams.list;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

public class TestF {

	public static void main(String[] args) {

		ArrayList<Integer> al = new ArrayList<Integer>();
		al.add(70);
		al.add(20);
		al.add(90);
		al.add(25);
		al.add(45);
		al.add(35);
		
		List<Integer> l = al.stream().sorted().collect(Collectors.toList());
		Iterator <Integer> it = l.iterator();
		
		while(it.hasNext()) {
			
			Integer i = it.next();
			System.out.println("Sorted------->");
			System.out.println(i);
		}		
	}
}
