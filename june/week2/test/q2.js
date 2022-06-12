//Q. In how many ways can we loop in an array describe each with an example ?
// methodes for looping an array
// 1. for loop simple methode : in this methode we give a for loop from index value 0 to index value 1 less than length of an Array

let array = [1,2,3,4,5,6];
for(let i=0;i<array.length;i++){
    console.log('methode1',array[i]);
}
console.log('**********');
// 2. for loop of methode 
for(let elements of array){
    console.log('methode2',elements);
}
console.log('**********');
// 3.While loops: 
let index=0;
while(index<array.length){
    console.log('methode3',array[index]);
    index++;
}
console.log('**********');

