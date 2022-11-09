

function reverse(str: String): String{
    if(str ==="")
        return "";
    else
        return reverse(str.substring(1))+str.charAt(0);

}

console.log(reverse("Hello"));