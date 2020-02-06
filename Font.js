

window.onload = function(){

    var NameAnim = function(sketch) {        
        var curIndex = 0;
        var cnv;
        var sourceText = "Programer Java C# Casey Pazera PHP ";
        var words = sourceText.split(" ");
        

        sketch.windowResized = function()
        {        
            sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
        }




    sketch.setup = function(){
     cnv =sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    cnv.class("lemon");
    cnv.id("mycanvas");
    sketch.noLoop();
    
 }


  sketch.draw = function() {
    
    sketch.textSize(150);
    
    sketch.fill(0);
    
    // center
    sketch.textAlign(sketch.CENTER,sketch.CENTER);
    sketch.text("Casey",sketch.windowWidth/2-100,sketch.windowHeight/2-125);
    sketch.text("Pazera",sketch.windowWidth/2+100,sketch.windowHeight/2);
    sketch.textSize(10);
    sketch.text("Click me!",50,sketch.windowHeight-200);
   

   
   

 
  }

  sketch.mouseClicked = function() 
      {
        if(sketch.mouseX<sketch.windowWidth&&sketch.mouseY<sketch.windowHeight)
        {
        sketch.clear();
        for (var i = 0; i < words.length; i++) {
            sketch.textSize(100);
            sketch.fill(sketch.random(240));
            sketch.text(words[i], sketch.random(sketch.width), sketch.random(sketch.height));
          }
        }
      }

};

 


  var first_sketch = new p5(NameAnim, 'NameAnimDiv');
  
}