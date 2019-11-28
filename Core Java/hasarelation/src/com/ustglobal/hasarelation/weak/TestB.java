package com.ustglobal.hasarelation.weak;

public class TestB 
{
	public static void main(String[] args) 
	{
		Music m = new Music();
		System.out.println(m.sound);
		m.play();
		m.pause();

		System.out.println("========");

		m.c.drive();
	}
}
