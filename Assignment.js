document.getElementById("red").onclick = (event) =>{

    let temp = document.getElementById("para");
    if(temp.style.color !== "red")
    {
        temp.style.color = "red";
    }
    else
    {
        temp.style.color = "black";
    }

}
document.getElementById("green").onclick = (event) =>{

    let temp = document.getElementById("para");
    if(temp.style.color !== "green")
    {
        temp.style.color = "green";
    }
    else
    {
        temp.style.color = "black";
    }

}
document.getElementById("blue").onclick = (event) =>{

    let temp = document.getElementById("para");
    if(temp.style.color !== "blue")
    {
        temp.style.color = "blue";
    }
    else
    {
        temp.style.color = "black";
    }

}
//------------------------------------------------------------------------------------------------------------------------
document.getElementById("f10px").onclick = (event) =>{

    let temp = document.getElementById("para");
    if(temp.style.fontSize !== "10px")
    {
        temp.style.fontSize = "10px";
    }
    else
    {
        temp.style.fontSize = "16px";
    }
    
}

document.getElementById("f20px").onclick = (event) =>{

    let temp = document.getElementById("para");
    if(temp.style.fontSize !== "20px")
    {
        temp.style.fontSize = "20px";
    }
    else
    {
        temp.style.fontSize = "16px";
    }
    
}

document.getElementById("f30px").onclick = (event) =>{

    let temp = document.getElementById("para");
    if(temp.style.fontSize !== "30px")
    {
        temp.style.fontSize = "30px";
    }
    else
    {
        temp.style.fontSize = "16px";
    }
    
}

//---------------------------------------------------------------------------------------------------------------------------[]

document.getElementById("sans").onclick = (event) =>{

    let temp = document.getElementById("para");
    if(temp.style.fontFamily !== "sans-serif")
    {
        temp.style.fontFamily = "sans-serif";
    }
    else
    {
        temp.style.fontFamily = "Times New Roman";
    }

}

document.getElementById("mono").onclick = (event) =>{

    let temp = document.getElementById("para");
    if(temp.style.fontFamily !== "monospace")
    {
        temp.style.fontFamily = "monospace";
    }
    else
    {
        temp.style.fontFamily = "Times New Roman";
    }

}

document.getElementById("cur").onclick = (event) =>{

    let temp = document.getElementById("para");
    if(temp.style.fontFamily !== "cursive")
    {
        temp.style.fontFamily = "cursive";
    }
    else
    {
        temp.style.fontFamily = "Times New Roman";
    }

}

document.getElementById("res").onclick = (event) => {

    let temp = document.getElementById("para");

    temp.style.color = "black";
    temp.style.fontSize = "16px";
    temp.style.fontFamily = "Times New Roman";

}