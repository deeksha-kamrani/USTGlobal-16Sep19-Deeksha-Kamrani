package com.ustglobal.objectclass;

public class TestE {
public static void main(String[] args) {
	Car c1 = new Car(2098766, "Audi", "black");
	Car c2 = new Car(2098766, "BMW", "white");
	Car c3 = new Car(2098766, "Jaguar", "red");
	
	int c1HashCode = c1.hashCode();
	System.out.println("HashCode1 " +c1);
	System.out.println(c1);
	
	int c2HashCode = c2.hashCode();
	System.out.println("HashCode1 " +c2);
	System.out.println(c2);
	
	int c3HashCode = c3.hashCode();
	System.out.println("HashCode1 " +c3);
	System.out.println(c3);
	
}
}
