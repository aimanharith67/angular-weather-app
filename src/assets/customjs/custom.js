

var bridge = document.getElementById("bridge"),
    bridgeCanvas = bridge.getContext('2d'),
    brushRadius = (bridge.width / 100) * 5,
    img = new Image();

if (brushRadius < 50) { brushRadius = 50 }

img.onload = function () {
    bridgeCanvas.drawImage(img, 0, 0, bridge.width, bridge.height);
}
img.loc = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/';
img.filename = 'calgary-bridge-2013.jpg';
if (window.devicePixelRatio >= 2) {
    var nameParts = img.filename.split('.');
    img.src = img.loc + nameParts[0] + "-2x" + "." + nameParts[1];
} else {
    img.src = img.loc + img.filename;
}

function detectLeftButton(event) {
    if ('buttons' in event) {
        return event.buttons === 1;
    } else if ('which' in event) {
        return event.which === 1;
    } else {
        return event.button === 1;
    }
}

function getBrushPos(xRef, yRef) {
    var bridgeRect = bridge.getBoundingClientRect();
    return {
        x: Math.floor((xRef - bridgeRect.left) / (bridgeRect.right - bridgeRect.left) * bridge.width),
        y: Math.floor((yRef - bridgeRect.top) / (bridgeRect.bottom - bridgeRect.top) * bridge.height)
    };
}

function drawDot(mouseX, mouseY) {
    bridgeCanvas.beginPath();
    bridgeCanvas.arc(mouseX, mouseY, brushRadius, 0, 2 * Math.PI, true);
    bridgeCanvas.fillStyle = '#000';
    bridgeCanvas.globalCompositeOperation = "destination-out";
    bridgeCanvas.fill();
}

bridge.addEventListener("mousemove", function (e) {
    var brushPos = getBrushPos(e.clientX, e.clientY);
    var leftBut = detectLeftButton(e);
    if (leftBut == 1) {
        drawDot(brushPos.x, brushPos.y);
    }
}, false);

bridge.addEventListener("touchmove", function (e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
        var brushPos = getBrushPos(touch.pageX, touch.pageY);
        drawDot(brushPos.x, brushPos.y);
    }
}, false);


// var myExtObject = (function () {

//     return {
//         func1: function () {
//             alert('function 1 called');
//         },
//         func2: function () {
//             alert('function 2 called');
//         }
//     }

// })(myExtObject || {})


// var webGlObject = (function () {
//     return {
//         init: function () {
//             alert('webGlObject initialized');
//         }
//     }
// })(webGlObject || {})

//Input
function searchToggle(obj, evt) {
    var container = $(obj).closest('.search-wrapper');
    if (!container.hasClass('active')) {
        container.addClass('active');
        evt.preventDefault();
    }
    else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
    }
}