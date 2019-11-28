package com.ustglobal.lambdaexpressions;

public interface AddInterface
{
	int add(int a, int b);
	
	public static void sum(int x) {
		System.out.println("Sum is "+x);
	}
	public default void hello() {
		System.out.println("Hello");
	}
	
}
