package com.ustglobal.java8features;

import java.util.ArrayList;

public class TestG {
	
	public static void main(String[] args) {

		ArrayList<Student> al = new ArrayList<Student>();

		al.add(new Student(5, "vikram" , 56.7));
		al.add(new Student(3, "vijay" , 37.4));
		al.add(new Student(6, "yash" , 35.7));
		al.add(new Student(2, "akshay" , 65.8));
		al.add(new Student(1, "aishu" , 90.99));

       Helper h = new Helper();
    //   h.displayAllStudent(al);
       h.displayFailedStudents(al);

	}

}
