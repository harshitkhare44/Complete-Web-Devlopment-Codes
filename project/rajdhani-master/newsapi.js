//   7d75f456b83c4c52ac289caf91c99b65   (api key)
console.log("This is my first news website");

// Initialising the constant
let apiKey = '7d75f456b83c4c52ac289caf91c99b65';
let source = 'bbc-news';

// newsaccordion
let newsAccordian = document.getElementById('newsaccordion');

const xhr = new XMLHttpRequest();

// Get the data from the server
xhr.open('GET' , `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}` ,true);

//What to do when response is ready
xhr.onload = function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element,index) {
            let news = ` <div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                             <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                             ${element["title"]}
                             </button>
                            </h2>
                          <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsaccordion">
                          <div class="accordion-body">
                          ${element["content"]} . <a href = "${element['url']}" target = "_blank">Read More</a>
                          </div>
                          </div>
                        </div>`
            newsHtml += news;
        });
        newsAccordian.innerHTML = newsHtml; 
    }
    else{
        console.log('Some error occured');
    }
}

// Sending the data
xhr.send();

