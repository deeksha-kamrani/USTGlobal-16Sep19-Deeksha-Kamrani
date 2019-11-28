package com.ustglobal.maps;

import java.util.HashMap;

public class TestB {

	public static void main(String[] args) {

		HashMap hm = new HashMap();
		hm.put("kuku", 7867566);
		hm.put("mala", 98268);
		hm.put("sheela", 24155);

		HashMap hm1 = new HashMap();
		hm.put("deepa", 8943256);
		hm.put("riyaa", 89898);
		hm.put("kriti", 71371);
		
		boolean hasKey = hm.containsKey("mala");
		System.out.println("Has Key " +hasKey);
		
		System.out.println("====================");
		
		boolean hasValue = hm.containsValue(24155);
		System.out.println("Has Value " +hasValue);
		
		hm.putAll(hm1);
		
		System.out.println("=====================");
		
		System.out.println("After put all "+hm);
		
		System.out.println(hm.size());
		
		boolean isEmpty = hm.isEmpty();
		System.out.println("Map is Empty "+isEmpty);
		
		hm.clear();
		System.out.println("After clear "+hm);
	
	}

}
