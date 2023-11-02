let iphone = {
    name:"Iphone 13",
    price:100000,
    description:"The new apple iphone 13 pro",
    rating:4.8,


    display(){
        console.log("first display",this);
    }
}

let macbook = {
    name:"Macbook M2",
    price:125000,
    description:"The new apple macbook m2",
    rating:4.9,


    display(){
        console.log("second display",this);
    }
}

iphone.display();
console.log(this);