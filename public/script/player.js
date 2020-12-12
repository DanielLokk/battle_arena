class Player {
     constructor(token, name, x, y, d, attack, defense, vp, image, obj, remCode) {
          this.token = token;
          this.name = name;
          this.x = x;
          this.y = y;
          this.d = d;
          this.attack = attack;
          this.defense = defense;
          this.vp = vp;
          this.image = image;
          this.obj = obj;
          this.remCode = remCode;
          this.money = 0;
     }

     // Setters
     set setX(x) { this.x = x; }
     set setY(y) { this.y = y; }
     set setD(d) { this.d = d; }
     set setAttack(attack) { this.attack = attack; }
     set setDefense(defense) { this.defense = defense; }
     set setVp(vp) { this.vp = vp; }
     set setObject(obj) { this.obj = obj; }
     set addMoney(money) { this.money += money; }

     //Getters
     get getToken() { return this.token; }
     get getX() { return this.x; }
     get getY() { return this.y; }
     get getD() { return this.d; }
     get getAttack() { return this.attack; }
     get getDefense() { return this.defense; }
     get getVp() { return this.vp; }
     get getObject() { return this.obj; }
     get getRemCode() { return this.remCode; }
     get getMoney() { return this.money; }
}