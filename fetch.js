 async function withIn(){
    const response=await fetch("https://jsonplaceholder.typicode.com/posts/1")
    {if(!response)
        throw("error")
    }
    return response.json()
}
 async function values(){
    try{
        const data = await withIn()
        console.log("success",data)
    }catch(e){console.log("error",e.message)

    }

 } values()
