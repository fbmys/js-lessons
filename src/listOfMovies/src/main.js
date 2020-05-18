let searchPanel = document.createElement('div');
searchPanel.id = 'searchPanel';
document.body.prepend(searchPanel);

let text = document.createElement('input');
text.id = 'searchText';
text.onkeypress = function(event){
    if (event.keyCode == 13 || event.which == 13){
        asyncLoadImg();
    }
};
searchPanel.append(text);

let button = document.createElement('button');
button.onclick = asyncLoadImg;
button.innerHTML = "Постер";
searchPanel.append(button);

function addImage(source){
    let img = document.createElement('img');
    img.src = source;
    movies.append(img);
}

function asyncLoadImg() {
    movies.remove();
    let divMovies = document.createElement('div');
    divMovies.id = 'movies';
    document.body.append(divMovies);
    var promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open("GET", 'http://www.omdbapi.com/?apikey=a6f861a0&s=' + searchText.value);
      xhr.onload = () => resolve(xhr.response);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });

    promise.then((response) => {
        if (response.Response == 'True') {
            response.Search.forEach(
                function(obj) {
                    addImage(obj.Poster);
                }
            );
        }
        else {
            alert(response.Error)
        }
    },
    (error) => {
        alert(error)}
    )

  }