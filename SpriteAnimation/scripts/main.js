window.addEventListener("load", function(){
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;

    // declare class
    class Sonic {
        constructor(canvasWidth, canvasHeight){
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.image = document.getElementById("character");
            this.image.src = "img/sonicSprites.png";
            this.spriteWidth = 46;
            this.spriteHeight = 48;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.scale = 9;
            this.x = this.canvasWidth/2 - this.width * this.scale/2;
            this.y = this.canvasHeight/2 - this.height * this.scale/2;
            this.minFrame = 0;
            this.maxFrame = 0;
            this.frameEnd = 0;
            this.framePerSecond = 0;
            this.fps = 0;
            this.frame = 0;
            this.frameX = 0;
            this.frameY = 0;
        }
        draw(context){
            context.drawImage(this.image, 3 + (this.frameX * this.spriteWidth), 13 + (this.frameY * this.spriteHeight), this.spriteWidth, 
            this.spriteHeight, this.x, this.y, this.width * this.scale, this.height * this.scale);

        }
        update(){
            // set animation speed
            if(this.framePerSecond < this.fps){
                this.framePerSecond++;
            }else{
                if(this.frameEnd == true) this.frame = this.frame < this.maxFrame ? this.frame + 1 : this.minFrame;
                else this.frame = this.frame < this.maxFrame ? this.frame + 1 : this.maxFrame;
                this.framePerSecond = 0;
            }
            
            if(this.frame >= 0 && this.frame < 17){
                this.frameY = 0;
                this.frameX = (this.frame % 17) * 1.0652;
            }
            if(this.frame >= 17 && this.frame < 42){
                this.frameY = 1.48;
                this.frameX = ((this.frame - 17) % 25) * 1.0652;
            }
            if(this.frame >= 42 && this.frame < 66){
                this.frameY = 2.69;
                this.frameX = ((this.frame - 42) % 24) * 1.0652;
            }
            if(this.frame >= 66 && this.frame < 89){
                this.frameY = 4.11;
                this.frameX = ((this.frame - 66) % 23) * 1.0652;
            }
            if(this.frame >= 89 && this.frame < 109){
                this.frameY = 5.36;
                this.frameX = ((this.frame - 89) % 20) * 1.0652;
            }
            if(this.frame >= 109 && this.frame < 133){
                this.frameY = 6.61;
                this.frameX = ((this.frame - 109) % 24) * 1.0652;
            }
            if(this.frame >= 133 && this.frame < 149){
                this.frameY = 8.03;
                this.frameX = ((this.frame - 133) % 16) * 1.0652;
            }
            if(this.frame >= 149 && this.frame < 165){
                this.frameY = 9.275;
                this.frameX = ((this.frame - 149) % 16) * 1.0652;
            }
            if(this.frame >= 165 && this.frame < 182){
                this.frameY = 10.48;
                this.frameX = ((this.frame - 165) % 17) * 1.0652;
            }
        }
        setAnimation(newMinFrame, newMaxFrame, fps, frameEnd){
            this.minFrame = newMinFrame;
            this.maxFrame = newMaxFrame;
            this.fps = fps;
            this.frameEnd = frameEnd;
            this.frame = this.minFrame;
        }
    }

    // update sprite
    const sonic = new Sonic(canvas.width, canvas.height);

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        sonic.draw(ctx);
        sonic.update();
        requestAnimationFrame(animate);
    }
    animate();
    
    // set animation
    const idle = this.document.getElementById("idle");
    const lookUp = this.document.getElementById("lookUp");
    const lookDown = this.document.getElementById("lookDown");
    const walking = this.document.getElementById("walking");
    const jogging = this.document.getElementById("jogging");
    const running = this.document.getElementById("running");
    const dash = this.document.getElementById("dash");
    const peelout = this.document.getElementById("peelout");
    const jump = this.document.getElementById("jump");
    const spring = this.document.getElementById("spring");
    const spring2 = this.document.getElementById("spring2");
    const skid = this.document.getElementById("skid");
    const spinDash = this.document.getElementById("spinDash");
    const dropDash = this.document.getElementById("dropDash");
    const push = this.document.getElementById("push");
    const hurt = this.document.getElementById("hurt");
    const die = this.document.getElementById("die");
    const drown = this.document.getElementById("drown");
    
    idle.addEventListener("click", function(){
        sonic.setAnimation(0, 29, 4, true);
    });
    
    lookUp.addEventListener("click", function(){
        sonic.setAnimation(30, 34, 4, false);
    });
    
    lookDown.addEventListener("click", function(){
        sonic.setAnimation(37, 40, 4, false);
    });

    walking.addEventListener("click", function(){
        sonic.setAnimation(42, 53, 4, true);
    });
    
    jogging.addEventListener("click", function(){
        sonic.setAnimation(66, 75, 2, true);
    });
    
    running.addEventListener("click", function(){
        sonic.setAnimation(76, 83, 2, true);
    });

    dash.addEventListener("click", function(){
        sonic.setAnimation(85, 88, 2, true);
    });
    
    peelout.addEventListener("click", function(){
        sonic.setAnimation(89, 92, 2, true);
    });
    
    jump.addEventListener("click", function(){
        sonic.setAnimation(93, 108, 2, true);
    });
    
    spring.addEventListener("click", function(){
        sonic.setAnimation(109, 118, 2, true);
    });
    
    spring2.addEventListener("click", function(){
        sonic.setAnimation(119, 120, 4, true);
    });
    
    skid.addEventListener("click", function(){
        sonic.setAnimation(121, 132, 4, false);
    });
    
    spinDash.addEventListener("click", function(){
        sonic.setAnimation(133, 148, 2, true);
    });
    
    dropDash.addEventListener("click", function(){
        sonic.setAnimation(149, 164, 2, true);
    });
    
    push.addEventListener("click", function(){
        sonic.setAnimation(165, 174, 4, true);
    });
    
    hurt.addEventListener("click", function(){
        sonic.setAnimation(175, 179, 4, false);
    });
    
    die.addEventListener("click", function(){
        sonic.setAnimation(180, 180, 4, false);
    });
    
    drown.addEventListener("click", function(){
        sonic.setAnimation(181, 181, 4, false);
    });
});
