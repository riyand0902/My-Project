const score = 50;

if (score => 90) {
    console.log("selamat anda mendapat nilai A")
}
else if (score >=80 ) {
    console.log("Anda mendapat nilai B")
}

/**
 * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika score bernilai 90 atau lebih
 *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika score bernilai 80 hingga 89
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika score bernilai 70 hingga 79
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika score bernilai 60 hingga 69:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika score bernilai di bawah 60:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'
 *
 *
 *  Note: - Mohon untuk tidak menghapus kode yang sudah ada sebelumnya.
 *        - Anda tidak perlu membuat variabel result dan score secara manual.
 *          Gunakan variabel yang sudah disediakan.
 *
 */

/**let score = 50;

if (score >=90) {
  console.log('selamat anda mendapat nilai a')
}
else if (score >=80) {
  console.log('Anda mendapat nilai b')
}
else if (score >=70) {
  console.log('Anda mendapat nilai c')
}
else if (score >=60) {
    console.log('Anda mendapat nilai c')
}
else {
    console.log('Anda mendapat nilai E')
}
*/

/*const restaurant = {
  name: "Angel",
  city: "New York",
  "favorite drink": "Juice",
  "favorite food": "Noodle",
  isVegan: true,
};

let name = (restaurant.name);
let favoriteDrink = (restaurant["favorite drink"]);
*/

/*let evenNumber =[];
for(let i=2; i<=100; i+=2){
  evenNumber.push(i)
}

console.log(evenNumber)
*/

/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */

/*const currency = new Map([
  ['USD', 14000],
  ['JPY', 131],
  ['SGD', 11000],
  ['MYR', 3500]
]);

let priceInIDR = (currency.get('JPY')*priceInJPY);
console.log(priceInIDR);
*/
/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */

 /*function minimal (a,b) {
  if (a < b){
    return a;
  }
  else if (a > b) {
    return b;
  }
  else if (a = b){
    return a;
  }
} 

function power (a,b){
  return (a ** b);
}
console.log(power(2,3));
*/

/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string "${this.name} sedang makan!"
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string "${this.name} sedang terbang!"
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

 /*class Animal {
  constructor(name, age, isMammal) {
    this.name = name;

    this.age = age;

    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name, age, isMammal) {
    super(name, age, true);
  }

  eat() {
    return `${this.name} sedang makan!`;
  }
}

class Eagle extends Animal {
  constructor(name, age, isMammal) {
    super(name, age, false);
  }

  fly() {
    return `${this.name} sedang terbang!`;
  }
}

const myRabbit = new Rabbit("Labi", 2);

myRabbit.eat();

console.log(myRabbit.eat());

const myEagle = new Eagle("Elo", 4);

myEagle.fly();

console.log(myEagle.fly());

*/
/**
 * TODO:
 * Buatlah variabel greatAuthors yang merupakan array
 * berdasarkan hasil filter() dan map() dari books:
 *   - Gunakan fungsi filter untuk mengembalikan nilai item books
 *     yang hanya memiliki nilai sales lebih dari 1000000.
 *   - Gunakan fungsi map pada books yang sudah ter-filter,
 *     untuk mengembalikan nilai string dengan format:
 *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
 *
 * Catatan: Jangan ubah nilai atau struktur dari books
 */
/*
 const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];
const greatAuthors = books
      .filter(books => books.sales > 1000000)
      .map((item) => {
          return `${item.author} adalah penulis buku ${item.title} yang sangat hebat!` 
      }
);
console.log(greatAuthors);
*/
