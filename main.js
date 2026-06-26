// Skill text blurbs
const skillDescriptions = {
  html: "The architectural foundation of my web interfaces, learned through Nextech.",
  css: "Utilized to stylise layouts, utilizing modern responsive grids, flexbox configurations, and 3D animations.",
  js: "The engine driving my front-end interactive features, routing asynchronous data layers, and managing web animations.",
  cpp: "Certified Entry-Level Programmer. I lean into this for lower-level concepts, architectural engineering, and system control paradigms.",
};

const skillCards = document.querySelectorAll(".skill-card");
const blurbPanel = document.getElementById("skill-blurb");
const blurbText = document.getElementById("blurb-text");

skillCards.forEach((card) => {
  card.addEventListener("click", () => {
    // Remove the selected highlight from all other cards first
    skillCards.forEach((c) => c.classList.remove("selected-skill"));

    // Add highlight class to the currently clicked card
    card.classList.add("selected-skill");

    // Grabs the key name
    const skillKey = card.getAttribute("data-skill");

    // Fetches the matching text
    const selectedDescription = skillDescriptions[skillKey];

    // Injects the skill description
    blurbText.textContent = selectedDescription;

    // Adds the is-active class to reveal descriptions
    blurbPanel.classList.add("is-active");
  });
});