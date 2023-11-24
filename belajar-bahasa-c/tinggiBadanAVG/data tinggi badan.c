/*PROGRAM PENGUKURAN TINGGI BADAN MAHASISWA DENGAN PENGUKURAN YANG DILAKUKAN SEBANYAK 3X DAN
HASIL YANG DITAMPILKAN BERUPA NILAI RATA-RATA DARI JUMLAH PENGUKURANNYA*/

#include<stdio.h>;

int main ()
{
    float tinggi1, tinggi2, tinggi3, avg; /*MENGGUNAKAN TIPE DATA FLOAT KARENA AKAN MENAMPILKAN NILAI PERHITUNGAN DESIMAL DENGAN VARIABEL SEBANYAK 4 BUAH */


    printf("PROGRAM PENGUKURAN TINGGI BADAN MAHASISWA\n");
    printf("Asep Riyandi\n");

    /* berikur merupakan input dengan nilai tiga buah input */
    printf("tinggi badan pengukuran ke 1 (cm) :");
    scanf("%f", &tinggi1);
    printf("tinggi badan pengukuran ke  2 (cm) :");
    scanf("%f", &tinggi2);
    printf("tinggi badan pengukuran ke 3 (cm) :");
    scanf("%f", &tinggi3);

    /* Input diatas akan di jumlah kemudian di rata-rata */
    avg = (tinggi1 + tinggi2 + tinggi3) / 3;
    printf("rata rata: %0.2f cm\n", avg);

    /*Jika hasil perhitungan rata rata lebih dari sama dengan 201 cm maka perogram akan menampilkan error*/
    if (avg >= 201 )
    {
        printf("ERROR");
    }
    else if (avg >= 100 ) /* jika hasil perhitungan nilai tinggi badan lebih dari 100 cm dan di bawah 201 cm maka perogram akan menampilkan DITERIMA*/
    {
        printf("DITERIMA");
    }
    else if (avg >= 0  ) /* jika hasil perhitungan nilai tinggi badan lebih dari 0 dan dibawah 100 cm maka perogram akan menampilkan DITOLAK*/
    {
        printf("Di TOLAK");
    }
    else
    {
        printf("ERROR"); /* jika hasil perhitungan nilai tinggi badan tidak ada masukan atau bernilai minus maka perogram akan menampilkan ERROR*/
    }
    return 0; /* program berjalan dengan normal atau hasil keluaran akan nol */
}
