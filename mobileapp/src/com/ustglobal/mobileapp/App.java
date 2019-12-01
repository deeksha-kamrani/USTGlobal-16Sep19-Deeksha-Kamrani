package com.ustglobal.mobileapp;

import java.util.*;

import com.ustglobal.mobileapp.dao.MobileDAO;
import com.ustglobal.mobileapp.dto.MobileBean;
import com.ustglobal.mobileapp.util.MobileManager;

public class App {

	public static void main(String[] args) {
		mainMenu();
	}

	static Scanner sc = new Scanner(System.in);
	
	public static void mainMenu() {
		System.out.println("Press 1 to Show all contacts");
		System.out.println("Press 2 to Search for contact");
		System.out.println("Press 3 to Operate on contact");

		int num = sc.nextInt();
		switch(num) {
		case 1:
			MobileDAO dao =MobileManager.getMobileDAO();
			List<MobileBean> list = dao.getAllContacts();
			for (MobileBean bean : list) {
				System.out.println("Name is "+bean.getName());
				System.out.println("Number is "+bean.getNumber());
				System.out.println("Groups is "+bean.getGroups());
				System.out.println("----------------------");
			}
			mainMenu();
			break;
		case 2:
			press2();
			break;
		case 3:
			press3();
		}
	}

	public static void press2() {
		System.out.println("Search for contact");
		System.out.println("Enter Name ");
		String name = sc.next();

		MobileDAO dao1 = MobileManager.getMobileDAO();
		MobileBean bean1 = dao1.searchContacts(name);

		System.out.println("Name is "+bean1.getName());
		System.out.println("Number is "+bean1.getNumber());
		System.out.println("Groups is "+bean1.getGroups());
		System.out.println("******************************");

		System.out.println("Press 1 to call ");
		System.out.println("Press 2 to message ");
		System.out.println("Press 3 to go back to the main menu ");
		int num1 = sc.nextInt();
		switch(num1) {
		case 1:
			System.out.println(bean1.getName()+" calling the contact...");
			System.out.println("End Call");
			press2();
			break;
		case 2:
			System.out.println("Enter msg");
			String msg = sc.next();
			System.out.println("Sending the message...");
			press2();
			break;
		case 3:
			mainMenu();
			break;
		}
	}
	public static void press3() {

		System.out.println("Press 1 to add contact");
		System.out.println("Press 2 to delete contact");
		System.out.println("Press 3 to edit contact");
		int num3 = sc.nextInt();
		switch(num3) {
		case 1:
			System.out.println("Enter name ");
			String name1 = sc.next();
			System.out.println("Enter number ");
			int number = sc.nextInt();
			System.out.println("Enter groups ");
			String groups = sc.next();
			MobileBean bean2 = new MobileBean();
			bean2.setName(name1);
			bean2.setNumber(number);
			bean2.setGroups(groups);
			MobileDAO dao2 = MobileManager.getMobileDAO();
			int count1 = dao2.insertContactData(bean2);
			if(count1>0) {
				System.out.println("Contact inserted Successfully");
			}
			else
			{
				System.out.println( "Contact inserted Unsuccessfully");
			}
			press3();
			break;
		case 2:
			System.out.println("Enter name ");
			String name2 = sc.next();
			MobileDAO dao3 = MobileManager.getMobileDAO();
			int count2 = dao3.DeleteContactData(name2);
			if(count2>0) {
				System.out.println("Deleted Successfully");
			}
			else {
				System.out.println("Deleted Unsuccessfully");
			}

			press3();
			break;
		case 3:
			System.out.println("Enter name ");
			String name3 = sc.next();
			System.out.println("Enter number ");
			int number3 = sc.nextInt();
			System.out.println("Enter groups ");
			String groups3 = sc.next();
			MobileBean bean3 = new MobileBean();
			MobileDAO dao4 = MobileManager.getMobileDAO();
			bean3.setName(name3);
			bean3.setNumber(number3);
			bean3.setGroups(groups3);
			int count3 = dao4.updateContactData(bean3);
			if(count3>0) {
				System.out.println("Contact updated Successfully");
			}
			else
			{
				System.out.println("Contact updated Unsuccessfully");
			}
			mainMenu();
			break;
		}
	}
}
