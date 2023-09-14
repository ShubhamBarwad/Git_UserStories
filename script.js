const basicCommands = {
    status: "git status",
    add: "git add -a",
    commit: "git commit"
}
const list1 = document.getElementById('list1');

for(let keys in basicCommands){
    const li = document.createElement('li');
    li.innerText = basicCommands[keys];
    list1.appendChild(li);
}
