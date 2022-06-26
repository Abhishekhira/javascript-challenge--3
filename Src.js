console.log("file is connected")
function countTrue(arr) {
	
	
        var q=[]
	var d=arr.filter((l)=>
	{
     if (l===true) {
       q.push(l) 
     }

    })
	console.log(q.length)
		
	
    return  d;
    console.log(d)
}

let c=countTrue([true,true,false,false,true])
console.log(c)