let collector = document.getElementById('movies');

function displayData(data) {
    for (let i = 0; i < data.results.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        let image = document.createElement('img');
        let text = document.createElement('h6');
        text.innerHTML = data.results[i].title;
        image.src =
            'https://image.tmdb.org/t/p/w500/' + data.results[i].poster_path;
        card.appendChild(image);
        card.appendChild(text);
        collector.appendChild(card);
    }
}
window.addEventListener('load', () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',

        },
    };

    fetch(
            'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
            options
        )
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })

    .catch(err => console.error(err));

    document.getElementById('search-btn').addEventListener('click', () => {
        collector.innerHTML = '';
        let url =
            'https://api.themoviedb.org/3/search/movie?api_key=8f37545c884c451558817e9c14a10825&query=' +
            document.getElementById('input-box').value;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayData(data);
            });
    });

    fetch('https://api.tvmaze.com/shows/1')
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=7d2bb612')
        .then(response => response.json())
        .then(data => {
            let card = document.createElement('div');
            card.classList.add('card');
            let image = document.createElement('img');
            let text = document.createElement('h6');
            text.innerHTML = data.Title;
            image.src = data.Poster;
            card.appendChild(image);
            card.appendChild(text);
            collector.appendChild(card);
        });
});



const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjM3NTQ1Yzg4NGM0NTE1NTg4MTdlOWMxNGExMDgyNSIsInN1YiI6IjY0OWRjNjAxYzA3MmEyMDBhZjg0OTZkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QEDL0fcw6dngz1maWfP-Ujkstg9viFY0BjKm7Qeb2FU'
    }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));