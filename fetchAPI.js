const API_HACKING = "https://gapi.xyz/api/v2/?q=hacking&token=563129dc328aef4fca16141ccbccbe00"



fetch(API_HACKING)
.then(response => response.json())
.then(data => {

  var firstNewsTitle = document.querySelector(".font-weight-light");
  var firstNewsDesc = document.querySelector(".firstDesc");
  var firstNewsImg = document.querySelector(".img-fluid");
  var firstNewsURL = document.querySelector(".btn-primary");
  console.log(firstNewsImg);
  

  var containerNewsTitle = document.querySelectorAll(".card-text");
  var containerNewsSource = document.querySelectorAll(".card-title");
  var containerNewsDate = document.querySelectorAll("#newsDate");
  var containerNewsURL = document.querySelectorAll(".btn-sm");
  

  var firstNews = data.articles[0];
  
  firstNewsTitle.innerHTML = firstNews.title;
  firstNewsDesc.innerHTML = firstNews.desc;
  firstNewsImg.setAttribute("src", firstNews.image);
  firstNewsURL.setAttribute("href", firstNews.link); 
 

  var emptyImg = "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2018/whathollywoo.jpg";
  if(firstNews.image == ""){
    firstNewsImg.setAttribute("src", emptyImg);
  }
 
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
    containerNewsURL[i].setAttribute("href", containerNews.link)
  }  





    
  



 

     
})

 