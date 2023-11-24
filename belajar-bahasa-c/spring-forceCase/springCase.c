#include<stdio.h>
#include<stdlib.h>
#include<math.h>

int main(){
 float m, b, k; 
 float w, y;

 printf("Masukkan nilai massa (m) = ");
 scanf("%f", &m);
 printf("Masukkan nilai konstanta redaman (b) = ");
 scanf("%f", &b);
 printf("Masukkan nilai konstanta pegas (k) = ");
 scanf("%f", &k);
    
w = (k/m); 
y = b/m; 
    
    if (y <=w)
        printf("Teredam ringan"); 
    
    else if (y == w) 
        printf("Teredam kritis"); 
    
    else 
        printf("Teredam berat"); 
    
return(0); 
}