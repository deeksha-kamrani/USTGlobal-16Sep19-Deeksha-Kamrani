
public abstract class TestA {

	public static void main(String[] args) {
		Pen p = new Pen();
		p.cost = 100;
		p.brand = "Reynolds";
		p.color = "black";

		System.out.println("Cost is " +p.cost);
		System.out.println("Color is " +p.color);
		System.out.println("Brand is " +p.brand);

		p.write();

		System.out.println("************************");

		Van v = new Van();
		v.cost = 20000;
		v.color = "White";
		System.out.println("Van cost is "+v.cost);
		System.out.println("Van color is "+v.color);
		v.move();
		
		System.out.println("*********************");
		
		Van v1 = new Van();
		v1.cost = 600000;
		v1.color = "red";
		System.out.println("Van v1 cost is "+v1.cost);
		System.out.println("Van v1 color is "+v1.color);
		v1.move();
	}

}
