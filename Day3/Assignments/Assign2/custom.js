

//let a = new Array ("x", "y", "z")


function myArray ()
{
    Object.defineProperty(this, "length",{
        value:0,
        writable: true,
        enumerable:false
    });
      

    //console.log(arguments)

    this.length = arguments.length

    for(let i = 0; i<this.length; i++)
    {
        this[i] = arguments[i];
    }
}

let arr = new myArray ("x", "y", "z")

myArray.prototype.ढकलणे = function(value){
   
    let index = this.length;
    this[index] = value
    this.length++;

}

arr.ढकलणे("b")
arr.ढकलणे("c")
arr.ढकलणे("d")
arr.ढकलणे("e")
console.log(arr)

myArray.prototype.काढून_टाकणे = function ()
{
    let index = this.length-1;
    delete this[index];
    this.length--;

}

arr.काढून_टाकणे()
console.log(arr)

myArray.prototype.शिखर = function (value)
{
    // let index = this.length-1;
    // this[index] = value
    console.log(this[this.length-1])
}

arr.शिखर()


myArray.prototype.छापणे = function (value)
{
    let Array1 = [];
   
    for ( let i = 0; i<this.length; i++ )
    {
        Array1[i] = this[i]
    }

    console.log(Array1)
}

arr.छापणे()


myArray.prototype.Arrउलट_करणे = function (value)
{
    let Array2 = [];
   
    for ( let i = this.length-1; i >= 0; i--)
    {
        Array2[this.length-1-i] = this[i]
    }

    console.log(Array2)
}

arr.Arrउलट_करणे()

myArray.prototype.लांबी = function (value)
{
    console.log(this.length)
}

arr.लांबी()