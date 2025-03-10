//Your JavaScript goes in here
var enableButton = document.getElementById("enable");
var highlightArrow = document.getElementById("highlight-arrow");
var purzeButton = document.getElementById("purze");
var valvePositioning = document.querySelector("#flow-rate-slider");
var valvePositioningContainer = document.getElementById(
  "valve-positioning-container"
);
var svg = document.getElementById("Layer_1");
var valvePositioningText = document.getElementById("valve-positioning-text");
var manometerText = document.getElementById("manometer-text");

var count = 0;
var w2 = document.getElementById("Water_3");
var w3 = document.getElementById("Water_4");
var w8 = document.getElementById("Water_6");
var w9 = document.getElementById("Water_7");
var w10 = document.getElementById("Water_8");
var w11 = document.getElementById("Water_9");

var waterTankFront = document.getElementById("Tank_Water_Front");
var waterTankBase = document.getElementById("Water_Tank_Base");
var waterTankBack = document.getElementById("Tank_Water_Back");
var waterTankLeft = document.getElementById("Tank_Water_Left");

var timerSec = document.getElementById("timer-sec");
var timerMS = document.getElementById("timer-ms");
var arrowRect = document.getElementById("arrow-rect");
var arrowPol = document.getElementById("arrow-pol");

let shouldStop = false;
let stopWaterFlow3 = false;
let stopValvePositioning = false;
let stopWaterFlow5 = false;
let stopWaterFlow6 = false;
var svgContainer1 = document.getElementById("svg-container-1");
var svgElements1 = document.querySelectorAll(".arrow-1");
var currentHighlightedElement = enableButton;

function power() {
  if (count == 0) {
    enableButton.style.backgroundColor = "#4cae4c";
    document.getElementById("steps").innerHTML =
      "Please wait until the water reaches the Flow Rate Valve.";
    enableButton.textContent = "POWER OFF";
    count = 1;

    stopWaterFlow3 = false;
    stopValvePositioning = false;
    stopWaterFlow5 = false;
    stopWaterFlow6 = false;
    // toggle arrow
    waterFlow3();
    highlightArrow.style.display = "none";
  } else {
    enableButton.style.backgroundColor = "#ca2222";
    document.getElementById("steps").innerHTML = "Step1: Turn Power On";
    enableButton.textContent = "POWER ON";
    count = 0;
    stopWaterFlow3 = true;
    stopValvePositioning = true;
    stopWaterFlow5 = true;
    stopWaterFlow6 = true;
    resetAll();
  }
}

function displayArrows() {
  svgElements1.forEach(function (element) {
    element.style.animation = "arrowAnimation 1s infinite";
  });
}
function stopAnimation() {
  svgElements1.forEach(function (element) {
    element.setAttribute("opacity", "0");
    element.style.animation = "none";
  });
}

function resetAll() {
  valvePositioningText.textContent = "0";
  valvePositioning.value = 0;

  w2.setAttribute("height", "0");
  w2.setAttribute("opacity", "0");
  w3.setAttribute("opacity", "0");
  clearTimeout(timeoutId5);

  clearTimeout(timeoutId4);
  valvePositioning.disabled = true;

  w8.setAttribute("opacity", "0");
  w10.setAttribute("width", "0");
  w10.setAttribute("opacity", "0");
  w11.setAttribute("height", "0");
  purzeButton.disabled = true;
  resetTimer();
  stopAnimation();

  arrowRect.setAttribute("y", "585.8");
  arrowPol.setAttribute("points", "136.4,581.4 144.5,587.4 136.4,593.4 ");
  waterTankBack.setAttribute(
    "points",
    "238,516.2 580.8,516.2 580.8,516.2 238,516.2"
  );
  waterTankFront.setAttribute("opacity", "0");
  waterTankLeft.setAttribute(
    "points",
    "238,516.2 580.8,516.2 580.8,516.2 238,516.2"
  );
  waterTankBase.setAttribute("opacity", "0");

  shouldStop = true;

  w10.setAttribute("width", "0");
  w11.setAttribute("height", "0");
}

function waterFlow3() {
  w2.setAttribute("opacity", "1");

  const animateElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animate"
  );
  animateElement.setAttribute("attributeName", "height");
  animateElement.setAttribute("from", "0");
  animateElement.setAttribute("to", "340");
  animateElement.setAttribute("dur", "4s");
  animateElement.setAttribute("begin", "0s");
  animateElement.setAttribute("fill", "freeze");

  w2.appendChild(animateElement);

  if (count == 0) {
    w2.setAttribute("opacity", "0");
    animateElement.endElement();
    w2.remove(animateElement);
  } else {
    animateElement.beginElement();
    setTimeout(function () {
      if (!stopWaterFlow3) {
        waterFlow4();
      }
    }, 4000);
  }
}
let timeoutId5;

function waterFlow4() {
  w3.setAttribute("opacity", "1");

  const animateElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animate"
  );
  animateElement.setAttribute("attributeName", "width");
  animateElement.setAttribute("from", "0");
  animateElement.setAttribute("to", "77.5");
  animateElement.setAttribute("dur", "1.5s");
  animateElement.setAttribute("fill", "freeze");

  w3.appendChild(animateElement);

  const animateX = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animate"
  );
  animateX.setAttribute("attributeName", "x");
  animateX.setAttribute("from", "1013.5");
  animateX.setAttribute("to", "936");
  animateX.setAttribute("dur", "1.5s");
  animateX.setAttribute("fill", "freeze");

  w3.appendChild(animateX);

  if (count == 0) {
    w3.setAttribute("opacity", "0");
    animateElement.endElement();
    animateX.endElement();
    w3.remove(animateElement);
    w3.remove(animateElement);
  } else {
    animateElement.beginElement();
    animateX.beginElement();
    if (!stopValvePositioning) {
      timeoutId4 = setTimeout(function () {
        document.getElementById("steps").innerHTML =
          "Choose a value on the valve positioning slider to regulate the water flow.";
        valvePositioning.disabled = false;
        highlightArrowFn(valvePositioningContainer);
      }, 1500);
    } else {
      clearTimeout(timeoutId4);
    }
  }
}

function waterFlow5() {
  w8.setAttribute("opacity", "1");

  const animateElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animate"
  );
  animateElement.setAttribute("attributeName", "width");
  animateElement.setAttribute("from", "0");
  animateElement.setAttribute("to", "617");
  animateElement.setAttribute("dur", "4s");
  animateElement.setAttribute("fill", "freeze");

  w8.appendChild(animateElement);

  const animateX = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animate"
  );
  animateX.setAttribute("attributeName", "x");
  animateX.setAttribute("from", "918");
  animateX.setAttribute("to", "301");
  animateX.setAttribute("dur", "4s");
  animateX.setAttribute("fill", "freeze");

  w8.appendChild(animateX);

  if (count == 0) {
    animateElement.endElement();
    animateX.endElement();
    w8.remove(animateElement);
    w8.remove(animateX);
  } else {
    animateElement.beginElement();
    animateX.beginElement();
    setTimeout(function () {
      if (!stopWaterFlow5) {
        waterFlow6();
      }
    }, 4000);
  }
}

function waterFlow6() {
  var currentHeight = parseFloat(w9.getAttribute("height"));

  if (currentHeight < 297.1) {
    currentHeight += 3;
    w9.setAttribute("height", currentHeight);
    if (!stopWaterFlow5) {
      setTimeout(waterFlow6, 25);
    } else {
      w9.setAttribute("height", "0");
    }
  }
  setTimeout(function () {
    if (!stopWaterFlow6) {
      waterTankBase.setAttribute("opacity", "1");
      waterFlow13();
    } else {
      waterTankBase.setAttribute("opacity", "0");
      w9.setAttribute("height", "0");
    }
  }, 1500);
}

function waterFlow13() {
  w10.style.opacity = "1";
  var currentwidth = parseFloat(w10.getAttribute("width"));
  if (shouldStop) {
    return;
  } else {
    if (currentwidth < 87.2) {
      currentwidth += 3;
      w10.setAttribute("width", currentwidth);
      setTimeout(waterFlow13, 100);
    }
    setTimeout(function () {
      waterFlow14();
    }, 500);
  }
}

function waterFlow14() {
  var currentHeight = parseFloat(w11.getAttribute("height"));
  if (shouldStop) {
    return;
  } else {
    if (currentHeight < 62.7) {
      currentHeight += 3;
      w11.setAttribute("height", currentHeight);
      setTimeout(waterFlow14, 100);
    }
    setTimeout(function () {
      document.getElementById("steps").innerHTML =
        "Now, Close the gate valve using the close gate valve button.";
      purzeButton.disabled = false;
      highlightArrowFn(purzeButton);
    }, 1000);
  }
}

function fillTankFront() {
  waterTankFront.setAttribute("opacity", "1");

  const animateElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "animate"
  );
  animateElement.setAttribute("attributeName", "height");
  animateElement.setAttribute("from", "0");
  animateElement.setAttribute("to", "110");
  animateElement.setAttribute("dur", "3s");
  animateElement.setAttribute("begin", "0s");
  animateElement.setAttribute("fill", "freeze");

  waterTankFront.appendChild(animateElement);
  animateElement.beginElement();

  setTimeout(function () {
    document.getElementById("steps").innerHTML =
      "Take note of the current time on the timer, and select another valve of valve positioning for further readings.";
    valvePositioning.disabled = false;
    if (valvePositioning.value == 1) highlightArrowFn(valvePositioningContainer);
    if (valvePositioning.value == 2) {
      document.getElementById("steps").innerHTML =
        "Take note of the current time on the timer.";
    }
  }, 3500);
}

function waterTankBackFlow(y) {
  if (y > 398.1) {
    y -= 1;
    waterTankBack.setAttribute(
      "points",
      `245.1,${y} 587.9,${y} 587.9,508.1 245.1,508.1`
    );
    setTimeout(() => waterTankBackFlow(y), 21.5);
  }
}

function waterTankSideFlow(y1, y2) {
  if (y1 > 469) {
    y1 -= 1;
    y2 -= 1;
    waterTankLeft.setAttribute(
      "points",
      `245.2,506.9 187.2,577.5 187.2,${y1} 244.8,${y2}`
    );
    setTimeout(() => waterTankSideFlow(y1, y2), 21.5);
  }
}

let [milliseconds, seconds] = [0, 0];
let int = null;
let timerRunning = true;

function timer(targetsec, targetms) {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(function () {
    displayTimer(targetsec, targetms);
  }, 10);
}

function displayTimer(targetsec, targetms) {
  if (valvePositioning.value == 1) {
    if (timerRunning) {
      milliseconds += 25 * (5 / 17);
      if (milliseconds >= 100) {
        milliseconds -= 100;
        seconds++;
        if (seconds == 60) {
          seconds = 0;
        }
      }
    }
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
      milliseconds < 10
        ? "0" + milliseconds
        : milliseconds < 100
        ? "" + milliseconds
        : milliseconds;
    // ms=int(ms*10)
    timerSec.textContent = s;
    timerMS.textContent = parseInt(ms);
  }

  if (valvePositioning.value == 2) {
    if (timerRunning) {
      milliseconds += 4.5 * (5 / 17);
      if (milliseconds >= 100) {
        milliseconds -= 100;
        seconds++;
        if (seconds == 60) {
          seconds = 0;
        }
      }
    }
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
      milliseconds < 10
        ? "0" + milliseconds
        : milliseconds < 100
        ? "" + milliseconds
        : milliseconds;
    ms = parseInt(ms);
    timerSec.textContent = s;
    timerMS.textContent = ms;
  }

  if (seconds == targetsec) {
    timerRunning = false;
    clearInterval(int);
    timerMS.textContent = targetms;
  }
}

function resetTimer() {
  clearInterval(int);
  [milliseconds, seconds] = [0, 0];
  timerRunning = true;
  timerSec.textContent = "00";
  timerMS.textContent = "00";
}

valvePositioning.addEventListener("change", updateValvePositioning);

function updateValvePositioning() {
  // stopAnimation()
  shouldStop = false;
  displayArrows();
  reset();
  resetTimer();
  var selectedValue = valvePositioning.value;
  valvePositioningText.textContent = selectedValue;

  if (selectedValue == 0) {
    document.getElementById("steps").innerHTML =
      "Select the value of Valve Positioning greater than 0!";
    w5.setAttribute("opacity", "0");
  } else {
    waterFlow5();
    valvePositioning.disabled = true;
    highlightArrow.style.display = "none";
  }
}

function reset() {
  w8.setAttribute("opacity", "0");
  w9.setAttribute("height", "0");

  arrowRect.setAttribute("y", "577.7");
  arrowPol.setAttribute("points", "143.5,573.3 151.6,579.3 143.5,585.3");
  waterTankBack.setAttribute(
    "points",
    "245.1,508.1 587.9,508.1 587.9,508.1 245.1,508.1"
  );
  waterTankFront.setAttribute("opacity", "0");
  waterTankLeft.setAttribute(
    "points",
    "245.2,506.9 187.2,577.5 187.2,577.5 244.8,506.9"
  );
  waterTankBase.setAttribute("opacity", "0");
}

function purzeAction() {
  purzeButton.disabled = true;

  shouldStop = true;
  w10.setAttribute("width", "0");
  w11.setAttribute("height", "0");

  if (valvePositioning.value == 1) {
    timer(17, 72);
  }
  if (valvePositioning.value == 2) {
    timer(3, 54);
  }

  fillTankFront();
  waterTankBackFlow(508.1);
  waterTankSideFlow(577.5, 506.9);
  arrowMovement();
  arrowMovement2(573.3, 579.3, 585.3);
  highlightArrow.style.display = "none";
}

function arrowMovement() {
  var currentY = parseFloat(arrowRect.getAttribute("y"));
  if (currentY > 467.7) {
    currentY -= 1;
    arrowRect.setAttribute("y", currentY);
    setTimeout(arrowMovement, 21.5);
  }
}

function arrowMovement2(y1, y2, y3) {
  if (y1 > 463.3) {
    y1 -= 1;
    y2 -= 1;
    y3 -= 1;
    arrowPol.setAttribute("points", `143.5,${y1} 151.6,${y2} 143.5,${y3} `);
    setTimeout(() => arrowMovement2(y1, y2, y3), 21.5);
  }
}

function highlightArrowFn(element) {
  if (element) {
    let rect = element.getBoundingClientRect();
    highlightArrow.style.left = `${
      rect.left + window.scrollX + rect.width / 2 - 25
    }px`;
    highlightArrow.style.top = `${rect.top + window.scrollY - 50}px`;
    highlightArrow.style.display = "block";
    currentHighlightedElement = element;
  }
}

document.addEventListener("DOMContentLoaded", () =>
  highlightArrowFn(enableButton)
);

window.addEventListener('resize', function() {
  highlightArrowFn(currentHighlightedElement); // Recalculate position of the arrow when the window resizes
});
