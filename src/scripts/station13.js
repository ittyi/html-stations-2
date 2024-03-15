function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  let element = document.getElementById('check');
  if (element.checked) {
    const button = document.querySelector("#text");
    button.setAttribute("style", "background-color: red");
  } else {
    const button = document.querySelector("#text");
    button.setAttribute("style", "background-color: transparent");
  }
}
