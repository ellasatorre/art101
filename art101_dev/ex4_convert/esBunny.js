

class esBunny {

    //class vars
    c;
    lxo;
    lyo;
    rot;
    sc;
    sx;
    sy;


    //setup
    constructor(lc,llxo,llyo,lrot,lsc){
        
        this.c = lc;
        this.lxo = llxo;
        this.lyo = llyo;
        this.rot = lrot;
        this.sc = lsc; 

        this.sx = random(-10,10);
        this.sy = random(-10,10);

    }

displayBunny(){
        push();
        translate(this.lxo, this.lyo);
        rotate(this.rot);
        scale(this.sc);
        fill(this.c);
        this.bunnyBody(this.c, 0, 100, 0, 1);
        this.esbunnyHead(this.c,0,0, 0, 1);
        pop();

    }

updateBunny(){
    this.lyo += this.sy;
    this.lxo += this.sx;

    if (this.lxo < 0){
      this.lxo = width
    }

    if (this.lxo > width){
      this.lxo = 0
    }

    if (this.lyo > height){
      this.lyo = 0;
    }

    if (this.lyo < 0){
      this.lyo = height;
    }

    } 
      
bunnyBody(c,lxo,lyo,rot,sc){
        push();
      translate(lxo, lyo);
      rotate(rot);
      scale(sc);
      fill(c);
      
      ellipse(-50, 70, 70, 30)
      ellipse(50, 70, 70, 30)
      
      fill(c);
      ellipse(0, 0,200,150);
      fill(0,70);
      ellipse(0, -50, 150, 100);
      pop();
      }

esbunnyHead(c,lxo,lyo,rot,sc){
        push();
      translate(lxo, lyo);
      rotate(rot);
      scale(sc);
      fill(c);
      
        this.bunnyEars(c, -60, -65, -10);
        this.bunnyEars(c, 60, -65, 10);
        ellipse(0,0,190,165);
      
        this.bunnyEyes(-50, 10);
        this.bunnyEyes(50, 10);
      
        this.bunnyNose(0, 15);
        pop();
      }
    
      
bunnyEars(c,lxo,lyo,rot,sc){
        push();
      translate(lxo, lyo);
      rotate(rot);
      scale(sc);
      fill(c);
        rect(0, 0,  50, 200, 45, 45, 15, 15);
        fill(252, 162, 207);
        rect(0, 5,  30, 170, 45, 45, 15, 15);
        pop();
      }
      
bunnyEyes(lxo,lyo,rot,sc){
        push();
      translate(lxo, lyo);
      rotate(rot);
      scale(sc);
        fill(0);
        ellipse(0, 0, 20, 30);
        pop();
      }
      
bunnyNose(lxo,lyo,rot,sc){
        push();
      translate(lxo, lyo);
      rotate(rot);
      scale(sc);
        fill(252, 162, 207);
        ellipse(0, 0, 15, 10);
      pop();
      }
}