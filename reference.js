let family = {
    _father: "john",
    get father() {
        return this._father;
    },
    set father(value) {
        this._father = value;
    },
    _mother: "mary",
    get mother() {
        return this._mother;
    },
    set mother(value) {
        this._mother = value;
    },
};


// Outgoing references do not matter. Only incoming ones can make an object reachable

//The basic garbage collection algorithm is called “mark-and-sweep”
//optimization

// That’s the main purpose of constructors – to implement reusable object creation code.


//Generational collection
//Incremental collection
//Idle-time collection



let fam = family;

//console.log(fam);
//console.log(family);


let ladder = {
    step: 0,
    up() {
      this.step++;
      return ladder;
    },
    down() {
      this.step--;
      return ladder;
    },
    showStep: function() { // shows the current step
        console.log( this.step );
    }
  };


  ladder.up();
  ladder.up();
  ladder.down();
  ladder.showStep();

  ladder.up().up().down().showStep();

  //ladder.showStep();