package com.ustglobal.beanobject.bean;

import java.util.Scanner;

public class TestB 
{
	public static void main(String[] args) 
	{
		System.out.println("Scanner Class");

		Scanner sc = new Scanner(System.in);
		System.out.println("Enter age");

		int age = sc.nextInt();
		System.out.println("Age is "+age);

		String name = sc.nextLine();
		System.out.println("Name is " +name);

		System.out.println("Are you male");
		boolean b1 = sc.nextBoolean();
		System.out.println(b1);
	}
}
