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
  // div.innerText = inputText;
  // alert(inputText);

  //pタグ生成
  const paragraph = document.createElement("p");
  paragraph.innerText = inputText;

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（li）を未完了リストから削除してTODOリストへ移動
    const completeTarget = completeButton.parentNode.parentNode;
    console.log(completeTarget);
    document.getElementById("incomlete-list").removeChild(completeTarget);
    document.getElementById("comlete-list").appendChild(completeTarget);
  });

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    // console.log(deleteTarget);
    document.getElementById("incomlete-list").removeChild(deleteTarget);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(div);

  //divタグの子要素に各要素を設定
  div.appendChild(paragraph);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomlete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
