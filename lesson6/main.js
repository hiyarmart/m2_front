
const input = document.querySelector("#input");
const button = document.querySelector("#submit_button");
const list = document.querySelector("#list");


const listItem = [];

const reverse = () => {
    const text = input.value;
    const reversedText = text.split("").reverse().join("");

    input.value = ""
    listItem.push(reversedText);
    list.innerHTML = "";
    listItem.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML= item;
        list.append(li);
    })
}

button.onclick = () => reverse()