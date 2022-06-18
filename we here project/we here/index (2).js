 // container

let posts = document.getElementById("posts");


function newPost(name = "user" , your_content = "" ,  source = "") {

var mode = document.getElementById("mode");

    // Head

let post = document.createElement("div");

let head = document.createElement("div");

head.setAttribute("class" , "head");

let person = document.createElement("div")

let NAME_PERSON = document.createElement("div");

mode.addEventListener("click" , function() {
    post.classList.toggle("semi-dark")
    content.classList.toggle("white")
    BOX_OF_REACT.classList.toggle("semi-dark")
})

NAME_PERSON.classList.add("person-name")

head.appendChild(person)
head.appendChild(NAME_PERSON)

post.appendChild(head)

let NAME = document.createTextNode(name)

NAME_PERSON.appendChild(NAME)

    // Body

let content = document.createElement("div")

content.classList.add("body")

let contentValue = document.createTextNode(your_content);

content.appendChild(contentValue);

post.appendChild(content);

let img = document.createElement("img");

img.setAttribute("class" , "img-post")

img.src =  source;

post.appendChild(img)

post.classList.add("my-post")
person.classList.add("person")

// react 

let BOX_OF_REACT = document.createElement("div");

BOX_OF_REACT.setAttribute("class" , "box-react")

let like = document.createElement("div");

let LikeValue = document.createTextNode("like")

like.appendChild(LikeValue)

let comment = document.createElement("div");

let commentValue = document.createTextNode("comment")

comment.appendChild(commentValue)

let share = document.createElement("div");

let shareValue = document.createTextNode("share")

share.appendChild(shareValue)

like.onclick = function() {
    this.classList.toggle("changeColor")
}

BOX_OF_REACT.appendChild(like)
BOX_OF_REACT.appendChild(comment)
BOX_OF_REACT.appendChild(share)

post.appendChild(BOX_OF_REACT)

posts.appendChild(post)

}

for(let i = 0; i < 5; i++)
{
    newPost("amr el mekkawy" , "i love cats 😍❤" , "elements/images/storys/cat.jpg")
    newPost("maged" , "this my duck ❤🥺" , "elements/images/storys/Patio selfie.jpg")
    newPost("ziad el king" , "this is my daughter ❤😘" , "elements/images/storys/238243131_199507738865452_5840324131090440933_n.jpg")
    newPost("ziad fawzy" , "Done and goodbye ❤😘" , "elements/images/storys/Capture.PNG")
}

let search = document.getElementById("seacrh");

let main = document.getElementById("main");

let body = document.getElementById("body")

let left = document.getElementById("left")

let right = document.getElementById("right")

let boxStory = document.getElementById("boxStory")

mode.onclick =  function() {
    main.classList.toggle("dark");
    document.body.classList.toggle("dark")
    left.classList.toggle("semi-dark")
    right.classList.toggle("semi-dark")
    boxStory.classList.toggle("semi-dark")
    search.classList.toggle("semi-dark")
    search.classList.toggle("white")
}


let navbar = document.getElementById("navbar");

let second =document.getElementById("second");

let nav1 = document.querySelectorAll(".nav-1 ul li")[0];
let nav2 = document.querySelectorAll(".nav-1 ul li")[1];
let nav3 = document.querySelectorAll(".nav-1 ul li")[2];
let nav4 = document.querySelectorAll(".nav-1 ul li")[3];
let nav5 = document.querySelectorAll(".nav-1 ul li")[4];
let nav6 = document.querySelectorAll(".nav-1 ul li")[5];

let fornav = document.getElementById("forNav")

navbar.onclick = function() {
   second.classList.toggle("show")
   nav1.classList.toggle("show")
   nav2.classList.toggle("show")
   nav3.classList.toggle("show")
   nav4.classList.toggle("show")
   nav5.classList.toggle("show")
   nav6.classList.toggle("show")
   fornav.classList.toggle("for-nav-bar")
   fornav.appendChild(second)
}

let btnS = document.getElementById("btnS");

window.onscroll = function() {
    if(scrollY >= 511.20001220703125)
    {
        btnS.style.display = "block"
    }
    else {
        btnS.style.display = "none"
    }
}

btnS.onclick = function() {
    window.scroll({left : 0 , top : 0, behavior : "smooth"})
}

let name_hero = document.getElementById("name_hero");

name_hero.innerHTML = localStorage.fullName