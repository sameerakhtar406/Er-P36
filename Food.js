class Food {
constructor(){
 this.image=loadImage("Milk.png");
 var foodStock
 var lastFed
}
display(){
 var x=80, y=100;

 imageMode(CENTER);
 image(this.image,720,220,70,70);
 if(this.foodstock!=0){
 for(var i=0;i<this.foodstock;i++){
 if(i%10==0){
 X=80;
 y=y+50;
 }
 image(this.image,x,y,50,50);
 x=x+30;
}
}
}
}
