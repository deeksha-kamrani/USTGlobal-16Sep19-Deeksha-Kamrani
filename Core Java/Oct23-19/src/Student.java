
public class Student 
{
	String name;
	int rollno;
	final String cname = "QSpiders";
	final int cid=19;

	Student(){
		
	}
	Student(String name, int rollno, int cid)
	{
		this.name = name;
		this.rollno = rollno;
		
	}
	final void printDetails() {
		System.out.println("Hi " + name + " Welcome to " + cname);
	}
	final void printDetails(String name) {
		System.out.println("Hi " + name + " Welcome to " + cname);
	}
}
