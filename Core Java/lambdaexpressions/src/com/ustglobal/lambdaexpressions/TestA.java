package com.ustglobal.lambdaexpressions;

public class TestA implements AddInterface {

	public static void main(String[] args) {
		
		TestA t1 = new TestA();
		int sum = t1.add(12, 20);
		System.out.println("Sum is "+sum);

	}

	@Override
	public int add(int a, int b) {
		return a * b;
	}

}
