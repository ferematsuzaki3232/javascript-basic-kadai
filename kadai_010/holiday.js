const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// for文の場合
// for (let i(カウンタ変数) = 数字; 条件式(終わりの数字); i++/--)
for (let i = 0; i <= 15; i++) {
  console.log(holidays[i]);
}

// while文の場合
let num = 0
while (num < 16) {
  console.log(holidays[num]);
  num = num + 1
}
// 上と同じ※++numとnum++（ループになる）を間違えない
// let num = 0
// while (num < 16) {
//   console.log(holidays[num]);
//   num = ++num
// }