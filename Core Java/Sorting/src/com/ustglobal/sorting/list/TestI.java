package com.ustglobal.sorting.list;

import java.util.Iterator;
import java.util.TreeSet;

public class TestI {

	public static void main(String[] args) {

         SortByName sb = new SortByName();
         SortByPinCode sp = new SortByPinCode();
         SortByMICR sm = new SortByMICR();
		TreeSet<Bank> ts = new TreeSet<Bank>(sb);
		
		Bank b1 = new Bank("HDFC", 560088, 76671265);
		Bank b2 = new Bank("SBI", 560088, 76671265);
		Bank b3 = new Bank("Central", 560088, 76671265);
		Bank b4 = new Bank("Canara", 560088, 76671265);

		ts.add(b1);
		ts.add(b2);
		ts.add(b3);
		ts.add(b4);

		System.out.println("******* Using iterator *******");
		Iterator<Bank> it = ts.iterator();
		while(it.hasNext()) {

			Bank b = it.next();

			System.out.println("Name is " +b.name);
			System.out.println("PinCode is " +b.pincode);
			System.out.println("MICR is " +b.micr);
			System.out.println("=======================");
		}
	}

}
