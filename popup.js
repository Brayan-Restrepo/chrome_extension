// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('ingresarNombre');

const html = `
var aaa = document.getElementById('user[login]');
var inp = document.createElement('input');
inp.value = 'ejemplo';
inp.id = 'dd';
var aaa = document.getElementById('user[login]');
aaa.parentNode.appendChild(inp);
`;

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: `document.getElementById("user[login]").value = "Brayan-Restrepo";`+html});
  });
};
