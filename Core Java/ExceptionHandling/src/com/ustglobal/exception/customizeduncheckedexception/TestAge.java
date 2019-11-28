package com.ustglobal.exception.customizeduncheckedexception;

public class TestAge {

	public static void main(String[] args) {

		System.out.println("Main Started");

		Validator v = new Validator();
		try {
			v.verify(12);
		} catch(InvalidAgeException ie) {
			System.out.println("exception occured");
		}

		v.verify(13);

		System.out.println("Main ended");
	}
}
