class Circle{
public static void main(String[] args){
int r = 2;
double a = area(r);
System.out.println(a);

double c=circum(r);
System.out.println(c);
}
static double area(int r){
double area=2*3.14*r;
return area;
}
static double circum(int radius){
double circum= 2*3.14*radius;
return circum;

}

static boolean oddEven(int number){
if(number%2 == 0)
{
return true;
}else{
return false;
}
}
}