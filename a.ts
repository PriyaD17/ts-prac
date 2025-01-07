function nestedfunc(fn: ()=> void) {
    setTimeout(fn,1000);
};

nestedfunc(()=>{
 console.log("hi there");
})