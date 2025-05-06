const fs = require('fs');

// reading files
fs.readFile('./docs/blogs.txt', (error, data) => {
        if(error){
            console.log(error);
        }else{
            console.log(data.toString());
        }
});
// writing files
fs.writeFile('./docs/blogs2.txt', 'Hello <worldfgsss>', (error) => {
        if(error){
            console.log(error);
        }else{
            console.log("File written");
        }
})

// check existance
if(!fs.existsSync("./assets")){
// directories
fs.mkdir('./assets', (error) => {
    if(error){
        console.log(error);
    }else{
        console.log("Directory created");
    }
});
}else{
    fs.rmdir("./assets", (error) => {
        if(error){
            console.log(error);
        }
        else{
            console.log("Folder already exists so, i deleted it Master!");
        }
    });
}

// deleting files
if(fs.existsSync("./docs/blogs2.txt")){
    fs.unlink("./docs/blogs2.txt", (error) => {
        if(error){
            console.log(error);
        }
        else{
            console.log("File deleted");
        }
    });
}