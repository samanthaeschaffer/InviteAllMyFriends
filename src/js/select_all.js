var checkableitems = document.getElementsByName("checkableitems[]");
checkableitems[0].scrollIntoView();
var indexOfFirstUnchecked = 0;
var box = document.getElementsByClassName("listSection")[0];

if (box.removeEventListener) {
    box.removeEventListener('DOMNodeInserted', OnNodeInserted, false);
}

if (box.addEventListener) {
    box.addEventListener('DOMNodeInserted', OnNodeInserted, false);
}

OnNodeInserted();

function OnNodeInserted() {
    for (i=indexOfFirstUnchecked; i<checkableitems.length; i++) {
        if (!checkableitems[i].checked) {
            checkableitems[i].click();
        }
    }

    indexOfFirstUnchecked = checkableitems.length;
    checkableitems[checkableitems.length-1].scrollIntoView();
}
