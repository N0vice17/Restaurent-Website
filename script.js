const data = {
    para1: "At SpiceCraft Bistro, we understand the importance of savoring delicious meals without the wait,andour dedicated team is committed to bringing the culinary delights of our kitchen directly to yourdoorstep in record time",

    para2: "We take pride in sourcing only the finest, freshest ingredients to craft a menu that tantalizes thetaste buds and leaves a lasting impression. From succulent meats to vibrant vegetables, each dish isa masterpiece of flavor, prepared with precision and passion by our skilled chefs.",

    para3: "In the sprawling culinary landscape of our state, we proudly stand as the crown jewel of gastronomicexcellence. It is with immense pride and gratitude that we announce our restaurant's distinction asthe best-rated culinary haven in the entire state."
}

const card1 = document.getElementById("card1para");
card1.innerText = data.para1;
const card2 = document.getElementById("card2para");
card2.innerText = data.para2;
const card3 = document.getElementById("card3para");
card3.innerText = data.para3;

const contact = document.getElementById('contact');

contact.addEventListener('click', () => {
    const contactform = document.getElementById("contactform");
    contactform.scrollIntoView({ behaviour: "smooth" });
});

const service = document.getElementById("services");

service.addEventListener('click', () => {
    const ourservices = document.getElementById("ourservices");
    ourservices.scrollIntoView({ behaviour: "smooth" });
});
