// afisarea unui mesaj random la incarcarea paginii pt user
window.onload = function execute_on_page_load()
{
    const arrMessages = [
        "Join our community today where you can chat with other brutalism entusiasts!",
        "Thank you for browsing our platform which is all about exploring brutalism!",
        "Don't forget to check the articles section for extensive reserach about the movement and it's history.",
        "Contact me via the social media links provided in the About Me section if you think you have any technical improvements of the site.",
        "Dive into the intriguing and often overlooked aspects of this architectural style!"
      ];
      function getRandomMessage() {
        const index = Math.floor(Math.random() * messages.length);
        return arrMessages[index];
      }
      const randomMessage = getRandomMessage();
      alert(randomMessage);
}

/* index.html */
function toggle_summary(section) 
{
    var summaryContent = document.getElementById(section + "_summary_content");
    if(!summaryContent)
    {
        summaryContent = document.querySelector('.' + section + '_summary_content');
    }
    if (summaryContent.style.display === "none")
    {
        summaryContent.style.display = "block";
    } else 
    {
        summaryContent.style.display = "none";
    }
}

/* history.html */
// idee preluata www.theartstory.org/artist/le-corbusier/
const timeline_artworks_Le_Corbusier = [
    {"title": "Nature morte a la pile d'assiettes [Still Life with a Stack of Plates]", "date": "1920"},
    {"title": "Pavillon de L'Esprit Nouveau, Paris", "date": "1925"},
    {"title": "LC4 - Chaise longue", "date": "1928"},
    {"title": "Villa Savoye", "date": "1929"},
    {"title": "Unite d'Habitation", "date": "1945"},
    {"title": "Chapelle Notre-Dame-du-Haut", "date": "1950"},
    {"title": "Chandigarh, India", "date": "1951"}
];
const timeline_artworks_Marcel_Breuer = [
    {"title": "Club chair (model B3)", "date": "1927"},
    {"title": "Cesca Chair", "date": "1928"},
    {"title": "John Hagerty House (aka the Josephine Hagerty House)", "date": "1938"},
    {"title": "Alan I W Frank House", "date": "1940"},
    {"title": "The Whitney Museum of American Art", "date": "1966"},
    {"title": "St. Francis de Sales Catholic Church", "date": "1967"},
    {"title": "UNESCO Headquarters, Main Building", "date": "1952"}
];
const timeline_artworks_Paul_Rudolph = [
    {"title": "Healy Guest House (as partner with Ralph Twitchell)", "date": "1950"},
    {"title": "Riverview High School", "date": "1957"},
    {"title": "Yale Art & Architecture Building", "date": "1958"},
    {"title": "Milam Residence", "date": "1961"},
    {"title": "Endo Pharmaceuticals Building", "date": "1962"},
    {"title": "Tracey Towers", "date": "1972"},
    {"title": "City Center Towers Complex", "date": "1980"}
];
const timeline_artworks_Erno_Goldfinger = [
    {"title": "1, 2 & 3 Willow Road, Hampstead, London", "date": "1939"},
    {"title": "Metro Central Heights (Alexander Fleming House)", "date": "1959"},
    {"title": "Balfron Tower", "date": "1963"},
    {"title": "Carradale House", "date": "1967"},
    {"title": "Trellick Tower:", "date": "1968"}
];

function create_timeline(id, timelineArtworks)
{
    const timelineContainer = document.querySelector(`#${id} .timeline`);
  
    timelineArtworks.forEach((artwork) => {
      const timelineItem = document.createElement("li");
      timelineItem.innerHTML = `<h5>${artwork.date}</h5><p>${artwork.title}</p>`; /* atentie la backticks `````` */
      timelineContainer.appendChild(timelineItem);
    });
}

create_timeline("le-corbusier", timeline_artworks_Le_Corbusier);
create_timeline("marcel-breuer", timeline_artworks_Marcel_Breuer);
create_timeline("paul-rudolph", timeline_artworks_Paul_Rudolph);
create_timeline("erno-goldfinger", timeline_artworks_Erno_Goldfinger);

/* about_me.html */
function display_date_time()
{
    document.getElementById("date_text").innerHTML = new Date();
}