const coll = document.querySelector(".collapsible");
if (coll) {
    coll.addEventListener("click", function () {
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });

    const img = document.querySelector(".imageSwap")

    img.addEventListener("mouseover", function () {
        this.src = "images/enjoy.jpg";
    });

    img.addEventListener("mouseout", function () {
        this.src = "images/welcome.jpg";
    })
}

const cardsEl = document.querySelector("#cards");
if (cardsEl) {

    const makeSelect = document.getElementById("makeSelect");

    const cities = [
        {
            name: "London",
            country: "UK",
            continent: "Europe",
            population: 9.1,
            area: 1572,
            yearFounded: 43,
            image: "images/london.webp"
        },
        {
            name: "New York",
            country: "USA",
            continent: "North America",
            population: 8.8,
            area: 778,
            yearFounded: 1624,
            image: "images/newyork.webp"
        },
        {
            name: "Tokyo",
            country: "Japan",
            continent: "Asia",
            population: 14.0,
            area: 2194,
            yearFounded: 1603,
            image: "images/tokyo.webp"
        },
        {
            name: "Paris",
            country: "France",
            continent: "Europe",
            population: 2.16,
            area: 105,
            yearFounded: 52,
            image: "images/paris.jpg"
        },
        {
            name: "Dubai",
            country: "UAE",
            continent: "Asia",
            population: 3.6,
            area: 4114,
            yearFounded: 1833,
            image: "images/dubai.webp"
        },
        {
            name: "Los Angeles",
            country: "USA",
            continent: "North America",
            population: 3.9,
            area: 1302,
            yearFounded: 1781,
            image: "images/losangeles.jpeg"
        },
        {
            name: "Sydney",
            country: "Australia",
            continent: "Oceania",
            population: 5.3,
            area: 12368,
            yearFounded: 1788,
            image: "images/sydney.jpg"
        },
        {
            name: "Toronto",
            country: "Canada",
            continent: "North America",
            population: 2.8,
            area: 630,
            yearFounded: 1793,
            image: "images/toronto.jpg"
        },
        {
            name: "Rio de Janeiro",
            country: "Brazil",
            continent: "South America",
            population: 6.7,
            area: 1221,
            yearFounded: 1565,
            image: "images/rio.avif"
        },
        {
            name: "Lagos",
            country: "Nigeria",
            continent: "Africa",
            population: 16.54,
            area: 1171,
            yearFounded: 1400,
            image: "images/lagos.avif"
        },
    ];


    function renderCards(list) {
        const source = document.getElementById("search").innerHTML;
        const template = Handlebars.compile(source);
        const html = template({ cities: list });
        document.getElementById("cards").innerHTML = html;
    }

    renderCards(cities);


    //Search
    document.querySelector("form").addEventListener("input", function (e) {
        e.preventDefault();
        const input = document.getElementById("name").value.trim().toLowerCase();
        const filtered = cities.filter(city =>
            city.name.toLowerCase().startsWith(input)
        );
        renderCards(filtered);
    });

    //Select
    makeSelect.addEventListener('change', () => {
        const continent = makeSelect.value;
        document.getElementById("cards").innerHTML;

        if (continent === "") {
            renderCards(cities);
        }
        else {
            const filtered = cities.filter(city =>
                city.continent === continent
            );
            renderCards(filtered)
        }
    });

    //Sort

    let sortAscending = true;

    document.querySelector('.sortPop').addEventListener("click", function () {
        sortAscending = !sortAscending;

        const sorted = [...cities].sort((a, b) =>
            sortAscending ? a.population - b.population : b.population - a.population
        );
        renderCards(sorted);
    });

    //Clear
    document.querySelector('.clearFilters').addEventListener("click", function () {
        document.querySelector("#name").value = "";
        document.querySelector("#makeSelect").value = "";
        sortAscending = true;
        renderCards(cities);
    });

    //Delete Button

    document.querySelector('#cards').addEventListener("click", function (evt) {
        if (evt.target.matches(".delete")) {
            const cityName = evt.target.dataset.name;
            const card = evt.target.closest(".card");
            card.classList.add("deleting");

            setTimeout(() => {
                const index = cities.findIndex(city => city.name === cityName);
                if (index !== -1) {
                    cities.splice(index, 1);
                    renderCards(cities);
                }
            }, 800);
        }
    });

    //Add Record

    const form = document.querySelector("dialog form")


    const addRecord = (evt) => {
        evt.preventDefault();

        const name = form.elements.cityName.value;
        const country = form.elements.country.value;
        const continent = form.elements.continent.value;
        const population = parseFloat(form.elements.population.value);
        const area = parseInt(form.elements.area.value);
        const yearFounded = parseInt(form.elements.yearFounded.value);
        const image = form.elements.img.value;

        if (isNaN(yearFounded) || yearFounded < 0) {
            alert("There is an error with the year value")
            return;
        }

        if (isNaN(population) || population < 0) {
            alert("There is an error with the population value")
            return;
        }

        if (isNaN(area) || area < 0) {
            alert("There is an error with the area value")
            return;
        }

        const newCity = { name, country, continent, population, area, yearFounded, image };
        cities.push(newCity);
        renderCards(cities);
        form.reset();

    };

    form.addEventListener("submit", addRecord);

    document.querySelector("#addRecordBtn").addEventListener("click", () => document.querySelector('dialog').showModal());

    document.querySelector("#close").addEventListener("click", () => {
        document.querySelector("dialog").close();
    });

    //Information

    const avgPop = cities.reduce((total, city) => total + city.population, 0) / cities.length;
    document.querySelector("#averagePopulation").innerHTML = `The Average Population of the Cities is: <b> ${avgPop.toFixed(2)}m </b>`;

    const cityByAge = [...cities].sort((a, b) => a.yearFounded - b.yearFounded);
    document.querySelector("#oldestCity").innerHTML = `The Oldest City is: <b> ${cityByAge[0].name}</b> founded in <b> ${cityByAge[0].yearFounded}AD </b>`;

    const cityByArea = [...cities].sort((a, b) => b.area - a.area);
    document.querySelector("#largestCity").innerHTML = `The Largest City by Area is: <b> ${cityByArea[0].name}</b> at <b> ${cityByArea[0].area}km² </b>`;
}


const commentsEl = document.querySelector(".comments");
if (commentsEl) {

    const comments = [
        { name: "Jake", message: "Really enjoyable!!" },
        { name: "Claire", message: "I didn't know that London was that old." },
        { name: "Kyle", message: "Tough to read." }
    ];

    function renderComments() {
        const tbody = document.getElementById("commentBody");
        tbody.innerHTML = "";
        comments.forEach(comment => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${comment.name}</td><td>${comment.message}</td>`;
            tbody.appendChild(row);
        });
    }

    renderComments();

    document.getElementById("addCommentBtn").addEventListener("click", () => {
        document.querySelector("dialog").showModal();
    });

    document.getElementById("close").addEventListener("click", () => {
        document.querySelector("dialog").close();
    });

    const commentForm = document.querySelector("dialog form");

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = commentForm.elements.commentName.value;
        const message = commentForm.elements.message.value;

        comments.push({ name, message });
        renderComments();

        commentForm.reset();
        document.querySelector("dialog").close();
    });
}