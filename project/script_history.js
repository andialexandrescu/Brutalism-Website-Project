// idee preluata www.theartstory.org/artist/le-corbusier/
// generare timeline content
const timeline_artworks_Le_Corbusier = [
    {title: "Nature morte a la pile d'assiettes [Still Life with a Stack of Plates]", date: "1920"},
    {title: "Pavillon de L'Esprit Nouveau, Paris", date: "1925"},
    {title: "LC4 - Chaise longue", date: "1928"},
    {title: "Villa Savoye", date: "1929"},
    {title: "Unite d'Habitation", date: "1945"},
    {title: "Chapelle Notre-Dame-du-Haut", date: "1950"},
    {title: "Chandigarh, India", date: "1951"}
];
const timeline_artworks_Marcel_Breuer = [
    {title: "Club chair (model B3)", date: "1927"},
    {title: "Cesca Chair", date: "1928"},
    {title: "John Hagerty House (aka the Josephine Hagerty House)", date: "1938"},
    {title: "Alan I W Frank House", date: "1940"},
    {title: "The Whitney Museum of American Art", date: "1966"},
    {title: "St. Francis de Sales Catholic Church", date: "1967"},
    {title: "UNESCO Headquarters, Main Building", date: "1952"}
];
const timeline_artworks_Paul_Rudolph = [
    {title: "Healy Guest House (as partner with Ralph Twitchell)", date: "1950"},
    {title: "Riverview High School", date: "1957"},
    {title: "Yale Art & Architecture Building", date: "1958"},
    {title: "Milam Residence", date: "1961"},
    {title: "Endo Pharmaceuticals Building", date: "1962"},
    {title: "Tracey Towers", date: "1972"},
    {title: "City Center Towers Complex", date: "1980"}
];
const timeline_artworks_Erno_Goldfinger = [
    {title: "1, 2 & 3 Willow Road, Hampstead, London", date: "1939"},
    {title: "Metro Central Heights (Alexander Fleming House)", date: "1959"},
    {title: "Balfron Tower", date: "1963"},
    {title: "Carradale House", date: "1967"},
    {title: "Trellick Tower:", date: "1968"}
];

function create_timeline(id, timelineArtworks)
{
    const timelineContainer = document.querySelector(`#${id} .timeline`); // e de tip class
  
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