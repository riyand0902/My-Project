#include<stdio.h>

int main ()
{
    int a[100], x, i;
    float sig=0, mean;

    printf("masukkan banyak data yang ingin diinput : ");
    scanf("%d", &x);

    for(i=0; i<x; i++)
    {
        printf("Masukkan nilai : ");
        scanf("%d", &a[i]);
    }

    for(i=0; i<x; i++)
    {
        sig=sig+a[i];
    }

    mean=sig/x;
    printf("\nRata-rata : %.2f\n", mean);

    return 0;
}
