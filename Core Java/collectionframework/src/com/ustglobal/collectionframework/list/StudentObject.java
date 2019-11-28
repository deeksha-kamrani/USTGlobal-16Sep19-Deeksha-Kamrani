package com.ustglobal.collectionframework.list;

public class StudentObject {

	int id;
	String name;
	
	public StudentObject(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	@Override
	public String toString() {
		return "StudentObject [id=" + id + ", name=" + name + "]";
	}
	
	
	
}
