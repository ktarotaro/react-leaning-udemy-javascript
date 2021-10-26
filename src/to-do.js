import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //li生成
  const li = document.createElement("li");

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const paragraph = document.createElement("p");
  paragraph.innerText = inputText;

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

    //div生成
    const div = document.createElement("div");
    div.className = "list-row";

    //pタグ生成
    const paragraph = document.createElement("p");
    paragraph.innerText = addText;

    //戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //liタグの子要素に各要素を設定
    li.appendChild(div);

    //divタグの子要素に各要素を設定
    div.appendChild(paragraph);
    div.appendChild(backButton);
    console.log(li);
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

  //未完了リストから指定の要素を削除
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomlete-list").removeChild(target);
  };

  //未完了のリストに追加
  document.getElementById("incomlete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
