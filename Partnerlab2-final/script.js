function submit() {
   
    let name = document.getElementById('nameInput').value;
            let greetingElement = document.getElementById('greeting');
            if (name) {
                greetingElement.textContent = `Hello, ${name}!`;
            }
            let message = document.getElementById('messageInput').value;
            let messageElement = document.getElementById('message');
            if (message) {
                messageElement.textContent = message;
            }
    let selectedColor = document.getElementById('colorOptions').value;
    document.body.style.backgroundColor = selectedColor;

}

function ADD() {
    let input = document.getElementById("todoInput");
    let task = input.value.trim();
    if (task !== "") {
        let list = document.getElementById("todoList");
        let listItem = document.createElement("li");
        listItem.textContent = task;
        list.appendChild(listItem);
    }
}