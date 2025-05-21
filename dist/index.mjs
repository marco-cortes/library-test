// src/Notifications.ts
var Notification = class {
  constructor(type, message, duration = 3e3) {
    this.type = type;
    this.message = message;
    this.duration = duration;
  }
  show() {
    console.log(`[${this.type.toUpperCase()}] ${this.message}`);
    setTimeout(() => {
      console.log(`[${this.type.toUpperCase()}] Notification closed`);
    }, this.duration);
  }
};
export {
  Notification
};
