#include<stdio.h>
#include<conio.h>
main (){
    int a, b, hasil;/* tipe data yang digunakan merupakan tipe data integer = bilangan bulat dengan variabel yang digunakan yaitu a, b, dan hasil */
    printf("PROGRAM PENJUMLAHAN BAHASA C\n");
    printf("NAMA : ASEP RIYANDI\n");
    printf("NIM  : 195090801111009\n");
    printf("============================\n");
    printf("MASUKAN NILAI A = ");
    scanf("%d",&a); /* % merupakan operator aritmatika binary */
    printf("MASUKAN NILAI B = ");
    scanf("%d",&b); /* %d untuk menampilkan bilangan integer bertanda (signed) dalam bentuk desimal */
    hasil=a+b; /* tanda "+" merupakan operator aritmatika binary untuk penjumlahan */
    printf("HASIL PENJUMLAHAN = %d",hasil);
    getch();

}
