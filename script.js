const solarhref = document.getElementsByClassName("solar");
const geohref = document.getElementsByClassName("geo");
const biohref = document.getElementsByClassName("bio");
const nuclearhref = document.getElementsByClassName("nuclear");
const windhref = document.getElementsByClassName("wind");
const hydrohref = document.getElementsByClassName("hydro");


// All have the same amount of items
for (let i = 0; i < solarhref.length; i++) {
    solarhref.item(i).addEventListener('click', () => {localStorage.setItem("energyType", "Solar")});
    geohref.item(i).addEventListener('click', () => {localStorage.setItem("energyType", "Geothermal")});
    biohref.item(i).addEventListener('click', () => {localStorage.setItem("energyType", "Biomass")});
    nuclearhref.item(i).addEventListener('click', () => {localStorage.setItem("energyType", "Nuclear")});
    windhref.item(i).addEventListener('click', () => {localStorage.setItem("energyType", "Wind")});
    hydrohref.item(i).addEventListener('click', () => {localStorage.setItem("energyType", "Hydro")});
}

if (window.location.href.includes("energy-template.html")) {
    const energyTypeTag = document.getElementById("energy-type");
    const atHomeTag = document.getElementById("at-home");
    const basicsTag = document.getElementById("basics");
    const taxTag = document.getElementById("tax-rebate");
    const costTag = document.getElementById("costs");

    

    

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

    const solar = new energy("Solar", 
        "<h3>Solar Energy At Home</h3><p>You can use solar power to both provide electricity and heating to your home.</p><img src=\"solar.jpg\" alt=\"Solar Panels\">",
        "<h3>Basic Info</h3><p>Two Types of solar electric systems</p><ul><li>Grid tied: home generates own electricity, but can use the power grid at night if needed</li><li>Off grid: not connected to the grid, is self sufficient, stores electricity in batteries for the night</li></ul>",
        "<h3>Tax Rebates</h3><h4>Oregon Solar + Storage Rebate</h4><ul><li>Is for homeowners that want to install solar electric systems and storage.</li><li>Normal income homeowners can receive up to $5000 for the solar electric system and up to $2500 for the storage systems</li><li>Low income providers cna save up to $30000 for solar, and $15000 for storage.<ul><li>Must be installed by an ODOE approved contractor + both systems must be bought together in order to get the paired storage rebate.</li></ul></li></ul>",
        "<h3>Costs</h3><ul><li>Grid tied system -- approximately $15,000 - $20,000</li><li>Off grid system -- approximately $45,000 - $65,000</li><li>Pay themselves off after approximately 8 years, but can range anywhere from 5 to 15.</li></ul>"
    )

    const geo = new energy("Geothermal",
        "<h3>Geothermal Energy At Home</h3><p>Geothermal energy is normally implamented in houses by using heat pumps for cooling or heating air and providing hot water.</p><img src=\"geothermal.jpg\" alt=\"Geothermal system diagram\" width=\"259\" height=\"194\"><p>Some things to consider if you are looking at using geothermal heat pumps for your home</p><ul><li>The composition of your soil and rock</li><li>The amount and layout of your land</li><li>Ground and surface water avaliability</li></ul>",
        "<h3>Basic Info</h3><p>Instead of producing their own heat, heat pumps move heat and energy that is already there by using the heat that is already in the ground. Geothermal heat pumps can be up to 2-3 times better than air source heat pumps, but do cost more on the flip side. There are 4 main types of geothermal heat pumps, Horizontal, Vertical, Pond/Lake, and Open-loop systems.</p>",
        "<h3>Tax Rebates</h3><p>There is a tax credit of 30% with an annual cap of $1200.</p>",
        "<h3>Costs</h3><p>It costs about $10,000 to $20,000 to buy a geothermal heat pump including installation. They pay themselves off after aproximately 10 years.</p>"
    )

    const bio = new energy("Biomass",
        "",
        "",
        "",
        ""
    )

    const nuclear = new energy("Nuclear",
        "",
        "",
        "",
        ""
    )

    const wind = new energy("Wind",
        "<h3>Wind Energy At Home</h3><p>Using the wind to power your home is a great way to save money in the long run and lower your carbon footprint. Here are a couple of things to consider if you are thinking of implementing it in your home.</p><ul><li>Does your property get a lot of wind.</li><li>Do you have enough space to use them effectively.</li><li>Are tall towers/turbines allowed in your neighborhood.</li><li>Does it work for you economically.</li></ul>",
        "<h3>Basic Info</h3><p>The best way to incorporate wind power into your home is through a Small Wind Energy System. These systems can be integrated with solar and battery storage as a backup energy source and can power an entire house if you have a large enough quantity. Typical residential wind turbines produce about 5 to 30 kilowatts of power on average.</p>",
        "<h3>Tax Rebates and Credit</h3><p>30% of the cost is payed for by the consumer through to January 1st, 2033.</p>",
        "<h3>Costs</h3><p>The cost to perchase and install a small wind energy system can range from $10,000 to $70,000 depending on how many and how high tech the one your are perchasing is.</p>"
    )

    const hydro = new energy("Hydro",
        "<h3>Hydro Power At Home</h3><p>Microhydropower systems can be an extremely simple and efficient form of energy for homeowners, as long as you live close or next to flowing water.</p>",
        "<h3>Basic Info</h3><p>Hydroelectric energy uses the flow and movement of water in order to create electricity. It is one of the oldest and largest renewable sources of energy. Hydroelectric energy provides up to $5.50 per megawatt-hour of electricity, plus $22 per megawatt-hour if labor standards are met. There is also up to 2.75 cents per kilowatt-hour dollars from qualified renewable sources.</p>",
        "<h3>Tax Rebates and Credit</h3><p>Tax rebates</p>",
        "<h3>Costs</h3><p>On average hydroelectric energy is 0.85 cents per kilowatt-hour, which is $850 per megawatt-hour. With the average megawatt-hour usage for a home being 10.8, this means on average hydroelectric power costs $9180 per year. It will pay itself off in about 15 years.</p>"
    )

    const replaceItem = (energyType) => {
        localStorage.setItem("energyType", energyType.type);
        energyTypeTag.innerText = energyType.type;
        atHomeTag.innerHTML = energyType.atHome;
        basicsTag.innerHTML = energyType.basics;
        taxTag.innerHTML = energyType.taxes;
        costTag.innerHTML = energyType.costs;
    }

    const getEnergyObject = (energyType) => {
        switch (energyType) {
            case 'Solar':
                return solar;
            case 'Geothermal':
                return geo;
            case 'Biomass':
                return bio;
            case 'Nuclear':
                return nuclear;
            case 'Wind':
                return wind;
            case 'Hydro':
                return hydro;
            default:
                return null;
        }
    }
    const energyTypeOnLoad = localStorage.getItem("energyType");

    if (energyTypeOnLoad !== null) {
        const energyObject = getEnergyObject(energyTypeOnLoad);

        replaceItem(energyObject);
    }

    // All have the same amount of items
    for (let i = 0; i < solarhref.length; i++) {
        solarhref.item(i).addEventListener('click', (event) => {event.preventDefault(); replaceItem(solar)});
        geohref.item(i).addEventListener('click', (event) => {event.preventDefault(); replaceItem(geo)});
        biohref.item(i).addEventListener('click', (event) => {event.preventDefault(); replaceItem(bio)});
        nuclearhref.item(i).addEventListener('click', (event) => {event.preventDefault(); replaceItem(nuclear)});
        windhref.item(i).addEventListener('click', (event) => {event.preventDefault(); replaceItem(wind)});
        hydrohref.item(i).addEventListener('click', (event) => {event.preventDefault(); replaceItem(hydro)});
    }
}






// const mobileDisplay = () => {
//     const links = document.getElementById("mobile-links");
//     if (links.style.display === "block") {
//         links.style.display = "none";
//     } else {
//         links.style.display = "block";
//     }
// }

const initP = document.getElementById("initiative");

const rollInitiative = () => {
    initP.innerText = (Math.random() * (20 - 1) + 1 | 0);
}

const initApp = () => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
    
    
    // const hamburgerBtn = document.getElementById('hamburger-button');
    // const mobileMenu = document.getElementById('mobile-menu');

    // const toggleMenu = () => {
    //     mobileMenu.classList.toggle('hidden');
    //     mobileMenu.classList.toggle('flex');
    //     hamburgerBtn.classList.toggle('toggle-btn')
    // }

    // hamburgerBtn.addEventListener('click', toggleMenu);
    // mobileMenu.addEventListener('click', toggleMenu);
}



document.addEventListener('DOMContentLoaded', initApp)


window.BeforeUnloadEvent = () => {
    localStorage.clear();
}