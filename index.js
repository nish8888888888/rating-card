

for(var i=0;i<4;i++)
{   
    document.querySelectorAll("button")[i].addEventListener("click", function () {
      sessionStorage.setItem("key", this.innerHTML);
      
      
});
}

$(".submit").click(function(){
   window.location.href = "rating.html";
})

