
const energyTypeTag = document.getElementById("energy-type");
const atHomeTag = document.getElementById("at-home");
const basicsTag = document.getElementById("basics");
const taxTag = document.getElementById("tax-rebate");
const costTag = document.getElementById("costs");

const solarhref = document.getElementsByClassName("solar");
const geohref = document.getElementsByClassName("geo");
const biohref = document.getElementsByClassName("bio");
const nuclearhref = document.getElementsByClassName("nuclear");
const windhref = document.getElementsByClassName("wind");
const hydrohref = document.getElementsByClassName("hydro");

// Also an option instead of the const solar I currently have
class energy {
    constructor(type, atHome, basics, taxes, costs) {
        this.type = type;
        this.atHome = atHome;
        this.basics = basics;
        this.taxes = taxes;
        this.costs = costs;
    }
}

const solar = {
    type: "Solar",
    atHome: "<p>You can use solar power to both provide electricity and heating to your home.</p>",
    basics: "<p>Two Types of solar electric systems</p><ul><li>Grid tied - home generates own electricity, but can use the power grid at night if needed</li><li>Off grid - not connected to the grid, is self sufficient, stores electricity in batteries for the night</li></ul>",
    taxes: "",
    costs: ""
}

const 



const replaceItem = (energyType) => {
    console.log("sssssss");
    energyTypeTag.innerText = energyType.type;
    atHomeTag.innerHTML = energyType.atHome;
    basicsTag.innerHTML = energyType.basics;
    taxTag.innerHTML = energyType.taxes;
    costTag.innerHTML = energyType.costs;
}

const initApp = () => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp)

// All have the same amount of items
for (let i = 0; i < solarhref.length; i++) {
    solarhref.item(i).addEventListener('click', replaceItem(solar));
    geohref.item(i).addEventListener('click', replaceItem(geo));
    biohref.item(i).addEventListener('click', replaceItem(bio));
    nuclearhref.item(i).addEventListener('click', replaceItem(nuclear));
    windhref.item(i).addEventListener('click', replaceItem(wind));
    hydrohref.item(i).addEventListener('click', replaceItem(hydro));
}

