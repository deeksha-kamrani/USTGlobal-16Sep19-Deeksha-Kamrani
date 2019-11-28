
public class STest {

	public static void main(String[] args) {

		Student.cname = "QSpiders";
		Student s1 = new Student();
		s1.name = "priya";
		s1.usn = 101;
		System.out.println("College name is "+Student.cname);
		System.out.println("Name is "+s1.name);
		System.out.println("ID is "+s1.usn);
	}

}
