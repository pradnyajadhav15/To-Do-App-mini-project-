let todo = [];

function print(text) {
    document.getElementById("output").innerHTML += text + "<br>";
}

function handleRequest(req) {
    let input = document.getElementById("inputBox").value;

    if (req === "quit") {
        print("Quitting app...");
        return;
    }

    if (req === "list") {
        print("------------");
        for (let i = 0; i < todo.length; i++) {
            print(i + " : " + todo[i]);
        }
        print("------------");
    } 
    else if (req === "add") {
        todo.push(input);
        print("Task added: " + input);
    } 
    else if (req === "delete") {
        todo.splice(input, 1);
        print("Task deleted at index: " + input);
    } 
    else {
        print("Wrong request!");
    }

    document.getElementById("inputBox").value = "";
}
