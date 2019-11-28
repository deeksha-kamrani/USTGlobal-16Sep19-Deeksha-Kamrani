package com.ustglobal.maps;

import java.util.Hashtable;

public class TestH {

	public static void main(String[] args) {

		Hashtable<Integer , String> ht = new Hashtable<Integer, String>();
		ht.put(101, "ajay");
		ht.put(102, "vijay");
		ht.put(99, "sonu");
		ht.put(110, "monu");
		ht.put(178, "sriram");
		ht.put(500, "ax");

		//	ht.put(null, "john");    NullPointerException
		//	ht.put(108, null);       NullPointerException

		System.out.println("Data " +ht);


	}

}
