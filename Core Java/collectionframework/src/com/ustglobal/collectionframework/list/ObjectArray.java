package com.ustglobal.collectionframework.list;

public class ObjectArray 
{
	public static void main(String[] args) {


		Object o[] = {10,10.7,"dk",true,123456787,68564534.97676};

		System.out.println("===== using for loop =====");

		for(int i = 0 ; i < o.length ; i++)
		{
			System.out.println(o[i]);
		}

		System.out.println("==== using foreach loop====");

		for(Object o1 : o) {

			System.out.println(o1);
		}
		
		StudentObject[] st = new StudentObject[5];
		
		StudentObject s1 = new StudentObject(1, "Deeksha");
		StudentObject s2 = new StudentObject(2, "Dk");
		StudentObject s3 = new StudentObject(3, "Deekayy");
		StudentObject s4 = new StudentObject(4, "Dkamrani");
		StudentObject s5 = new StudentObject(5, "Pari");
		
		st[0] = s1;
		st[1] = s2;
		st[2] = s3;
		st[3] = s4;
		st[4] = s5;
		
		System.out.println("=== using for loop =====");
		
		for( int i = 0 ; i < st.length ; i++)
		{
			System.out.println(st[i]);
		}
		
		System.out.println("=== using for each ====");
		
		for(StudentObject s : st) {
			
			System.out.println(s);
		}
		
	}
}
