
function addInput(command) {
    var aaa = document.getElementById('user[login]');
    var inp = document.createElement('input');
    inp.value = `${command}`;
    inp.className = 'inputGenerado';
    var aaa = document.getElementById('user[login]');
    aaa.parentNode.appendChild(inp);

    document.getElementById("user[login]").value = "Brayan-Restrepo";
}

function deleteInput() {
    if(document.querySelectorAll(".inputGenerado").length != 0){
        document.querySelectorAll(".inputGenerado:last-child")[0].remove();
    }
}