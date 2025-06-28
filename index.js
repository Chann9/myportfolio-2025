console.log("haloo")

var umur = parseInt(prompt('berapa umur kamu?'))
console.log ('umur saya adalah ' + umur)

if (Number.isNaN(umur)) {
    alert('umur harus berupa angka!')
}

// tipe data
// var untuk variabel yang bisa diubah
// let untuk variabel yang bisa diubah, tapi lebih baik digunakan dlm blok
// const untuk variabel yang tidak bisa diubah

let tinggi = parseInt(prompt ('berapa tinggi badan kamu?'))
console.log('tinggi badan kamu adalah ' + tinggi)

const nama = prompt('siapa nama kamu?')
console.log ('nama kamu adalah ' + nama)

tinggi =parseInt(prompt ('tinggi badan kamu sekarang?'))
console.log('tinggi badan kamu sekarang adalah ' + tinggi)

console.log('tipe data nama: ', typeof nama)
console.log('tipe data umur: ', typeof umur);
console.log('tipe data tinggi: ', typeof tinggi);