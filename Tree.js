class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          depth:0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage('tree.png')
      World.add(world, this.body);
    }
    display(){
      var treepos=this.body.position;
      push()
			translate(treepos.x, treepos.y);
			rectMode(CENTER)
			strokeWeight(3);
            fill(255,0,255)
            imageMode(CENTER)
            image(this.image,0,0,500,500);
    pop()
    }
  };
