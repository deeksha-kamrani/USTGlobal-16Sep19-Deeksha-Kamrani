class testBMI
{
public static void main(String[] args)
{
int weight = 200;
double height = 2.5;
double bmi;
bmi=(weight/(height*height));

if (bmi>= 30 && bmi<= 39.9)
{
System.out.println("obese");
}
else if (bmi>= 25 && bmi<= 29.9)
{
System.out.println("overweight");
}
else if (bmi>= 18.5 && bmi<= 24.9)
{
System.out.println("healthy");
}
else if (bmi< 18.5)
{
System.out.println("underweight");
}
}
}