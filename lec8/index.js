let x=4;
const pr=new Promise((resolve, reject) => {
    if (x==4)
    {
        console.log("if");
        resolve("yes sorted");
    }
    else{
        reject("Not yet");
    }
})

pr.then(data)