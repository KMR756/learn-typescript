const student = {
    name:"rahat",
    age:27,
    isMarrid:true
}

function printUser(user:{name:string,age:number}):void{
    console.log(`name: ${user.name} , age: ${user.age}`);
    
}

// printUser(student)


// type alias

type User= {
    name:string;
    age:number;
    isMarrid:boolean;
}

const user = (user:User):void=>{
    console.log(`name: ${user.name} age:${user.age} , ${user.isMarrid?"Marrid":"Unmarrid"}`);
    
}

user(student)
user({name:"rahat",age:23,isMarrid:false})

type Product = {
    id:number;
    name:string;
    price:number;
    stock:boolean;
    description?:string;
}

const item1:Product = {
    id:1,
    name:"product 1",
    price:100,
    stock:true,
    description:"this is item 1"
}

const item2:Product={
    id:2,
    name:"product 2",
    price:200,
    stock:false,

}
const displayProduct = (product:Product):void=>{
    console.log(`product id: ${product.id} name: ${product.name} price: ${product.price} strck:${product.stock?"avaiable":"out of stock"} description: ${product.description?product.description:"N/A"}`);
    
}

displayProduct(item1)
displayProduct(item2)