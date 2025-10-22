function asynchronous_operational_method(){
    let first_Promise=new Promise((resolve,reject)=>resolve("Hello"));
    let second_Promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Geeks for Geeks");
        },1000);
    });
    let combined_Promise=Promise.all([first_Promise, second_Promise]);
    return combined_Promise;
}
async function display(){
    let data=await asynchronous_operational_method();
    console.log(data);
}
display();