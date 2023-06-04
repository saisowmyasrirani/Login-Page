function vis()
{
    document.getElementById("a").removeAttribute("type")
    document.getElementById("b").setAttribute("src","monkey.png")
}
function hid()
{
    document.getElementById("b").setAttribute("src","Monkey 2.jpg")
    document.getElementById("a").setAttribute("type","password")
}
function auth()
{
    var password="123"
    var email="rama@gmail.com"
    var userpass=document.getElementById("a").value
    var useremail=document.getElementById("email").value
    if(useremail==email && userpass==password)
    {
        document.getElementById("good").setAttribute("action","index.html")
        document.getElementById("login").setAttribute("type","submit")
        document.getElementById("result").innerHTML="  "
    }
    else if(useremail!=email && userpass==password)
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("cont").style.borderColor="blue"
        document.getElementById("result").innerHTML="Entered the Wrong Email"
        document.getElementById("BG").style.backgroundImage="linear-gradient(95deg,skyblue,rgb(152,33,195)"    
    }
        else if(useremail==email && userpass!=password)
    {
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("email").style.borderColor="blue"
        document.getElementById("result").innerHTML="Entered the Wrong Password"
        document.getElementById("BG").style.backgroundImage="linear-gradient(95deg,rgb(152,33,195),skyblue"
    }
    else
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("result").innerHTML="Entered the wrong Email & Password"
        document.getElementById("BG").style.backgroundImage="linear-gradient(95deg,red,red)"
    }
}
    