#include<stdio.h>

int main()
{
    
    int x=1, z=1, totX=0, totZ=0;
    float y=0.5, totY=0;

    printf("a= ");
    while (x<=512)
    {
        printf("%i",x);
        totX += x;
        x += x;
        if(x <= 512)
        {
            printf(" + ");
        }
    }
    printf("=%i\n", totX);
    float polaY = 0.7;
    printf("b = ");
    while (y <= 11468.6) 
    {
    printf("%.1f", y);
    if (y<11468)
    {
        printf("+");
    }
    totY += y;
    y += polaY;
    polaY *= 2;
    }
    printf("=%.1f\n", totY);
    int polaZ;
    printf("c=");
    while (polaZ != 512)
    {
    polaZ = z;
    polaZ *= polaZ * polaZ;
    printf("%i", polaZ);

    if (polaZ<512)
    {
        printf("+");
    }
    totZ += polaZ;
    z += 1;
    
    return 0;
    }
}
