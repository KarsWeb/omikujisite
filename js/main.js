'use strict';
{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const text = document.getElementById('text');

  btn.addEventListener('click', () => {
    const results = ['大吉！', '吉', '中吉', '凶', '大凶'];
    const texts = ['いいことあるぜ～！', 'いい感じ！', 'ふつ～', '気を付けて', '今日はやめとこ！'];
    const n = Math.floor(Math.random() * results.length);

    result.textContent = results[n];
    text.textContent = texts[n];
  });
}