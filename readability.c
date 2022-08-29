#include<cs50.h>
#include<stdio.h>
#include<string.h>
#include<math.h>

int main(void)
{
    float letters = 0;
    float words = 1;
    float sentence = 0;
    {
        string a = get_string("Text: ");  //Takes text input
    
        for (int i = 0, n = strlen(a); i < n; i++)  //Iterates over all characters
        {
            if (a[i] >= 65 && a[i] <= 90)   //checks for uppercase letters
            {
                letters = letters + 1;  //increases value of letters by 1
            }
            if (a[i] >= 97 && a[i] <= 122) //checks for lower case letters
            {
                letters = letters + 1;  //increases value of letters by 1
            }
            if (a[i] == 32) //checks for space
            {
                words = words + 1;  //increases value of words by 1
            }
            if (a[i] == 33 || a[i] == 46 || a[i] == 63) //checks for periods
            {
                sentence = sentence + 1;    //increases value of sentence by 1
            }
        }
        float L = (letters / words) * 100;  //calculate average letters per 100 words
        float S = (sentence / words) * 100; //calculate average sentences per 100 words
        int d = round(0.0588 * L - 0.296 * S - 15.8);   //calculates grade using formula
        if (d < 1)  //checks if grade is less than 1
        {
            printf("Before Grade 1\n"); //prints out grade for less than one
        }
        else if (d > 16)    //checks if grade is more than 16
        {
            printf("Grade 16+\n");  //print out grade for more than 16
        }
        else
        {
            printf("Grade %i\n", d);    //prints out grade greater than or equal to 1 and less than or equal to 16
        }
    }
}