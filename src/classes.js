

/**
 * Class to create a Programmer
 * @example
 * const programmerOne = new Programmer({ fullname: "John Doe" }, "javascript");
 * newProgrammer.getInfo();
 * 
 * @see https://www.youtube.com/watch?v=r0H-acWQS6c&t=3073s
 * @todo Implement the rest of methods
 * @tutorial first-tutorial
 */
class Programmer {

    /**
     * @param {Object} user User's Information
     * @param {string} language A programming language
     */
    constructor(user, language) {
        this.fullname = user.fullname;
        this.language = language;
    }

    /**
     * Get Programmer Information
     * @returns {voice}
     */
    getInfo() {
        console.log(`I'm ${this.fullname} and my favorite programing Language is ${this.language}`);
    }
}

/**
 * know mopre in {@link Programmer}
 */
const programmerOne = new Programmer({ fullname: "John Doe" }, "javascript");
const programmerTwo = new Programmer({ fullname: "Jane Smith" }, "python");

programmerOne.getInfo();
programmerTwo.getInfo();
