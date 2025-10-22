/*function with and without return type*/
class Icecream {
    melt=()=> {
        console.log("It melts at room temperature")
    }
    billamt=(Price,quantity)=> 
        {
        Price=Price
        quantity=quantity
        return Price*quantity
    }
}
vanilla=new Icecream()
vanilla.melt()
console.log("Bill Amount=",vanilla.billamt(20,10))