

var amar = 
{
    name: "Amar",
    city: "Goa",
    skill: "Singer",
    getSkill: function (skills)
            {
                console.log(`${this.name} is also a ${skills}`)
            }
};

var akbar = 
{
    name: "Akbar",
    city: "Mumbai",
    skill: "chef",
    
};

var anthony = 
{
    name: "Anthony",
    city: "Kashmir",
    skill: "Magician",
};


amar.getSkill.call(akbar,"singer")
amar.getSkill.call(akbar,"Magician")
amar.getSkill.call(akbar,"chef")


amar.getSkill.call(amar,"singer")
amar.getSkill.call(amar,"Magician")
amar.getSkill.call(amar,"chef")


amar.getSkill.call(anthony,"singer")
amar.getSkill.call(anthony,"Magician")
amar.getSkill.call(anthony,"chef")


console.log("************************************************")

function Obj (n,p,s)
{
    this.name = n
    this.place = p
    this.skill = s
    
};

var amar = new Obj("Amar","Goa","singer")
// console.log(amar)


var akbar = new Obj("Akbar","Mumbai","chef")
// console.log(akbar)


var anthony = new Obj("Anthony","Kashmir","Magician")
// console.log(anthony)

function skillInterchange (s)
{
    //this.name = n
    this.skill = s
}


skillInterchange.call(amar,"Magician")

skillInterchange.call(akbar,"singer")

skillInterchange.call(anthony,"chef")

console.log(amar)
console.log(akbar)
console.log(anthony)