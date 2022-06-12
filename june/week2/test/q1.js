var list = ['geek', 'geeky'];
for(let i=0;i<list.length;i++){
    if(list[i]=='geekster')
    {
        var eureka= i;
        for( let p=i;p<list.length-1;p++){
            list[p]=list[p+1];
        }
    }
}
list.pop();
console.log(list);

