// dateオブジェクトの宣言
const date = new Date();

// 今日の年月日を取得
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

// 出力
console.log(year + '年' + month + '月' + day + '日');