class Player {
     constructor(token, name, x, y, d, attack, defense, vp, image, object, remCode) {
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
          this.remCode = remCode;
     }

     // Setters
     set setX(x) { this.x = x; }
     set setY(y) { this.y = y; }
     set setD(d) { this.d = d; }
     set setAttack(attack) { this.attack = attack; }
     set setDefense(defense) { this.defense = defense; }
     set setVp(vp) { this.vp = vp; }
     set setObject(object) { this.object = object; }

     //Getters
     get getToken() { return this.token; }
     get getX() { return this.x; }
     get getY() { return this.y; }
     get getD() { return this.d; }
     get getAttack() { return this.attack; }
     get getDefense() { return this.defense; }
     get getVp() { return this.vp; }
     get getObject() { return this.object; }
     get getRemCode() { return this.remCode; }
}