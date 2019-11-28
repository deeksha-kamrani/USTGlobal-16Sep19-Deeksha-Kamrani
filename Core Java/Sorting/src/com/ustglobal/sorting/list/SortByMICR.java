package com.ustglobal.sorting.list;

import java.util.Comparator;

public class SortByMICR implements Comparator<Bank> {

	@Override
	public int compare(Bank o1, Bank o2) {
		if(o1.micr > o2.micr) {
			
			return 1;
			
		}else if(o1.micr < o2.micr) {
			
			return -1;
			
		}else {
			return 0;
		}

	}
	

}
