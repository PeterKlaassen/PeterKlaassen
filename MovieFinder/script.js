
var li = document.createElement("li");
const getUl = document.getElementById("allMovies");

function addMoviesToDom(movies) {
  movies.map(function (url, index, originalArray) {
    var img = document.createElement("img");
    var li = document.createElement("li");
    var newLink = document.createElement("a");
    img.src = url.poster;
    getUl.appendChild(li);
    li.appendChild(newLink);
    newLink.append(img);
    newLink.setAttribute("href", "https://www.imdb.com/title/" + url.imdbID);
    newLink.setAttribute("target", "_blank");
  });
};
addMoviesToDom(movies);

function filterMovies(wordInMovie) {
  let moviesByTitle = movies.filter(function (movie) {
    return movie.title.includes(wordInMovie);
  });
  return moviesByTitle;
};
console.log(filterMovies('Days'));

var radios = document.querySelectorAll('input[type=radio][name="movies"]');
console.log(radios);

function handleOnChangeEvent() {
  document.body.addEventListener('change', function (e) {
    var target = e.target.value;
    switch (target) {
      case 'Latest':
        getUl.innerHTML = '';
        addMoviesToDom(filterLatestMovies());
        break;
      case 'Avenger':
        getUl.innerHTML = '';
        addMoviesToDom(filterMovies('Avenger'));
        break;
      case 'X-Men':
        getUl.innerHTML = '';
        addMoviesToDom(filterMovies('X-Men'));
        break;
      case 'Princess':
        getUl.innerHTML = '';
        addMoviesToDom(filterMovies('Princess'));
        break;
      case 'Batman':
        getUl.innerHTML = '';
        addMoviesToDom(filterMovies('Batman'));
        break;
      default:
        console.log(e.target.value);
    };
    //console.log(e.target.value);
  });
};
handleOnChangeEvent();

function filterLatestMovies() {
  var moviesByYearFilter = movies.filter(function (movie) {
    return movie.year > 2013;
  });
  return moviesByYearFilter;
};
filterLatestMovies();

function renderList(movies) {
  clearList();
  for (var movie of movies) {
    var img = document.createElement('img');
    var item = document.createElement("li");
    var newLink = document.createElement("a");
    img.src = movie.poster;
    getUl.appendChild(item);
    item.appendChild(newLink);
    newLink.append(img);
    newLink.setAttribute("href", "https://www.imdb.com/title/" + movie.imdbID);
    newLink.setAttribute("target", "_blank");
  }
  if (movies.length === 0) {
    noResults();
  }
  else
    filterMovies('');
};

function clearList() {
  while (getUl.firstChild) {
    getUl.removeChild(getUl.firstChild);
  }
};

function noResults(item) {
  var item = document.createElement('li');
  var text = document.createTextNode('No results found. Sorry!');
  item.appendChild(text);
  getUl.appendChild(item);
};

function getRelevancy(value, searchTerm) {
  if (value === searchTerm) {
    return 2;
  } else if (value.startsWith(searchTerm)) {
    return 1;
  } else if (value.includes(searchTerm)) {
    return 0;
  }
};

const searchInput = document.getElementById('searchbar');
console.log(searchInput);

searchInput.addEventListener('input', (e) => {
  let value = e.target.value;
  if (value && value.trim().length > 0) {
    //value = value.trim().toLowerCase();
    renderList(movies.filter(movies => {
      return movies.title.includes(value);
    }).sort((movieA, movieB) => {
      return getRelevancy(movieB.title, value) - getRelevancy(movieA.title, value)
    }));
  } else {
    clearList();
  }
});

searchInput.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    return movies.title.includes(value);
  }
});
