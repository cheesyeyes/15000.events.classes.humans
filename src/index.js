import * as events from "events";

class Events extends events.EventEmitter {}

//every uses a device.
class Device{
  constructor(){
    this.type = "vr";
  }
}
//every human has a position. TODO it smore that every device has a position?!
class Position{
  constructor(){
    latitude = 10101;
    longitude = 19283;
  }
}

class Human {
  constructor(height, age){
    this.height = height;
    this.age = age;

    this.action = new Events();
  }
}

const human = new Human(300,30);

//def human actions.

human.action.on('touch', (object) => {
  console.log(`${object} just received a human touch.`);
});

let stone = "A beautiful stone"

human.action.emit('touch', stone);

/* works
const human = new Events();

let stone = 'A beautiful stone';

human.on('touch', (object) => {
  console.log(`${object} just received a human touch.`);
});

human.emit('touch', stone);

console.log(human)
*/
