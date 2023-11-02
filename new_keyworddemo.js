class Product {
    name;
    price;
    description;

    constructor(n,p,d){
        this.name=n;
        this.price=p;
        this.description=d;
        // return "10"; // primitive -> no effect
        // return {x:10};
        return this; // if you don't return anything it is equal to saying retun this.  
    }

    display(){
        //
    }
}

const p=new Product("Bag",200,"A cool Bag");
console.log(p);
