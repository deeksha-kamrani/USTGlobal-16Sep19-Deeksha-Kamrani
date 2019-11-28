package com.ustglobal.sorting.set;

import java.util.Iterator;
import java.util.TreeSet;

public class TestE {

	public static void main(String[] args) {
		
		TreeSet ts = new TreeSet();
		ts.add(34);
		ts.add(45);
		ts.add(12);
		ts.add(9);
		ts.add(39);
		
		// null not allowed and generics not allowed
//		ts.add("dk");      ClassCastException
//		ts.add(null);      NullPointerException
		
		System.out.println("***** Using for each******");
		
		for(Object o : ts) {
			System.out.println(o);
		}
		
		System.out.println(" ***** Using iterator ******");
		
		Iterator it = ts.iterator();
		
		while(it.hasNext()) {
			
			Object p = it.next();
			System.out.println(p);
		}

	}

}
