class Product {
    #name; // private
    #price;
    description;

    constructor(n,p,d){
        this.#name = n;
        this.#price=p;
        this.description=d;
        // return "10"; // primitive -> no effect
        // return {x:10};
        return this; // if you don't return anything it is equal to saying retun this.  
    }

    set name(n){
        if(typeof n !== "string"){
            console.log("invalid name");
            return;
        }
        this.#name=n;
    }
    setPrice(p){
        if(p<0){
            return ;
        }
        this.#price=p;
    }
    get name(){
        return this.#name;
    }

    display(){
        //
        console.log(this.#name)
    }
}

const p=new Product("Bag",200,"A cool Bag");
p.name = "dsjkfjsdfjdf";
console.log(p.name);
p.display();

