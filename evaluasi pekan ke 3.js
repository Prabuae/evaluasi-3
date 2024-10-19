//1.jawaban

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " - I Love Coding");
    } else if (i % 3 === 0) {
        console.log(i + " - Berkualitas");
    } else if (i % 5 === 0) {
        console.log(i + " - Santai");
    } else {
        console.log(i + " - Berkualitas");
    }
}

//2.jawaban

// daftar nilai
const nilaiSantri = [50, 90, 65, 67, 89, 80, 50, 97, 84];

// menghitung hasil semua nilai
const totalNilai = nilaiSantri.reduce((acc, curr) => acc + curr, 0);

// menghitung jumlah elemen
const jumlahElemen = nilaiSantri.length;

// menghitung rata2
const rataRata = totalNilai / jumlahElemen;

// menampilkan hasil
console.log("Nilai rata-rata dari daftar nilai adalah:", rataRata);

//nilai rata2 dari daftar nilai: 74.66666666666667

//3.jawaban

const checkanaragam = (a,b) => {
    return a.split ("").sort().join()=== b.split ("").sort().join();
}

console.log(checkanaragam("listen", "silent"));
console.log(checkanaragam("evil", "vile"));
console.log(checkanaragam("triangle", "integral"));



//4.jawaban

for (let y = 1; y < 10;y++) {
    for (let x = 1; x < 10; x++) {
        if (  x >= y && x + y <= 10 || x <= y && x + y >= 10 ) {
            document.write('+')
        }else {
        document.write("=")
    }
}
    document.write('<br/>')
} 

//5.jawban

for (let y = 1; y < 10; y++) {
    for (let x = 1; x < 10; x++) {
        if ( x <= y && x + y <= 10 || x >= y && x + y >= 10) {
             document.write('*') 
        }else {
            document.write('=')}
        }
    document.write('<br>')
    }