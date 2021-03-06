class Object {
     constructor(name, image, attack, defense) {
          this.name = name;
          this.image = image;
          this.attack = attack;
          this.defense = defense;

          // Determine the status of the object
          const foo = attack + defense;
          if (foo < 0) {
               this.status = "Cursed";
          } else if (foo > 0) {
               this.status = "Magic";
          } else if (foo == 0) {
               this.status = "Normal";
          }
     }

     // GETTERS
     get name() { return this.name; }
     get image() { return this.image; }
     get attack() { return this.attack; }
     get defense() { return this.defense; }
}