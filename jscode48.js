var a=[10,20,30,40,50]
var sum=0
var count=0
for(i=0;i<5;i++)
{
    console.log(a[i])
    count=count+1
    sum=sum+a[i]
}
console.log("count is="+count)
console.log("sum is="+sum)
console.log("Average="+(sum/count))