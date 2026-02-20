
/* isHalwathere = true 
 function waitInQueue(){
    return new Promise((resolve,reject)=>{
            if(isHalwathere)
                resolve('buy 1/2 kg Halwa')
            else
            reject('Halwa Finish')
            }) }
function buyHalva(){
    waitInQueue()
    .then((message)=>console.log(message))
    .catch((error)=>console.log(error))
    }
buyHalva() */

async function waitIn() {
  return fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
    .then(response => {
      if (!response) {
        throw ("Failed to fetch data")
      }
      return response.json()})
}
function values() {
  waitIn()
    .then(data =>console.log("Success",data))
    .catch(error => console.log("Error",error.message))
}
values()


 


