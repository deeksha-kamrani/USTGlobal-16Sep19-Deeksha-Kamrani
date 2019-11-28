package com.ustglobalstudentapp.qspidrers;

import com.ustglobalstudentapp.jspidrers.*;

public class TestA 
{	
	public static void main(String[] args)
	{
		QTP q = new QTP();
		q.teachQtp();
		
		Selenium se = new Selenium();
		se.teachSelenium();
		
//		com.ustglobalstudentapp.jspidrers.Angular a = 
//				new com.ustglobalstudentapp.jspidrers.Angular();
//		
//
//		com.ustglobalstudentapp.jspidrers.Angular b = 
//				new com.ustglobalstudentapp.jspidrers.Angular();
		
		Angular a = new Angular();
		a.teachAngular();
		
		React r = new React();
		r.teachReact();
		
		
		
	}

}
