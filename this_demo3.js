let iphone = {
    name:"Iphone 13",
    price:100000,
    description:"The new apple iphone 13 pro",
    rating:4.8,


    display : function () {

        let redIphone = {
            name:"RedIphone 13",
            price:100000,
            description:"The new apple iphone 13 pro",
            rating:4.8,
            print : () => {
                console.log(this);
            }
        }
        redIphone.print();
    }
}
iphone.display();