//The graph table
const graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;
graph["a"] = {};
graph["a"]["fin"] = 1;
graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;
graph["fin"] = {};

// The costs table
const costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

// the parents table
const parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;
let processed = [];
while(1){
    let node= findMinimum(costs);
    if(Object.keys(graph[node]).length===0){break;}
    processed.push(node);
    for(obj in graph[node]){
     if(graph[node][obj]+costs[node]<costs[obj]){
         costs[obj]=graph[node][obj]+costs[node];
         parents[obj]=node;
     }
     
    }

}
function findMinimum(obj){
   let min =Infinity;
     let yourKey;
    for(let node in obj){
        if((processed.indexOf(node))==-1){
        if(min>obj[node]){
            min=obj[node]
            yourKey=node;
        }
    }}
    return yourKey;
}
//Azzam
//Grokking Algorithms exercise
