window.addEventListener("load", function(){
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;

    class Sonic {
        constructor(canvasWidth, canvasHeight){
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.image = document.getElementById("sonic");
            //this.image.src = "img/sonicSprite.png";
            this.spriteWidth = 46;
            this.spriteHeight = 48;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.scale = 9;
            this.x = this.canvasWidth/2 - this.width * this.scale/2;
            this.y = this.canvasHeight/2 - this.height * this.scale/2;
            this.minFrame = 66;
            this.maxFrame = 79;
            this.framePerSecond = 0;
            this.frameRep = 0;
            this.minRep = 0;
            this.maxRep = 0;
            this.frame = 0;
            this.frameX = 0;
            this.frameY = 0;
        }
        draw(context){
            context.drawImage(this.image, 3 + (this.frameX * this.spriteWidth), 13 + (this.frameY * this.spriteHeight), this.spriteWidth, 
            this.spriteHeight, this.x, this.y, this.width * this.scale, this.height * this.scale);

        }
        update(){
            if(this.frame < this.minFrame) this.frame = this.minFrame;
            if(this.framePerSecond < 3) this.framePerSecond++;
            else this.framePerSecond = 0;
            
            if(this.frame < this.maxFrame){
                if(this.framePerSecond == 0) this.frame++;
            }else this.frame = this.minFrame;
            
            if(this.frame >= 0 && this.frame < 17){
                this.frameY = 0;
                this.frameX = (this.frame % 17) * 1.0652;
            }
            if(this.frame >= 17 && this.frame < 30){
                this.frameY = 1.48;
                this.frameX = (this.frame % 17) * 1.0652;
            }
            if(this.frame >= 30 && this.frame < 42){
                this.frameY = 1.48;
                this.frameX = (this.frame % 17) * 1.0652;
            }
            if(this.frame >= 42 && this.frame < 65){
                this.frameY = 2.694;
                this.frameX = (this.frame % 24) * 1.0652;
            }
            if(this.frame >= 65 && this.frame < 88){
                this.frameY = 4.11;
                this.frameX = (this.frame % 23) * 1.0652;
            }
            //this.frameY = Math.floor(this.frame/38);
        }
        setAnimation(newMinFrame, newMaxFrame){
            this.minFrame = newMinFrame;
            this.maxFrame = newMaxFrame;
            this.minRep = minRep;
            this.maxRep = maxRep;
            this.frame = this.minFrame;
        }
    }

    const sonic = new Sonic(canvas.width, canvas.height);

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        sonic.draw(ctx);
        sonic.update();
        requestAnimationFrame(animate);
    }
    animate();

    const idle = this.document.getElementById("idle");
    const walking = this.document.getElementById("walking");

    idle.addEventListener("click", function(){
        sonic.setAnimation(0, 30);
    });

    walking.addEventListener("click", function(){
        sonic.setAnimation(42, 54);
    });
});

