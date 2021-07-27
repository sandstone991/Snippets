function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
  //this function is not mine
}
function camelize(str){
  return str
  .split("-")
  .filter((item)=>item!="")
  .map((word,index)=>{
    if(index==0){return word;}
  return capitalizeFirstLetter(word);}
  )
  .join("");
}
