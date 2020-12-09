class Player {
     constructor(token, name, x, y, d, attack, defense, vp, image, object) {
          this.token = token;
          this.name = name;
          this.x = x;
          this.y = y;
          this.d = d;
          this.attack = attack;
          this.defense = defense;
          this.vp = vp;
          this.image = image;
          this.object = object;
     }

     // Setters
     setX(x) { this.x = x; }
     setY(y) { this.y = y; }
     setD(d) { this.d = d; }
     setAttack(attack) { this.attack = attack; }
     setDefense(defense) { this.defense = defense; }
     setVp(vp) { this.vp = vp; }
     setObject(object) { this.object = object; }

     //Getters
     getX() { return this.x; }
     getY() { return this.y; }
     getD() { return this.d; }
     setAttack() { return this.attack; }
     setDefense() { return this.defense; }
     setVp() { return this.vp; }
     setObject() { return this.object; }
}