package com.ustglobal.maps;

import java.util.HashMap;

public class TestA {

	public static void main(String[] args) {
		
		HashMap hm = new HashMap();
		hm.put("kuku", 7867566);
		hm.put("mala", 98268);
		hm.put("sheela", 24155);
		hm.put(null, 782641);
		hm.put(null , 123456);
		
		System.out.println("Data "+hm);
		
		hm.put("mala", 89898);
		System.out.println("After modify" +hm);
		
		hm.put("dimple", 89898);
		System.out.println("After dimple" +hm);
		
		System.out.println("After null " +hm);
		
		System.out.println("=======================");
		
		System.out.println("After adding duplicate null");
		
		System.out.println(hm);
		
		Object phoneno = hm.get("sheela");
		System.out.println("Value "+phoneno);
		
		System.out.println("=================");
		
		Object phoneno1 = hm.get("she");
		System.out.println("Value " +phoneno1);
		
		System.out.println("=======================");
		
		Object value = hm.remove("kuku");
		System.out.println("Value "+value);
		
		System.out.println(" After remove -------> " +hm);
	}
}
