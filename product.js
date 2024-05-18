var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")
var menuicon = document.getElementById("menuicon")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
var productcontainer = document.getElementById("productcontainer")
var search = document.getElementById("search")

var productList=productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue =  event.target.value.toUpperCase()

    for(count=0;count<productList.length;count=count+1)
        {
            var productname =productList[count].querySelector("h1").textContent
            if(productList[count].textContent.toUpperCase().indexOf(enteredValue)<0)
                {
                    productList[count].style.display="none"
                }
                else{
                    productList[count].style.display="block"
                }
        }
})