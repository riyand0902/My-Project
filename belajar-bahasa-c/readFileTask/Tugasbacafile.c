#include <stdio.h>

int main()
{
    char buff[255];
    FILE *fptr; //gunakan pointer untuk membuka file terlebih dahulu

    // membuka file jika file tidak ditemukan maka akan NULL
    if ((fptr = fopen("baca.txt","r")) == NULL){
        printf("Error: NULL!");
        // Program akan tertutup jika file gak ada.
        exit(1);
    }

    // baca isi file dengan gets lalu simpan ke buff
    while(fgets(buff, sizeof(buff), fptr)){
        printf("%s", buff);
    }

    // tutup file
    fclose(fptr);

    return 0;
}