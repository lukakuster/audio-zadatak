"use strict";
const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

let power = true;
let currentBank = bankOne;

const buttons = document.querySelectorAll(".btn");
const displayedName = document.querySelector(".display-name");
const powerStateLabel = document.querySelector(".state-label");
const powerSwitch = document.querySelector(".power-switch");
const titleName = document.querySelector(".title-name");
const bankSwitch = document.querySelector(".bank-switch");

// console.log(powerStateLabel);

// console.log(buttons);

// btnQ.addEventListener("click", function () {
//   const audio = new Audio(
//     "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
//   );
//   audio.play();
// });

powerSwitch.addEventListener("change", function () {
  if (powerSwitch.checked) {
    powerStateLabel.textContent = "ON";
    power = true;
  } else {
    power = false;
    powerStateLabel.textContent = "OFF";
  }
});

bankSwitch.addEventListener("change", function () {
  if (bankSwitch.checked) {
    currentBank = bankOne;
  } else {
    currentBank = bankTwo;
  }
});

buttons.forEach((e) => {
  e.addEventListener("click", function () {
    if (power) return;

    const key = this.id;

    const sound = currentBank.find((i) => i.keyTrigger === key);
    if (sound) {
      const playSound = new Audio(sound.url);
      playSound.play();
      titleName.textContent = sound.id;
    }
  });
});

document.addEventListener("keydown", function (e) {
  const key = e.key.toUpperCase();
  const validKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  if (validKeys.includes(key)) {
    const sound = currentBank.find((i) => i.keyTrigger === key);
    if (sound) {
      const zvuk = new Audio(sound.url);
      zvuk.play();
      titleName.textContent = sound.id;
    }
  }
});
