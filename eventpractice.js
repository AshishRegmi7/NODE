const events = require("events");
const eventEmitter = new events.EventEmitter();

const grettings = () => {
  console.log("Namaste everyone");
};

const slugify = (string = "Hello everyone Im learning node.js") => {
  console.log(
    string
      .split(" ")
      .map((value) => value.toLowerCase())
      .join("-")
  );
};

eventEmitter.addListener("govinda", grettings);
eventEmitter.addListener("rama", slugify);

const message = () => {
  eventEmitter.emit("rama");
  console.log("Message sent");
};
eventEmitter.addListener("message", message);
eventEmitter.emit("message");
eventEmitter.emit("govinda");
