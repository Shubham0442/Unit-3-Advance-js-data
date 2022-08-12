
// var mypromise = new Promise (function (resolve, reject){
//     resolve("success")
// })
// console.log(mypromise) 


function fact (N)
{
    if(N === 0 || N === 1)
    {
        return N;
    }

    return ( N * fact(N-1))
}



 console.log(fact(5))
//console.log(a)
