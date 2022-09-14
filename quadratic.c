#include<stdio.h>
#include<cs50.h>
#include<math.h>

int main(void)
{
    float a = get_float("a: ");
    float b = get_float("b: ");
    float c = get_float("c: ");
    
    float d = ((-1 * b) + sqrt((b * b) - (4 * a * c)) / (2 * a));
    float e = ((-1 * b) - sqrt((b * b) - (4 * a * c)) / (2 * a));
    printf("X = %f or %f\n", d, e);
}