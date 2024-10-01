console.log("hi!");
console.log(document.getElementById('h').innerHTML);
console.log(document.getElementById('h').getAttributeNode("style"))
console.log(document.getElementById('h').attributes[1].value="color:green;Background-color:aqua");
console.log(document.getElementById('h').setAttribute("title","this is title"));

function abc()
{
    console.log(document.getElementById('main').style.backgroundColor="black");
    console.log(document.getElementById('main').style.Color="white");
    console.log(document.getElementById('main').style.textColor="white");
}

