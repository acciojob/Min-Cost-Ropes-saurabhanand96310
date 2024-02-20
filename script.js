function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort();
	let sum=0;
	for(let  i=0;i<arr.length;i++){
		for(let j=i;j<i+2;j++){
			sum=sum+arr[j];
		}
	}
  return sum;
}

module.exports=mincost;
