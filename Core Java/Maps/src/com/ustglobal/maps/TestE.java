package com.ustglobal.maps;

import java.util.Map;
import java.util.TreeMap;

public class TestE {

	public static void main(String[] args) {

		TreeMap<String , Integer> lh = new  TreeMap<String, Integer>();
		
		lh.put("Patna", 675652);
		lh.put("Hariyana", 9786755);
		lh.put("Bng", 712512362);
	//	lh.put(null, 7872323);  NullPointerException
		
		for(Map.Entry<String , Integer> m : lh.entrySet()) {
			
			String key = m.getKey();
			Integer value = m.getValue();
			System.out.println("Key is " +key);
			System.out.println("Value is "+value);
			System.out.println("====================");
		}	
	}
}
