
public class TestC {

	void TestC() {
		System.out.println("TestC constructor");
	}

	public static void main(String[] args) {
		
		System.out.println("main started");
		
		TestC t = new TestC();
	     t.TestC();
		System.out.println("main ended");
	}

}
