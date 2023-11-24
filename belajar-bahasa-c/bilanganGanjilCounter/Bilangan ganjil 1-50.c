#include <stdio.h>

int main(){
	int n,i,jumlah;
	jumlah=0;



	printf("Masukkan nilai A : ");
	scanf("%d", &i);

	printf("Masukkan nilai B : ");
	scanf("%d", &n);



  for (i=11; i<=n*2; i+=2){
        jumlah += i;
        if(i< (n+2) -1 )
            printf("%d+", i);
        else
            printf("%d=%d", i, jumlah);

    }

	return 0;
}
