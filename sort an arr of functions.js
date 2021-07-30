function funcSort(arr) {
	return arr
  .sort((f1,f2)=>{
    let i1=0,i2=0,flag1=1,flag2=1;
do{
  flag1=(typeof f1=='function')?true:false;
  flag2=(typeof f2=='function')?true:false;
    if(flag1){
			f1=f1();
			i1++;
    } 
    if(flag2)
    {
			f2=f2();
			i2++;
    }
  }while(flag1||flag2);
	return i1-i2;
	})}
  funcSort = arr => {
	f = g => typeof g == 'function' ? 1 + f(g()) : 0
	return arr.sort((x,y) => f(x) - f(y))
}
