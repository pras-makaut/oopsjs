function Product(n,p){
    this.name=n;
    this.price=p;

}

const iphone = new Product("iphone 14",100000);

Product.prototype.display = function () {
    console.log("details of the product are",this);
}

iphone.toString();