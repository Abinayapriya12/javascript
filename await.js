 let success = true
function myPromise(){ 
    return new Promise((resolve, reject) => {
    setTimeout(()=>
  {if (success) {resolve("Task completed ")} 
    else {reject("Task failed")}},1000)
})
}
 async function task(){
  try{
   let result= await myPromise()
    console.log(result)
  }
  catch(error){
    console.log(error)

  }

}
task()  

  

 


