function click(e) {
  if (e.target.id === "select_all") {
    chrome.tabs.executeScript(null, {file: "select_all.js"});
  } else if (e.target.id === "unselect_all") {
    chrome.tabs.executeScript(null, {file: "unselect_all.js"});
  } else if (e.target.id === "toggle_select") {
    chrome.tabs.executeScript(null, {file: "toggle_select.js"});
  }
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("select_all").addEventListener('click', click);
  document.getElementById("unselect_all").addEventListener('click', click);
  document.getElementById("toggle_select").addEventListener('click', click);
});
