package com.ustglobal.maps;

import java.util.LinkedHashMap;
import java.util.Map;

public class TestD {

	public static void main(String[] args) {

		LinkedHashMap<String , Integer> lh = new  LinkedHashMap<String, Integer>();
		lh.put("Bangalore", 675652);
		lh.put("Hariyana", 9786755);
		lh.put("Patna", 712512362);

		for(Map.Entry <String, Integer> m : lh.entrySet()) {
			String key = m.getKey();
			Integer value = m.getValue();
			System.out.println("Key is "+key+" ----- " + "Value "+value);
		}



	}

}
