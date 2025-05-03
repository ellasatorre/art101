    // example #5.1 
    // this is a 7x7 array
    var gridarr = [
        [3, 0, 0, 1, 0, 0, 3],
        [0, 3, 1, 3, 1, 3, 0],
        [0, 1, 3, 2, 3, 1, 0],
        [1, 3, 2, 0, 2, 3, 1],
        [0, 1, 3, 2, 3, 1, 0],
        [0, 3, 1, 3, 1, 3, 0],
        [3, 0, 0, 1, 0, 0, 3]
    ];

    var a = 0;

    function setup() {

        createCanvas(240, 240);

        background(120);

        for (var i = 0; i < gridarr.length; i++) {
            for (var j = 0; j < gridarr.length; j++) {
                a = gridarr[i][j];
                if (a === 1) {
                    fill(220, 220, 0);
                }  else if(a === 0){
                    fill(220);
                } else if(a === 2){
                    fill(200, 100, 100);
                } else {
                    fill(100, 150, 200);
                }

                // typical way of mapping out a grid (value * scale) + offset
                // value  -- the increment counter from the forloop
                // scale -- a multiple that will effect value in terms of size/position of each drawing
                // offset -- relative movement of the x/y position on the canvas
                noStroke();
                rect((j * 30) + 15, (i * 30) + 15, 25, 25);
            }
        }
    }
