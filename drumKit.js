function play(str) {
  if (str === "q" || str === "Q") {
    document.getElementById("display").innerText = "sound crash.mp3";
  } else if (str === "w" || str === "W") {
    document.getElementById("display").innerText = "sound kick-bass.mp3";
  } else if (str === "e" || str === "E") {
    document.getElementById("display").innerText = "sound snare.mp3";
  } else if (str === "a" || str === "A") {
    document.getElementById("display").innerText = "sound tom1.mp3";
  } else if (str === "s" || str === "S") {
    document.getElementById("display").innerText = "sound tom2.mp3";
  } else if (str === "d" || str === "D") {
    document.getElementById("display").innerText = "sound tom3.mp3";
  } else if (str === "z" || str === "Z") {
    document.getElementById("display").innerText = "sound tom4.mp3";
  } else if (str === "x" || str === "X") {
    document.getElementById("display").innerText = "sound tom5.mp3";
  } else if (str === "c" || str === "C") {
    document.getElementById("display").innerText = "sound tom6.mp3";
  }

  var audio = document.getElementById(str);

  audio.value = audio.play();
  audio.volume = setVolume();
}

window.document.onkeyup = function (e) {
  let keyStroke = e.key;

  if (keyStroke === "q" || keyStroke === "Q") {
    play(keyStroke);
  } else if (keyStroke === "w" || keyStroke === "W") {
    play(keyStroke);
  } else if (keyStroke === "e" || keyStroke === "E") {
    play(keyStroke);
  } else if (keyStroke === "a" || keyStroke === "A") {
    play(keyStroke);
  } else if (keyStroke === "s" || keyStroke === "S") {
    play(keyStroke);
  } else if (keyStroke === "d" || keyStroke === "D") {
    play(keyStroke);
  } else if (keyStroke === "z" || keyStroke === "Z") {
    play(keyStroke);
  } else if (keyStroke === "x" || keyStroke === "X") {
    play(keyStroke);
  } else if (keyStroke === "c" || keyStroke === "C") {
    play(keyStroke);
  }
};
function setVolume() {
  const range = parseInt(document.getElementById("myRange").value);
  console.log(range);
  document.getElementById("display").innerText = `Volume : ${range} `;
  return range;
}
