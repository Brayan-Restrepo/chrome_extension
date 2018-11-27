
function llenar(command) {
    const html = `
        var aaa = document.getElementById('user[login]');
        var inp = document.createElement('input');
        inp.value = '${command}';
        inp.id = 'dd';
        var aaa = document.getElementById('user[login]');
        aaa.parentNode.appendChild(inp);
        `;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: `document.getElementById("user[login]").value = "Brayan-Restrepo";`+html});
    });
  }