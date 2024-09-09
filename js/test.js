let regex = /(?<=\/)([^\/]+)(?=\.html)/g;

let string = "file:///D:/ProjectsVSCode/bncd_main/html/mainPage.html#"

let result = regex.exec(string)

if(result) {
    console.log(result[0])
}
else {
    console.log("nope")
}

