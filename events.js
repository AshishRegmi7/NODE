const events = require("events");
//events initialize
const eventEmitter = new events.EventEmitter();
//fn define
const sayHello = () => {
  console.log("Hello Everyone");
};
//Assign
eventEmitter.addListener("hello", sayHello); //defined event name as hello
//call event
// eventEmitter.emit("hello");

const gmail = () => {
    console.log("Gmail Sender");
};
eventEmitter.addListener("Gmail", gmail);
const message = () => {
  eventEmitter.emit("Gmail");
  console.log("Message Sent");
};
eventEmitter.addListener("message", message);
eventEmitter.emit("message");
