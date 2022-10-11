"strict mode";


//Function for playing audio
function play1() {
    let audio1 = document.getElementById("audio1");
    audio1.pause();
    audio1.currentTime = 0;
    audio1.play(); 
}


document.addEventListener("keydown", function (e) {
    console.log(e);
    
    let twoButtonKeys = e.key + e.location;//for keys that are more than one on the keyboard.
    const input = e.key.toLowerCase();//For converting all keys into lowercase
    const arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    play1();
    if (e.key === "`") {
        document.getElementById("backtick").style.backgroundColor = "green";
    } else if (e.key === "1") {
        document.getElementById("one").style.backgroundColor = "green";
    } else if (e.key === "2") {
        document.getElementById("two").style.backgroundColor = "green";
    } else if (e.key === "3") {
        document.getElementById("three").style.backgroundColor = "green";
    } else if (e.key === "4") {
        document.getElementById("four").style.backgroundColor = "green";
    } else if (e.key === "5") {
        document.getElementById("five").style.backgroundColor = "green";
    } else if (e.key === "6") {
        document.getElementById("six").style.backgroundColor = "green";
    } else if (e.key === "7") {
        document.getElementById("seven").style.backgroundColor = "green";
    } else if (e.key === "8") {
        document.getElementById("eight").style.backgroundColor = "green";
    } else if (e.key === "9") {
        document.getElementById("nine").style.backgroundColor = "green";
    } else if (e.key === "0") {
        document.getElementById("zero").style.backgroundColor = "green";
    } else if (e.key === "-") {
        document.getElementById("minus").style.backgroundColor = "green";
    } else if (e.key === "=") {
        document.getElementById("equal").style.backgroundColor = "green";
    } else if (e.key === "[") {
        document.getElementById("squareOpen").style.backgroundColor = "green";
    } else if (e.key === "]") {
        document.getElementById("squareClose").style.backgroundColor = "green";
    } else if (e.key === "\\") {
        document.getElementById("backSlash").style.backgroundColor = "green";
    } else if (e.key === ";") {
        document.getElementById("colun").style.backgroundColor = "green";
    } else if (e.key === "'") {
        document.getElementById("quotation").style.backgroundColor = "green";
    } else if (e.key === ".") {
        document.getElementById("greaterThan").style.backgroundColor = "green";
    } else if (e.key === ",") {
        document.getElementById("lessThan").style.backgroundColor = "green";
    } else if (e.key === "/") {
        document.getElementById("questionMark").style.backgroundColor = "green";
    } else if (e.code === "Space") {
        document.getElementById("Space").style.backgroundColor = "green";
    } else if (twoButtonKeys === "Shift1") {
        document.getElementById("Shift1").style.backgroundColor = "green";
    } else if (twoButtonKeys === "Shift2") {
        document.getElementById("Shift2").style.backgroundColor = "green";
    } else if (twoButtonKeys === "Alt1") {
        document.getElementById("Alt1").style.backgroundColor = "green";
    }else if (twoButtonKeys === "Alt2") {
        document.getElementById("Alt2").style.backgroundColor = "green";
    } else if (twoButtonKeys === "Control1") {
        document.getElementById("Ctrl1").style.backgroundColor = "green";
    }else if (twoButtonKeys === "Control2") {
        document.getElementById("Ctrl2").style.backgroundColor = "green";
    }else if (e.code === "Meta"){
        document.getElementById("OS").style.backgroundColor = "green";
    } else if (e.key === "CapsLock"){


        if (e.getModifierState("CapsLock")) {//checks if capslock is on or not
            document.getElementById("CapsLock").style.backgroundColor = "green";
        } 
        else {
            document.getElementById("CapsLock").style.backgroundColor = "white";
        }

    }  
    else if (arr.includes(e.key)) {
        document.querySelector(`#${input}`).style.backgroundColor = "green";
    }
    else {
        document.querySelector(`#${e.key}`).style.backgroundColor = "green";
    }

})

document.addEventListener("keyup", function (e) {

    let twoButtonKeys = e.key + e.location;
    const input = e.key.toLowerCase();
    const arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


    if (e.key === "`") {
        document.getElementById("backtick").style.backgroundColor = "white";
    } else if (e.key === "1") {
        document.getElementById("one").style.backgroundColor = "white";
    } else if (e.key === "2") {
        document.getElementById("two").style.backgroundColor = "white";
    } else if (e.key === "3") {
        document.getElementById("three").style.backgroundColor = "white";
    } else if (e.key === "4") {
        document.getElementById("four").style.backgroundColor = "white";
    } else if (e.key === "5") {
        document.getElementById("five").style.backgroundColor = "white";
    } else if (e.key === "6") {
        document.getElementById("six").style.backgroundColor = "white";
    } else if (e.key === "7") {
        document.getElementById("seven").style.backgroundColor = "white";
    } else if (e.key === "8") {
        document.getElementById("eight").style.backgroundColor = "white";
    } else if (e.key === "9") {
        document.getElementById("nine").style.backgroundColor = "white";
    } else if (e.key === "0") {
        document.getElementById("zero").style.backgroundColor = "white";
    } else if (e.key === "-") {
        document.getElementById("minus").style.backgroundColor = "white";
    } else if (e.key === "=") {
        document.getElementById("equal").style.backgroundColor = "white";
    } else if (e.key === "[") {
        document.getElementById("squareOpen").style.backgroundColor = "white";
    } else if (e.key === "]") {
        document.getElementById("squareClose").style.backgroundColor = "white";
    } else if (e.key === "\\") {
        document.getElementById("backSlash").style.backgroundColor = "white";
    } else if (e.key === ";") {
        document.getElementById("colun").style.backgroundColor = "white";
    } else if (e.key === "'") {
        document.getElementById("quotation").style.backgroundColor = "white";
    } else if (e.key === ".") {
        document.getElementById("greaterThan").style.backgroundColor = "white";
    } else if (e.key === ",") {
        document.getElementById("lessThan").style.backgroundColor = "white";
    } else if (e.key === "/") {
        document.getElementById("questionMark").style.backgroundColor = "white";
    } else if (e.code === "Space") {
        document.getElementById("Space").style.backgroundColor = "white";
    } else if (twoButtonKeys === "Shift1") {
        document.getElementById("Shift1").style.backgroundColor = "white";
    } else if (twoButtonKeys === "Shift2") {
        document.getElementById("Shift2").style.backgroundColor = "white";
    }else if (twoButtonKeys === "Alt1") {
        document.getElementById("Alt1").style.backgroundColor = "white";
    }else if (twoButtonKeys === "Alt2") {
        document.getElementById("Alt2").style.backgroundColor = "white";
    }else if (twoButtonKeys === "Control1") {
        document.getElementById("Ctrl1").style.backgroundColor = "white";
    }else if (twoButtonKeys === "Control2") {
        document.getElementById("Ctrl2").style.backgroundColor = "white";
    } else if (e.code === "Meta"){
        document.getElementById("OS").style.backgroundColor = "white";
    } else if (arr.includes(e.key)) {
        document.querySelector(`#${input}`).style.backgroundColor = "white";
    } else if (e.key === "CapsLock"){
        console.log("Do nothing");
    }
    else {
        document.querySelector(`#${e.key}`).style.backgroundColor = "white";
    }
})