function getUserDetails(id)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            resolve({userroll:"678"});
        },2000);
    })
};
const myfunc=async()=>{
   console.log("123");
   const result = await getUserDetails("123");
   console.log(result);
   console.log("123");
   console.log("456");
};
myfunc()