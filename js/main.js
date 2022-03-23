function getData() {
    let name = document.querySelector("#name").value;
    let status = document.querySelector("#status").value;
    console.log(name, status)
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`)
    .then(response => response.json())
    .then(randmdata => {
        console.log(randmdata)
        for(let i = 0; i < 7; i++) {
            // Name Data
            let name = randmdata['results'][i]['name'];
            document.querySelector(`#name-${i}`).innerHTML=name;
            // Gender Data
            let gender = randmdata['results'][i]['gender'];
            document.querySelector(`#gender-${i}`).innerHTML=gender;
            // Species Data 
            let species = randmdata['results'][i]['species'];
            document.querySelector(`#species-${i}`).innerHTML=species;
            // Origin Data  
            let origin = randmdata['results'][i]['origin']['name'];
            document.querySelector(`#origin-${i}`).innerHTML=origin;
            // Image Data
            let image = randmdata['results'][i]['image'];
            document.querySelector(`#image-${i}`).innerHTML= `<img src="${image}">`;
        }
    })
}

