

fetch('https://whatyearisit-backend-gules.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.year;
    });


// test 2