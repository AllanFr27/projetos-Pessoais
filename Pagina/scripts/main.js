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
            this.spriteWidth = 46;
            this.spriteHeight = 48;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.scale = 1;
            this.x = this.canvasWidth/2 - this.width * this.scale/2;
            this.y = this.canvasHeight * this.scale/2;
            this.minFrame = 0;
            this.maxFrame = 355;
            this.frameX = 0;
            this.frameY = 2.69;
        }
        draw(context){
            context.drawImage(this.image, 3 + (this.frameX * this.spriteWidth), 13 + (this.frameY * this.spriteHeight), this.spriteWidth, 
            this.spriteHeight, this.x, this.y, this.width * this.scale, this.height * this.scale);

        }
        update(){
            if(this.frameX < 11){
                this.frameX+=1.065;
            }else{
                this.frameX = 0;
            }
        }
    }

    const sonic = new Sonic(canvas.width, canvas.height);

    function animate(){
        sonic.draw(ctx);
        sonic.update();
        requestAnimationFrame(animate);
    }
    animate();
});

