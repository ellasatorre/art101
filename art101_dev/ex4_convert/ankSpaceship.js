//spaceship class
class ankSpaceship{
    posx; //x position
    posy; //y postition
    rot; //rotation
    col; //color of main ship
    body; //body type, 1 2 or 3, the constructor will take random values
    head; //head type, 1 2 or 3, the constructor will take random values
    sc; //scale of object defualt is 1
    sx; //x speed
    sy; //y speed
    adrift;

   //----------------------------------------constructor takes x and y position, rotation, color, 1 2 or 3 to determine body and headtype, scale
    constructor(lposx, lposy, lrot, lcol, lbody, lhead, lsc){
      this.posx = lposx;
      this.posy = lposy;
      this.rot = lrot;
      this.col = lcol;
      this.adrift =true;
      this.sx = 0;
      this.sy = 0;
      //if statement to determine random numbers for head and body
      if(lbody <1 || lbody==1){
        lbody=1;
      }else if(lbody <2 || lbody ==2){
        lbody=2;};
      // }else{
      //   lbody=3;
      // }
      if(lhead <1 || lhead==1){
        lhead=1;
      }else if(lhead <2 || lhead ==2){
        lhead=2;
      }else{
        lhead=3;
      }
      this.body = lbody;
      this.head = lhead;
      this.sc = lsc;
    }

    //display fuction 
    displayShip() {
        //console.log("toon1");
        // this bug has 4 legs and a tongue
        push();
        fill(this.col);
        translate(this.posx, this.posy);
        rotate(this.rot);
        scale(this.sc);
        triangle(0, -10, -10, 10, 10, 10);
        //body switch statement
        switch(this.body){
          case 1:
            this.bodyA(this.col);
            break;
          case 2:
            this.bodyB(this.col);
            break;
          // case 3:
          //   this.bodyC(this.col);
          //   break;
        }
        //head switch statement 
        switch(this.head){
          case 1:
            this.headA();
            break;
          case 2:
            this.headB();
            break;
          case 3:
            this.headC();
            break;
        }
        pop();

    }
      //--------------------------------------child functions----------------------------------
      //bodies
      bodyA(col){
        quad(40, 0, -40, 0, -50, 30, 50, 30);
        this.rocket(20, 30, col);
        this.rocket(-20, 30, col);
      }
      bodyB(col){
        quad(15, 0, -15, 0, -25, 60, 25, 60);
        this.rocket( 10, 60, col);
        this.rocket(-10, 60, col);
      }
      // bodyC(col){
      //   rect(-15, 0, 30, 80);
      //   this.solarPanel(15, 30, 0);
      //   this.solarPanel(-15, 30, PI);
      //   this.solarPanel(15, 60, 0);
      //   this.solarPanel(-15, 60, PI);
      //   this.rocket(0, 90, col);
      // }
      
      //heads
      headA(){
        beginShape();
        vertex(-15, 0);
        vertex(15, 0);
        vertex(8, -30);
        bezierVertex(2, -40, -2, -40, -8, -30);
        endShape(CLOSE);
        fill(color(215, 244, 255));
        quad(7, -5, -7, -5, -10, 10, 10, 10);
      }
      headB(){
        quad(8, 0, -8, 0, -2, -90, 2, -90);
        quad(15, 0, -15, 0, -10, -70, 10, -70);
        fill(color(215, 244, 255));
        quad(5, -2, -5, -2, -7, 20, 7, 20);
      }
      headC(){
        push();
        fill(color(215, 244, 255));
        beginShape();
        vertex(-16, 3);
        vertex(0, 3);
        vertex(0, -20);
        bezierVertex(0, -30, -16, -30, -16, -20);
        endShape(CLOSE);
        pop();
        beginShape();
        vertex(-20, 0);
        vertex(-15, 5);
        vertex(15, 5);
        vertex(20, 0);
        vertex(12, -20);
        bezierVertex(2, -40, -2, -40, -2, -20);
        endShape(CLOSE);
      }
      
      //grandchild functions
      rocket(rocx, rocy, roccol){
        push();
        translate(rocx, rocy);
        fill(77);
        triangle(0, 0, -10, 10, 10, 10);
        fill(roccol);
        beginShape();
        vertex(-8, 3);
        vertex(8, 3);
        vertex(8, -20);
        bezierVertex(8, -30, -8, -30, -8, -20);
        endShape(CLOSE);
        pop();
      }
      
      // solarPanel(solx, soly, solrot){
      //   push();
      //   translate(solx, soly);
      //   rotate(solrot);
      //   fill(77);
      //   rect(0, -5, 30, 10);
      //   fill(217, 135, 21);
      //   rect(10, -10, 70, 20);
      //   noFill();
      //   rect(10, -10, 70, 10);
      //   pop();
      // }

      changeHead(){
        if(this.head<3){
          this.head++;
        }
        else{
          this.head = 1;
        }
      }
      changeBody(){
        if(this.body<2){
          this.body++;
        }
        else{
          this.body = 1;
        }
      }
      changeSpeed(newsx, newsy){
        this.sx = newsx;
        this.sy = newsy;
      }

      changeAdrift(){
        if(this.adrift){
          this.adrift = false;
        }
        else{
          this.adrift =true;
        }
      }

      updateShip(){
        if(this.adrift){
          this.rot += .01;
        }
        else{
          this.rot = this.shipface(this.sx,this.sy);
        }
        this.posx += this.sx;
        this.posy += this.sy;
        //left
        if(this.posx <0){
          this.posx = width;
        }
        if(this.posx >width){
          this.pox = 0;
        }
        if(this.posy <0){
          this.posy = height;
        }
        if(this.posy >height){
          this.posy = 0;
        }
      }

      shipface(vx, vy){
        //if x is positive it faces left and if its negative ship faces right
        //if y is positive it faces down and if its negtive ship faces up
        let lrot = createVector(vx,vy);
        return(lrot.heading()+HALF_PI);
      }
}

