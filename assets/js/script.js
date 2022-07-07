const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7f5c22543emsh3d42f3006d2d358p132e8ejsn42b6e2d36f8c',
        'X-RapidAPI-Host': 'burgers1.p.rapidapi.com'
    }
};

fetch('https://burgers1.p.rapidapi.com/burgers', options)
    .then(response => response.json())
    .then(response => response.forEach(res => {
        // creates variable and looks for element with class name container and puts in into an html collection
        const container = document.getElementsByClassName('container');
        // creates variables and asssigns html element
        const name = document.createElement('h2');
        const restaurant = document.createElement('p');
        const desc = document.createElement('p');
        const web = document.createElement('a');
        //setting innerHTML to correspoinding api response content
        name.innerHTML = res.name;
        restaurant.innerHTML = `from: ${res.restaurant}`;
        desc.innerHTML = res.description;
        web.innerHTML =  res.web;
        web.setAttribute('href',res.web);
        // append the elements inside container
        container[0].appendChild(name);
        container[0].appendChild(restaurant);
        container[0].appendChild(desc);
        container[0].appendChild(web);
    }))
    .catch(err => console.error(err));
