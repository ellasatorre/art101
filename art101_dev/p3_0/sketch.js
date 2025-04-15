
//axolotl in bucket
    var axbucket = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 6, 6, 5, 5, 0, 0, 0, 0, 5, 5, 6, 6, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 6, 6, 5, 5, 6, 6, 5, 5, 0, 0, 0, 0, 5, 5, 6, 6, 5, 5, 6, 6, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 6, 6, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 6, 6, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 3, 3, 4, 4, 4, 5, 5, 4, 4, 4, 3, 3, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 5, 3, 3, 3, 3, 5, 3, 3, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 1, 5, 3, 3, 3, 3, 5, 1, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 5, 1, 1, 1, 1, 5, 7, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 2, 2, 6, 5, 6, 2, 2, 6, 5, 6, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 2, 2, 2, 6, 2, 2, 2, 2, 6, 7, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 2, 2, 2, 2, 2, 2, 2, 7, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 2, 2, 2, 2, 2, 2, 7, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 2, 2, 2, 2, 2, 2, 7, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 2, 2, 2, 2, 2, 2, 7, 7, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    let images = [];
    let strings = ['hello','bucket','bucket','water','axoltl','axoltol','axoltl','bucket'];

    var a = 0;
    let font1;

    function preload()  {

        font1 = loadFont('assets/ByteBounce.ttf');
        images[0] = loadImage('assets/dirt.jpg');
        images[1] = loadImage('assets/obsidian.jpg');
        images[2] = loadImage('assets/stone.jpg');
        images[3] = loadImage('assets/water.jpeg');
        images[4] = loadImage('assets/cherryplank.png');
        images[5] = loadImage('assets/concrete.png');
        images[6] = loadImage('assets/pinkconcrete.png');  
        images[7] = loadImage('assets/basalt.jpg');
 
 }

    function setup() {

        createCanvas(1000, 1000);

        background(150);
        axolotlbucket(axbucket, 100, 100, 4, .25);
        bucket2(axbucket, 500, 100, -4, .40, 100);
        bucket2(axbucket, 550, 550, 0, .30);
        bucket3(axbucket, 50, 500, -5, .45);
        bucket3(axbucket, 700, 700, 180, .2, 100);
        bucketimgs(axbucket, images, 800, 800, 0, .2);
        buckettext(axbucket, strings, 300, 300, 90, .25);
    }

    function axolotlbucket(arr,lx,ly,rot,sc,fade){
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                a = arr[i][j];
                if (a === 0) {
                    //fill(169, 207, 155,fade);
                    noFill()
                }  else if(a === 1){
                    fill(10,fade);
                } else if(a === 2){
                    fill(150,fade);
                } else if(a === 3) {
                    fill(15, 44, 110,fade);
                } else if(a === 4){
                    fill(255, 128, 153,fade);
                } else if(a === 5){
                    fill(255, 92, 125,fade);
                }else if(a === 6){
                    fill(255, 33, 78,fade);
                }else if(a === 7){
                    fill(100,fade);
                }
                noStroke();
                rect((j * 30) + 15, (i * 30) + 15, 30, 30);
            }
        }
        pop();
    }

    function bucket2(arr,lx,ly,rot,sc,fade){
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                a = arr[i][j];
                if (a === 0) {
                    fill(255, 199, 56,fade);
                }  else if(a === 1){
                    fill(10,fade);
                } else if(a === 2){
                    fill(150,fade);
                } else if(a === 3) {
                    fill(15, 44, 110,fade);
                } else if(a === 4){
                    fill(125, 138, 255,fade);
                } else if(a === 5){
                    fill(86, 102, 240,fade);
                }else if(a === 6){
                    fill(2, 35, 168,fade);
                }else if(a === 7){
                    fill(100,fade);
                }
                noStroke();
                rect((j * 30) + 15, (i * 30) + 15, 30, 30);
            }
        }
        pop();
    }

    function bucket3(arr,lx,ly,rot,sc,fade){
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                a = arr[i][j];
                if (a === 0) {
                    fill(152, 117, 255,fade);
                }  else if(a === 1){
                    fill(10,fade);
                } else if(a === 2){
                    fill(150,fade);
                } else if(a === 3) {
                    fill(15, 44, 110,fade);
                } else if(a === 4){
                    fill(255, 231, 135,fade);
                } else if(a === 5){
                    fill(255, 188, 94,fade);
                }else if(a === 6){
                    fill(255, 163, 36,fade);
                }else if(a === 7){
                    fill(100,fade);
                }
                noStroke();
                ellipse((j * 30) + 15, (i * 30) + 15, 30, 30);
            }
        }
        pop();
    }

    function bucketimgs(arr, imgarr, lx,ly,rot,sc,fade){
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        let nuimg;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                a = arr[i][j];
                if (a === 0) {
                    nuimg = imgarr[0];
                }  else if(a === 1){
                    nuimg = imgarr[1];
                } else if(a === 2){
                    nuimg = imgarr[2];
                } else if(a === 3) {
                    nuimg = imgarr[3];;
                } else if(a === 4){
                    nuimg = imgarr[4];
                } else if(a === 5){
                    nuimg = imgarr[5];
                }else if(a === 6){
                    nuimg = imgarr[6];
                }else if(a === 7){
                    nuimg = imgarr[7];
                }
                image(nuimg, (j * 30) + 15, (i * 30) + 15, 30, 30);
            }
        }
        pop();
    }

    function buckettext(arr, textarr, lx,ly,rot,sc,fade){
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        let value;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                a = arr[i][j];
                if (a === 0) {
                    fill(130, 222, 255,fade);
                    value = textarr[0];
                }  else if(a === 1){
                    fill(10,fade);
                    value = textarr[1];
                } else if(a === 2){
                    fill(150,fade);
                    value = textarr[2];
                } else if(a === 3) {
                    fill(15, 44, 110,fade);
                    value = textarr[3];;
                } else if(a === 4){
                    fill(255, 128, 153,fade);
                    value = textarr[4];
                } else if(a === 5){
                    fill(255, 92, 125,fade);
                    value = textarr[5];
                }else if(a === 6){
                    fill(255, 33, 78,fade);
                    value = textarr[6];
                }else if(a === 7){
                    fill(100,fade);
                    value = textarr[7];
                }
                strokeWeight(4);
                textFont(font1);
                textSize(25);
                text(value, (j * 30) + 15, (i * 30) + 15, 30, 30);
            }
        }
        pop();
    }