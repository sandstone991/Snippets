//This is a terrible implementaion of the Exercise of javascript info
 let Calculator={
  addMethod : function(operatorSign,operation) {
    this.operatorSigns.push(operatorSign);
    this.operations.push(operation);
  },
  operatorSigns : ["+","-"],
  operations : [function(a,b){return a+b},function(a,b) {return a-b}],
  calculate : function(str) {
    let operator = str.slice(str.indexOf(" ")+1,str.lastIndexOf(" "));
    let numbers= str.match(/\d+/g);
    return this.operations[this.operatorSigns.indexOf(operator)](+numbers[0],+numbers[1]);
  },
  
  }
