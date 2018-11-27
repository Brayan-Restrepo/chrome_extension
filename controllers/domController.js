function llenar(command) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        query(chrome.tabs, tabs[0].id, `addInput('${command}')`);
    });
}

function deleteLast(command) {    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        query(chrome.tabs, tabs[0].id, `deleteInput()`);
    });
}

function query(tabs, idVentana, metodo) {
    console.log(tabs);
    tabs.executeScript(
        idVentana,
        {file: `/functions/domQuerys.js`},
        () => {
            tabs.executeScript(
                idVentana, 
                {code: metodo}
            );
        }
    );
}