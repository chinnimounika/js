/*object oriented programming using js*/
class Bird
{
    fly(){
        console.log("They fly to fulfil natural activities")
    }
    buildnest(){console.log("They buildnest")
    }
}
parrot=new Bird()
parrot.age=5
parrot.wings=2
parrot.weight=3.4
parrot.color="GREEN"
console.log("Age of parrot=",parrot.age)
console.log("Wings of parrot=",parrot.wings)
console.log("Weight of parrot=",parrot.weight)
console.log("Color of parrot=",parrot.color)
parrot.fly()
parrot.buildnest()
console.log("-------------------------")
pigeon=new Bird()
pigeon.age=7
pigeon.wings=2
pigeon.weight=4.7
pigeon.color="GREY"
console.log("Age of pigeon=",pigeon.age)
console.log("Wings of pigeon=",pigeon.wings)
console.log("Weight of pigeon=",pigeon.weight)
console.log("Color of pigeon=",pigeon.color)
pigeon.fly()
pigeon.buildnest()
