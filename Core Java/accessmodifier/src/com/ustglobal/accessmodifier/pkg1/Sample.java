package com.ustglobal.accessmodifier.pkg1;

import com.ustglobal.accessmodifier.pkg2.Demo;

public class Sample extends Demo
{
	public static void main(String[] args) {
		Demo d = new Demo();
		/*
		 * System.out.println(d.a); d.add();
		 * Not Possible
		 */

		/*Default
		
		System.out.println(d.b);
		d.sub();*/
		
		Sample s = new Sample();

		//Protected
		System.out.println(d.c);
		d.mul();

		//Public
		System.out.println(d.name);
		d.div();
	}
}

