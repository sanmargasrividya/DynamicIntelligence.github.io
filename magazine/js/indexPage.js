function activateindexPage() {    
    // locate your element and add the Click Event Listener
    $("#listIndex").on("click", indexClickHandler);
    //document.getElementById("listIndex").addEventListener("click", indexClickHandler);
}
function indexClickHandler(e) {   
    // e.target is our targetted element.
    //console.log(e.target.nodeName)
    if (e.target && e.target.nodeName == "LI") {
        //alert(e.target.id);
        var itemNum = Number(e.target.id.replace("li", ""));
        var pageNum = 1;
        if (itemNum == 1) {
            pageNum = 4;
        }
        else if (itemNum == 2) {
            pageNum = 6;
        }
        else if (itemNum == 3) {
            pageNum = 8;
        }
        else if (itemNum == 4) {
            pageNum = 12;
        }
        else if (itemNum == 5) {
            pageNum = 18;
        }
        else if (itemNum == 6) {
            pageNum = 24;
        }
        else if (itemNum == 7) {
            pageNum = 26;
        }
        else if (itemNum == 8) {
            pageNum = 28;
        }
        else if (itemNum == 9) {
            pageNum = 30;
        }
        $('.magazine').turn('page',pageNum);
    }
}

function disableIndexPage() {
    //document.getElementById("listIndex").removeEventListener("click", indexClickHandler);
    $("#listIndex").off("click");
}