// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

  chrome.commands.onCommand.addListener(function(command) {
    switch (command) {
      case 'toggle-feature-br': 
        deleteLast();
        break;
      case 'toggle-feature':
        llenar('command');        
        break;
    }
  });

  chrome.runtime.onInstalled.addListener(function() {
    
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'github.com'},
        })],
        actions: [
          new chrome.declarativeContent.ShowPageAction()]
      }]);
    });    
  });

  
