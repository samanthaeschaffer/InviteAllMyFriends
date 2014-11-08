if(confirm("Are you sure you want to automatically invite friends to like this page?\r\n(Note: this cannot be undone)")) {
    var buttons = document.getElementsByClassName("uiButtonText");
    buttons[0].scrollIntoView();
    var indexOfFirstUnchecked = 0;
    var box = document.getElementsByClassName("fbProfileBrowser")[0];

    if (box.removeEventListener) {
        box.removeEventListener('DOMNodeInserted', OnNodeInserted, false);
    }

    if (box.addEventListener) {
        box.addEventListener('DOMNodeInserted', OnNodeInserted, false);
    }

    OnNodeInserted();
}

function OnNodeInserted() {
    for (i=indexOfFirstUnchecked; i<buttons.length; i++) {
        if (buttons[i].innerHTML == "Invite") {
            buttons[i].parentNode.click();
        }
    }

    indexOfFirstUnchecked = buttons.length;
    buttons[buttons.length-1].scrollIntoView();
}
