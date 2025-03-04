// トリガーとなるHTML要素(ボタン)を取得
const btn = document.getElementById('btn');

// 書き換えるHTML要素を取得
const text = document.getElementById('text');

btn.addEventListener('click', () => {

    // 2秒(2000ミリ秒)後に実行する処理
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);

});