package com.ustglobal.sorting.set;

import java.util.HashSet;
import java.util.Iterator;

public class TestB {
	
	public static void main(String[] args) {
		
		HashSet<String> hs = new HashSet<String>();
		hs.add("vijay");
		hs.add("ajay");
		hs.add("sujay");
		hs.add("drijay");
		hs.add("enjoy");
		
		System.out.println("****** Using for each *******");
		
		for(String s : hs) {
			
			System.out.println(s);
		}
		
		System.out.println("****** Using Iterator *******");
		
		Iterator<String> it = hs.iterator();
		
		while(it.hasNext()) {
			
			String p = it.next();
			System.out.println(p);
		}
	}

}
