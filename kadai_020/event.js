// 変更するHTML要素を取得
const text = document.getElementById('text');

// トリガー(ボタン)になるHTML要素を取得
const btn = document.getElementById('btn');

// btnがクリックされたときにイベント処理を実行
btn.addEventListener('click', () => {
    // textの内容を変更
    text.textContent = 'ボタンをクリックしました'
});