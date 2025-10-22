/*object oriented programming using js*/
class Bird
{
    fly=()=>{
        console.log("They fly to fulfil natural activities")
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