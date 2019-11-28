package com.ustglobal.arrays;

public class TestA {
	public static void main(String[] args) {

		int[] nums = new int[5];
		nums[0] = 10;
		nums[1] = 20;
		nums[2] = 30;
		nums[3] = 40;
		nums[4] = 50;

		for(int i = 0 ; i < nums.length ; i++)
		{
			System.out.println(nums[i]);
		}
		System.out.println("==================");
		
		for(int num : nums) {
			System.out.println(num);
		}
		
		System.out.println("===============");
		
		char[] ch = {'a','b','c','d'};
		for(int i = 0 ; i < ch.length ; i++)
		{
			System.out.println(ch[i]);
		}
		System.out.println("==================");
		
		for(int c : ch)
		{
			System.out.println(c);
		}
		System.out.println("=================");
		
		boolean[] b = {true,false,true,false,true,true};
		for(boolean x : b) {
			System.out.println(x);
		}
		System.out.println("=================");
		
		double[] d = {10.6 , 20.6 , 70.4 , 50.4 , 50.7};
		for(double y : d) {
			System.out.println(y);
		}
		System.out.println("=================");
		
		byte[] b1 = {1,2,3,4};
		for(byte bb : b1) {
			System.out.println(bb);
		}
		System.out.println("=================");
		
		String[] s = {"s","hg","rf"};
		for(String s1 : s) {
			System.out.println(s1);
		}
		System.out.println("=================");
		
		
	}
}
