package com.ustglobal.thread.defining;

public class TestThread {

	public static void main(String[] args) {

		System.out.println("MAin Strated");
		
		MyThread t1 = new MyThread();
		
		/*
		 * Dont call run() method , it behaves like normal program All code will be
		 * executed inside main thread only
		 * 
		 * t1.run();
		 */
		
		t1.start();
		t1.start();
		
		for(int i = 0; i <=10; i++) {
			System.out.println("Main thread");
		}
		System.out.println("Main Ended");
	}

}
