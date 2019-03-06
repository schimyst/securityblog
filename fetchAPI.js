const API_HACKING = "https://gapi.xyz/api/v2/?q=hacking&token=563129dc328aef4fca16141ccbccbe00"



fetch(API_HACKING)
.then(response => response.json())
.then(data => {

  var firstNewsTitle = document.querySelector(".font-weight-light");
  var firstNewsDesc = document.querySelector(".firstDesc");
  var firstNewsImg = document.querySelector(".img-fluid rounded mb-4 mb-lg-0");
  var firstNewsURL = document.querySelector(".btn btn-primary");
  

  var containerNewsTitle = document.querySelectorAll(".card-text");
  var containerNewsSource = document.querySelectorAll(".card-title");
  var containerNewsDate = document.querySelectorAll("#newsDate");
  var containerNewsURL = document.querySelectorAll(".btn-sm");
  console.log(containerNewsURL);
  

  var firstNews = data.articles[0];
  
  firstNewsTitle.innerHTML = firstNews.title;
  firstNewsDesc.innerHTML = firstNews.desc;
  //firstNewsImg.innerHTML = array.image;
  //firstNewsURL.innerHTML = array.link;
 
 
  for(let i = 0; i < containerNewsTitle.length; i++){
    var containerNews = data.articles[i];
    containerNewsTitle[i].innerHTML = containerNews.title;
  }

  for(let i = 0; i < containerNewsSource.length; i++){
    var containerNews = data.articles[i];
    containerNewsSource[i].innerHTML = containerNews.source;
  }

  for(let i = 0; i < containerNewsDate.length; i++){
    var containerNews = data.articles[i];
    containerNewsDate[i].innerHTML = containerNews.date;
  }

  for(let i = 0; i < containerNewsURL.length; i++){
    var containerNews = data.articles[i];
    var hrefURL = containerNewsURL[i].getAttribute("href");
    containerNewsURL[i].setAttribute("href", containerNews.link)
    //containerNewsURL[i].innerHTML = containerNews.link;
    console.log(hrefURL);
  }  





    
  



 

     
})

 