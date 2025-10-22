/*single inheritance*/
class A {
    funca(){
        console.log("Function of class A")
    }
}
class B extends A {
    funcb() {
        console.log("Function of class B")
    }
}
objB=new B()
objB.funca()
objB.funcb()