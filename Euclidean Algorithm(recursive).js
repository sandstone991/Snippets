function evenSquare(x,y){
if(x>y){
if(x/y==2){
return y;
}
return evenSquare(x-y,y);
}
else if(x<y){
if(y/x==2){
return(x)
}
return evenSquare(x,y-x);
}
else{return 1;}
}
let c=evenSquare(x,y);
console.log(c);
