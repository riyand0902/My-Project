#include<stdio.h>

int main(){

    unsigned int tahun;

    printf("Inputkan tahun dalam angka : ");
    scanf("%lu", &tahun);

    if(tahun%400==0||tahun%4==0){
        printf("%lu adalah tahun kabisat", tahun);

    }
    else{
        printf("%lu bukan tahun kabisat", tahun);
    }
    return 0;
}
