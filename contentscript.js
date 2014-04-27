var checkableitems = document.getElementsByName("checkableitems[]");
var indexOfFirstUnchecked = 0;

if (checkableitems[0].parentNode.parentNode.parentNode.addEventListener) {
    checkableitems[0].parentNode.parentNode.parentNode.addEventListener ('DOMNodeInserted', OnNodeInserted, false);
}

OnNodeInserted();

checkableitems[checkableitems.length-1].scrollIntoView();

function OnNodeInserted () {
    for (i=indexOfFirstUnchecked; i<checkableitems.length; i++) {
        if (!checkableitems[i].checked) {
            checkableitems[i].click();
        }
    }

    indexOfFirstUnchecked = checkableitems.length;
    checkableitems[checkableitems.length-1].scrollIntoView();
}
