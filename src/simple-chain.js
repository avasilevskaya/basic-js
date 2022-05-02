const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink: function (value) {
    console.log(this.chain);
    this.chain.push(value);
    console.log(this.chain);
    return this;
  },
  removeLink: function (position) {
    console.log(this.chain);
    let error = new Error ("You can\'t remove incorrect link!");
    if (typeof position !== 'number') {
      this.chain = [];
      throw error;
    }
    let n = this.chain.lenght;
    const pos = position - 1;
    if (pos > n || pos < 0) {
      this.chain = [];
      throw error;
    }
    this.chain.splice(pos, 1);
    console.log(this.chain);
    return this;
  },
  reverseChain: function() {
    console.log(this.chain);
    this.chain.reverse();
    console.log(this.chain);
    return this;
  },
  finishChain: function () {
    console.log(this.chain);
    let chainOfStr = this.chain.map((el) => "( " + el + " )");
    console.log(this.chain);
    this.chain = [];
    console.log(this.chain);
    return chainOfStr.join("~~");
  }
};


chainMaker.addLink(999).addLink(33);
chainMaker.addLink(66);
console.log(chainMaker.chain);
chainMaker.reverseChain();
console.log(chainMaker.chain);
chainMaker.finishChain();
//chainMaker.removeLink(0);
console.log(chainMaker.chain);



module.exports = {
  chainMaker
};
