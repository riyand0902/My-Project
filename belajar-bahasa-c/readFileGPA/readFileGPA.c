#include <stdio.h>

void main()
{
    char buff[255];
    char text[255];
    FILE *fptr;

    printf("PROGRAM PENAMBAHAN DAN PEMBACAAN DATA IPK MAHASISWA\n");
    // membuka file untuk ditulis atau ditambahkan jika belum ada
    fptr = fopen("pointerfile.txt","a");

    for(int i = 0; i < 3; i++){

        // mengambil input dari user
        printf("Silahkan masukkan data tambahan -%d: ", i);
        fgets(text, sizeof(text), stdin);

        // menulis ke text ke file
        fputs(text, fptr);
    }
    printf("File berhasil ditambahkan\n");

    // tutup file setelah ditulis
    fclose(fptr); 

    // buka kembali file untuk dibaca
    fptr = fopen("pointerfile.txt","r");

    // baca isi file dengna gets lalu simpan ke buff
    while(fgets(buff, sizeof(buff), fptr)){
        printf("\n Berikut isi file terbaru: %s", buff);
    }

    // tutup file
    fclose(fptr);
}