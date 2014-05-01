var checkableitems = document.getElementsByName("checkableitems[]");
checkableitems[0].scrollIntoView();
var indexOfFirstUnchecked = 0;

if (checkableitems[0].parentNode.parentNode.parentNode.removeEventListener) {
    checkableitems[0].parentNode.parentNode.parentNode.removeEventListener ('DOMNodeInserted', OnNodeInserted, false);
}

if (checkableitems[0].parentNode.parentNode.parentNode.addEventListener) {
    checkableitems[0].parentNode.parentNode.parentNode.addEventListener ('DOMNodeInserted', OnNodeInserted, false);
}

OnNodeInserted();

function OnNodeInserted () {
    for (i=indexOfFirstUnchecked; i<checkableitems.length; i++) {
        if (!checkableitems[i].checked) {
            checkableitems[i].click();
        }
    }

    indexOfFirstUnchecked = checkableitems.length;
    checkableitems[checkableitems.length-1].scrollIntoView();
}
