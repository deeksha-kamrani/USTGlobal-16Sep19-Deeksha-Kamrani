package com.ustglobal.lambdaexpressions;

public class TestGreet {
	
	public static void main(String[] args) {
		
		GreetInterfacae g = (message) -> {
		System.out.println("Hello");
		System.out.println(message);
		return message;
		};
	}
	

}

