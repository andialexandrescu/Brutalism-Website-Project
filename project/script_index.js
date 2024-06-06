window.onload = function execute_on_page_load() // afisarea unui mesaj random la incarcarea paginii pt user
{
    const arrMessages = [
        "Join our community today where you can chat with other brutalism entusiasts!",
        "Thank you for browsing our platform which is all about exploring brutalism!",
        "Don't forget to check the articles section for extensive research about the movement and it's history.",
        "Contact me via the social media links provided in the About Me section if you think you have any technical improvements of the site.",
        "Dive into the intriguing and often overlooked aspects of this architectural style!",
        "I haven't implemented the articles page of this site yet, but make sure to stay tuned for updates!"
      ];
      function getRandomMessage() {
        const index = Math.floor(Math.random() * arrMessages.length); // functie math
        return arrMessages[index];
      }
      const randomMessage = getRandomMessage();
      alert(randomMessage);
}

function toggle_summary(section) // se da click pt a afisa rezumatul sectiunilor din overview si/ sau arhitectural aspects pt a afisa un block div
{
    var summaryContent = document.getElementById(section + "_summary_content"); // dl#overview_summary_content
    if(!summaryContent)
    {
        summaryContent = document.querySelector('.' + section + '_summary_content'); // div.arhitectural_aspects_summary_content
    }
    if (summaryContent.style.display === "none")
    {
        summaryContent.style.display = "block";
    } else 
    {
        summaryContent.style.display = "none";
    }
}

function randomize_color()
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function change_styles()
{
    const h3Element = document.querySelector('section#home div.text h3');
    h3Element.style.color = randomize_color();
    let intervalID = setInterval(() => {
        h3Element.style.color = randomize_color();
        h3Element.style.transition = 'color 0.5s ease-in-out';
    }, 500); // culoarea se schimba la fiecare 0.5 secunde

    const overviewElement = document.getElementById("overview");
    overviewElement.style.color = "purple"; // schimbare stil overview

    const font = document.getElementsByTagName('h2');
    for(let i = 0; i < font.length; i++) // iterare elemente cu tagul <h2> si schimbarea stilului
    {
        font[i].style.fontStyle = "oblique";
    }
    
    const elements = document.getElementsByClassName("column_content"); // coloanele 
    for (let i = 0; i < elements.length; i++)
    {
        elements[i].style.border = "1px dotted black";
        elements[i].style.paddingRight = "5px";
    }
}

function adjust_footer()
{
    // creare si stergere de elemente
    const h4Element = document.querySelector('footer h4'); // elementul <h4> din <footer>
    h4Element.style.marginRight = ''; // eliminare margine dreapta pt a ajusta la dreapta textul de copyright
    const footerElement = document.querySelector('footer');
    footerElement.style.color = 'purple';

    const newP = document.createElement('p'); // creare paragraf
    newP.style.color = 'purple';
    newP.textContent = 'Project created for the purpose of showcasing basic HTML, CSS and JavaScript';
    newP.style.textAlign = 'right'; // marginea din dreapta nu exista deci va fi aliniat cu h4 din footer
    footerElement.appendChild(newP);
    const computedStyles = window.getComputedStyle(newP); // se va returna un CSSStyleDeclaration in consola
    console.log(computedStyles.color);
    console.log(computedStyles.textAlign);
}

function console_btns()
{
    const buttons = document.getElementsByClassName('button');
    for(let button of buttons) // parcurg butoanele din pagina
    { 
        button.addEventListener('click', (event) => {
            console.log(`Event currentTarget: ${event.currentTarget}`);

            event.target.classList.add('clicked'); // devine un buton pe care s-a dat click deci se modifica event target-ul
            const buttonText = event.target.textContent;
            console.log(`Button text: ${buttonText}`); // se afiseaza continutul unui buton
        });
    }
}

function console_simple_fct() // va afisa un array de numere random, care vor fi sortate inainte de a fi convertite in string-uri si afisate in consola impreuna cu o data curenta si cand se inchide site-ul (scenariu fictiv)
{
    var numbers = [];
    for (let i = 0; i < 50; i++)
    {
        numbers.push(Math.floor(Math.random() * 100));
    }
    numbers.sort((a, b) => a - b);

    const numbersString = numbers.join(', ');
    const sysdate = new Date(); // baze de date
    const dateString = sysdate.toLocaleString();

    // Print the results
    console.log(`Random numbers: ${numbersString}`);
    console.log(`Current date: ${dateString}`);
    sysdate.setMonth(sysdate.getMonth() + 3); // getteri si setteri
    console.log(`The site will be closing down in exactly 3 months from now on: ${sysdate}`);
}

function keyboard_and_mouse()
{
    document.addEventListener('keyup', function(event) {
        alert('You released a key');
    });
    document.addEventListener('keypress', function(event) {
        alert('You pressed and released a key');
    });
    document.addEventListener('click', function(event) {
        console.log('You clicked an element');
    });

    // mouse over doar pentru elementele figcaption
    const figCaps = document.getElementsByTagName('figcaption');
    for(let f of figCaps)
    {
        f.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = '#9c759c';
        });
    }
}

change_styles();
adjust_footer();
console_btns();
console_simple_fct();
keyboard_and_mouse();