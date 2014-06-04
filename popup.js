function click(e) {
  if (e.target.id === "select_all") {
    chrome.tabs.executeScript(null, {file: "select_all.js"});
  } else if (e.target.id === "unselect_all") {
    chrome.tabs.executeScript(null, {file: "unselect_all.js"});
  } else if (e.target.id === "toggle_select") {
    chrome.tabs.executeScript(null, {file: "toggle_select.js"});
  } else if (e.target.id === "invite_all") {
    chrome.tabs.executeScript(null, {file: "invite_all.js"});
  }

  window.close();
}

chrome.tabs.getSelected(null, function(tab) {
    if (tab.url.indexOf("event") > -1) {
        // event invite
        // select all button
        var div = document.createElement('div');
        div.id = 'select_all';
        div.className += 'menu-item';
        document.body.appendChild(div);
        var textnode=document.createTextNode("Select All");
        div.appendChild(textnode);
        div.addEventListener('click', click);
        // unselect all button
        div = document.createElement('div');
        div.id = 'unselect_all';
        div.className += 'menu-item';
        document.body.appendChild(div);
        textnode=document.createTextNode("Unselect All");
        div.appendChild(textnode);
        div.addEventListener('click', click);
        // toggle selection button
        div = document.createElement('div');
        div.id = 'toggle_select';
        div.className += 'menu-item';
        document.body.appendChild(div);
        textnode=document.createTextNode("Toggle Selection");
        div.appendChild(textnode);
        div.addEventListener('click', click);
    } else {
        // page invite
        var div = document.createElement('div');
        div.id = 'invite_all';
        div.className = 'menu-item';
        document.body.appendChild(div);
        var textnode=document.createTextNode("Invite All");
        div.appendChild(textnode);
        div.addEventListener('click', click);
    }
});
