package com.ustglobal.collectionframework.list;

import java.util.ArrayList;
import java.util.Iterator;

public class TestC {
	
	public static void main(String[] args) {

		ArrayList al = new ArrayList();
		al.add(23);
		al.add(98.7);
		al.add(true);
		al.add("Good Evening");
		
		Iterator it = al.iterator();
		
		Object o1 = it.next();
		System.out.println("obj1 "+o1);
		
		Object o2 = it.next();
		System.out.println("obj2 "+o2);
		
		Object o3 = it.next();
		System.out.println("obj3 "+o3);
		
		Object o4 = it.next();
		System.out.println("obj 4 "+o4);
		
		boolean b =it.hasNext();
		System.out.println("Has Next "+b);
		
//		Object o5 = it.next();
//		System.out.println("obj 5 "+o5);
//		NoSuchElementException
//		

		System.out.println("===Using for loop=====");
		
		for( int i = 0 ; i < al.size() ; i++)
		{
			Object o = al.get(i);
			System.out.println(o);
		}
		
		ArrayList al1 = new ArrayList();
		al1.add(12);
		al1.add(233.44);
		al1.add("momo");
		al1.add(false);
		
		System.out.println("=====Using iterator====");
		
		Iterator it1 = al1.iterator();
		
		while(it1.hasNext()) {
			
			Object o = it1.next();
			System.out.println(o);	
		}	
		
		
	}

}
