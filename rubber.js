class Rubber {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution: 0.5,
          density: 0.8,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("green");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };