const displayList = function() {
    const l = document.getElementById("fruits")

    const childList =  document.createElement("ul");

    const apple = document.createElement("li")
    apple.innerHTML =  "リンゴ"
    childList.appendChild(apple)

    const strawberry = document.createElement("li")
    strawberry.innerHTML =  "イチゴ"
    childList.appendChild(strawberry)

    const grapes = document.createElement("li")
    grapes.innerHTML =  "ブドウ"
    childList.appendChild(grapes)

    const replaceDiv = document.createElement("div")
    replaceDiv.id =  "fruits"
    replaceDiv.appendChild(childList)

    console.log("replaceDiv: ", replaceDiv)

    l.replaceWith(replaceDiv);
}
