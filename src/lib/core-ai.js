export default class CoreAI {
  constructor() {
    console.log("CoreAI");
    this.prompt;
  }
  init() {
    console.log("init");
  }
  provideResponse(promoteText) {
    this.prompt = promoteText;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("I Can't understand anything right now. " + this.prompt);
      }, 2000);
    });
  }
}

// base memory
// minimal learning logic
// neural network
//
