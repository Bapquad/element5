/** Javascript Document */
var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);		// Post data to main thread.
    setTimeout("timedCount()",500);
}

timedCount();