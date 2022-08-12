// 1: Inheritance 

// family model


class Grandfather {
    constructor (s, h, ht){
        this.surname = s;
        this.height = h ;
        this.homeTown = ht;
    }
}

let m1 = new Grandfather("Patil","short","kalyan")
console.log(m1)


class Father extends Grandfather{
    constructor(n1,h1,ht1){
           super(n1,h1,ht1);
           this.current_place = "Navi Mumbai"
    }
}


let father = new Father("Patil","short","kalyan")
console.log(father)

class Son extends Father{
    constructor(n2,h2,ht2,v)
    {
        super(n2,h2,ht2)
        this.current_place = v
    }
}

let son = new Son("Patil","short","kalyan", "Karve Nagar")
console.log(son)


//cat family 

class Cat {
    constructor (s, f)
    {
        this.sharpTeeth = s;
        this.legs = 4 
        this.pattern_on_body = f
    }
}

let cat = new Cat("yes","yes") 
console.log(cat)

class Tiger extends Cat {
    constructor (s1,f1,v)
    {
        super(s1,f1)
        this.found_At = v
    }
}

let tiger = new Tiger("yes","yes","Kanha National Park")
console.log(tiger) 

class Royal_Bengal_Tiger extends Cat {
    constructor (s1,f1,v)
    {
        super(s1,f1)
        this.found_At = v
    }
}

let Royal_Bengal_tiger = new Royal_Bengal_Tiger("yes","yes","Sundarban Delta")
console.log(Royal_Bengal_tiger) 


//2. Incapsulasion online payment portal

class User {
    constructor()
    {
        var user_name;
        var user_email;
    }

    getUser_name()
    {
        return this.user_name
    }

    setUser_name(n)
    {
        this.user_name = n;
    }

    getUser_email()
    {
        return this.user_email
    }

    setUser_email(e)
    {
        this.user_email = e;
    }
}

let user = new User ()
user.setUser_name("Sachin")
console.log(user.getUser_name())

let email = new User ()
user.setUser_email("Sachin@rocketmail.com")
console.log(user.getUser_email())








// // 3. Abstraction 

class Mahindra_THAR {
    constructor (t, d)
    {
        this.type = t;
        this.drive = d; 
        this.Special_features={} 
  }
  AddedFeatures(feature) 
  {
    this.Special_features.differential_locks = true 
    this.Special_features.softTop = feature
  }

    
}

let spec = new Mahindra_THAR ("offroader", "4 wheel drive")

spec.AddedFeatures("Available")

console.log(spec)







// //4. Polymorphism 

class Tele_phones {

    useCase() {
        console.log("Tele_phones: Incomming-outgoing calls facility")
    }
}

class celluar_phones extends Tele_phones{

    useCase() {
        console.log("celluar_phones: Incomming-outgoing calls facility")
    }
}

class Smart_phones extends Tele_phones{

    useCase() {
        console.log("Smart_phones: Incomming-outgoing calls facility")
    }
}

let p1 = new Tele_phones()
let p2 = new celluar_phones()
let p3 = new Smart_phones()

p2.useCase()
