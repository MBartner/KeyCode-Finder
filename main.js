
function init() {
    "use strict";
    document.getElementById("main-text").innerHTML = "Hi";
    document.getElementById("main-text").style.color = "#FFFFFF";
    document.body.style.background = "#000000";
    document.getElementById("message").innerHTML = "Start by pressing a key!";
    document.getElementById("message").style.color = "#FFFFFF";
    document.getElementById("message").style.fontSize = "5vw";
}

var waitForLoad = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(waitForLoad);
        init();
    }
}, 10);

function revHex(hex) {
    "use strict";
    var str = "" + hex, rev = "", i = 0;
    while (i < 6) {
        rev += (255 - (parseInt(str.substring(i, i + 2), 16))).toString(16);
        i += 2;
    }
    return rev;
}

function randomColor() {
    "use strict";
	var hex = "", i = 3, num = "";
	while (i > 0) {
		num = (Math.floor((Math.random() * 256))).toString(16);
		if (num.length === 1) {
			num = "0" + num;
		}
		hex += num;
		i = i - 1;
	}
	return hex;
}

function main(e) {
    "use strict";
	var hex = randomColor();
    document.body.style.background = "#" + hex;

    document.getElementById("main-text").innerHTML = e.keyCode;
    document.getElementById("message").innerHTML = keysAry[e.keyCode];
    var revved = "#" + revHex(hex);
    document.getElementById("main-text").style.color = revved;
    document.getElementById("message").style.color = revved;
}

window.onkeydown = function (e) {
    "use strict";
    main(e);
};


