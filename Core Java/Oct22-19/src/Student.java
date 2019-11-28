
public class Student {
    String name;
    int id;
    String cname;
    int mobile;
    int age;
    
    public Student(String sname, int sid, String scname, int smobile, int sage)
    {
    	name = sname;
    	id = sid;
    	cname = scname;
    	mobile = smobile;
    	age = sage;
    }
    
    void printDetails() {
    	System.out.println("Student name is " +name);
    	System.out.println("Student id is " +id);
    	System.out.println("Student cname is " +cname);
    	System.out.println("Student mobile is " +mobile);
    	System.out.println("Student age is " +age);
    }
    
    public static void main(String[] args) {
		Student s1 = new Student("Deeksha",01,"SVV",89898,23);
		s1.printDetails();
		System.out.println("************");
		Student s2 = new Student("Kamrani",02,"Medicaps",71371,26);
		s2.printDetails();
		System.out.println("************");
		Student s3 = new Student("Dk",03,"GSITS",78655,28);
		s3.printDetails();
		System.out.println("************");
		Student s4 = new Student("Pari",04,"LNCT",335779,29);
		s4.printDetails();
		System.out.println("************");
		Student s5 = new Student("Yash",05,"Oriental",645326,21);
		s1.printDetails();
		System.out.println("************");
	}
}
