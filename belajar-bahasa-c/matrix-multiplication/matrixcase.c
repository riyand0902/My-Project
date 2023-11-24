#include <stdio.h>
int main(){
    int  i, j, k, m1[2][2], m2[2][2], hasil[2][2];

    printf("Masukan elemen matriks 1 2x2 :  \n");
        for(i=0; i<2; i++){
            for(j=0; j<2; j++){
                scanf("%d", &m1[i][j]);
            }
        }
    printf("Masukkan elemen matriks 2 2x2 : \n"); 
       for(i=0; i<2; i++){
            for(j=0; j<2; j++){
                scanf("%d", &m2[i][j]);
            } 
        }
    for(i=0; i<2; i++){
        for(j=0; j<2; j++){
            hasil[i][j]=0;
            for(k=0; k<2; k++){
                 hasil[i][j]=hasil[i][j]+m1[i][k]*m2[k][j];
            }
        } 
    }
        printf("Hasil perkalian 2 matriks 2x2 : \n");
            for(i=0; i<2; i++){
                for(j=0; j<2; j++){
                    printf("%d ",hasil[i][j]);
                }
                printf("\n");
            }
    return 0;
}
