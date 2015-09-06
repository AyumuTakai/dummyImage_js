# dummyImage_js
Web用ダミー画像生成JavaScript

使用方法
---
jQueryを読み込んだ後に、dummyimage.jsを読み込むだけです。

ドキュメント内のsrc属性のないimgタグ全てに対してwidth,height,altを取得して画像を生成します。

width,heightが無い場合はそれぞれ100pxをデフォルトにしています(やっつけ仕事)。

srcにダミー画像のURLを記述するサーバ型の仕組みに対して、src記述の必要が無い点がメリットになります。

本番画像設定後はdummyimage.jsは致命的な悪さはしませんが、効率的には削除をお勧めします。
