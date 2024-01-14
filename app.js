//入力する値 引数     出力される値 戻り値
//function 関数名（引数）{
 // 処理
  //return 戻り値;
//}

//メイン部分
let alertString;

//作成した関数を呼び出し、変数へ格納
alertString = addString("WebCamp");

//変数の中身をアラートで表示する
alert(alertString);

//作成した
function addString(strA){ //addString 関数名  strA 引数
  let addStr = "Hello" + strA;
  return addStr;
}