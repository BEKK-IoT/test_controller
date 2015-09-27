import keypress from 'keypress';
import {firebase} from 'devices-core';

let fire = new firebase("Alex", 'gadgets/game/')
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);

  if (key && key.ctrl && key.name == 'c') {
      process.stdin.pause();
      fire.unregister(fire.defaultConnection, () => process.exit(0));
  }

  if (key) {
    if (key.name == "left"){
      console.log("left");
      fire.send("move", "left");
    }
    else if (key.name == "right"){
      console.log("right");
      fire.send("move", "right");
    }
    else if (key.name == "up"){
      console.log("up");
      fire.send("move", "up");
    }
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
