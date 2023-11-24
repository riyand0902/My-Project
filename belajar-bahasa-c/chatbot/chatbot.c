#include <stdio.h> 
#include <cstring> 
#include <locale> 
 
using namespace std; 
 
int main(int argc, char** argv) 
{ 
   string input; 
cout << "Hello, This is Chat Bot made by Ryand" << endl ; 
  cout << "say hi" << endl ; 
   while (input ! = "exit" ) 
{ 
   cin >> input ; 
    locale loc; 
   for (string::size_type i=0; i<input.length(); ++i) 
    input[i] = tolower(input[i],loc); 
   if (input == "hi") 
     cout << "hello there " << endl ; 
else if (input == "hi") 
    cout << "Hey, what's up?"<<endl; 
else if (input == "how are you?") 
   cout << "I am good, how are you" << endl ; 
else if (input == "i am fine") 
   cout << "thats good, command me something" << endl ; 
else if (input == "shutdown") 
     system("shutdown -s"); 
else 
   cout << "Well i didn't understand. I hope i will be able to, soon!" << endl ; 
} 
 
return 0; 
} 