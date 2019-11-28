package com.ustglobal.objectclass;

public class TestD 
{
	public static void main(String[] args) 
	{
       Student s = new Student(11,"Dk",87.8);
       int sHashCode = s.hashCode();
       System.out.println(sHashCode);
       System.out.println(s);
	}
}
