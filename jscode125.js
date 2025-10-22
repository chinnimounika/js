/*hierarchical inheritance*/
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
class C extends A {
    funcc() {
        console.log("Function of class C")
    }
}
class D extends A {
    funcd() {
        console.log("Function of class D")
    }
}
objB=new B()
objB.funca()
objB.funcb()
console.log("-------------------")
objC=new C()
objC.funca()
objC.funcc()
console.log("-------------------")
objD=new D()
objD.funca()
objD.funcd()
