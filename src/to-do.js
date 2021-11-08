import "./styles.css";

//追加ボタンを押した際の挙動の関数
const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createInconpleteList(inputText);
};

//未完了リストに追加する関数
const createInconpleteList = (text) => {
  //li生成
  const li = document.createElement("li");

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const paragraph = document.createElement("p");
  paragraph.innerText = text;

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    //押された完了ボタンの親タグ（li）を未完了リストから削除してTODOリストへ移動
    //未完了リストから削除する要素・兼完了リストへ追加する要素
    //完了リストへ追加する要素
    const addTarget = completeButton.parentNode;

    //TOTO内容テキストを取得
    const addText = addTarget.firstChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //li生成
    const li = document.createElement("li");

    //pタグ生成
    const paragraph = document.createElement("p");
    paragraph.innerText = addText;

    //戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ（li）を完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;

      //pタグと完了ボタンと削除ボタンを生成
      createInconpleteList(text);
    });

    //liタグの子要素に各要素を設定
    li.appendChild(addTarget);

    //divタグの子要素に各要素を設定
    addTarget.appendChild(paragraph);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(div);

  //divタグの子要素に各要素を設定
  div.appendChild(paragraph);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//未完了リストから指定の要素（li）を削除する関数を定義
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
