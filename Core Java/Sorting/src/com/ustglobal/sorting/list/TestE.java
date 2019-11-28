package com.ustglobal.sorting.list;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;

public class TestE {

	public static void main(String[] args) {

		ArrayList<Pen> a = new ArrayList<>();

		Pen p1 = new Pen(100, "Reynolds");
		Pen p2 = new Pen(200, "Flair");
		Pen p3 = new Pen(300, "Classmate");
		Pen p4 = new Pen(400, "Cello");

		a.add(p1);
		a.add(p2);
		a.add(p3);
		a.add(p4);
		
		System.out.println("Before Sorting------");
		display(a);
		Collections.sort(a);
		System.out.println("After Sorting------");
		display(a);
	}

	static void display(ArrayList<Pen> a) {

		Iterator<Pen> it = a.iterator();

		while(it.hasNext()) {

			Pen p = it.next();

			System.out.println("Pen price is " +p.price);
			System.out.println("Pen brand is " +p.brand);
		}
	}

}
