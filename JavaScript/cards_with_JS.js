var planets = [
    {
        "image" : "./earth.png",
        "name" : "Earth"
    },
    {
        "image" : "./Mars.png",
        "name" : "Mars"
    },
    {
        "image" : "./mercury.png",
        "name" : "Mercury"
    },
    {
        "image" : "./venus.png",
        "name" : "Venus"
    },
    {
        "image" : "./earth.png",
        "name" : "Earth"
    },
    {
        "image" : "./Mars.png",
        "name" : "Mars"
    },
    {
        "image" : "./mercury.png",
        "name" : "Mercury"
    },
    {
        "image" : "./venus.png",
        "name" : "Venus"
    },
    {
        "image" : "./earth.png",
        "name" : "Earth"
    },
    {
        "image" : "./Mars.png",
        "name" : "Mars"
    }
]


planets.map((ele) => {
    var Card = `<div class="card">
                <div class="img-section">
                    <img src= ${ele.image} alt="check" />
                </div>
                <div class="name">Name : ${ele.name}</div>
            </div>`

        console.log(Card)

        let planet_view = document.getElementsByClassName("card-parent")[0];
        planet_view.innerHTML += Card;
})





