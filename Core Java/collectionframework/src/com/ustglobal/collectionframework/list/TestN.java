package com.ustglobal.collectionframework.list;

import java.util.ArrayList;
import java.util.Collections;

public class TestN {

	public static void main(String[] args) {

		ArrayList<String> al = new ArrayList<String>();
		al.add("girija");
		al.add("jalaja");
		al.add("vanaja");
		al.add("kiran");
		
		System.out.println("Before Sort----> " +al);
		Collections.sort(al);
		System.out.println("After Sort----> "+al);
		
	}

}
