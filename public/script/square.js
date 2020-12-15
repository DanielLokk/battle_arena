class Square {
     constructor(x, y, element) {
          this.x = x;
          this.y = y;
          this.element = element;
          this.visible = false;
     }

     set visibility(val) {
          this.visible = val;
     }
}