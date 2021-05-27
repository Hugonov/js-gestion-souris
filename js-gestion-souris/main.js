// On utilise le mode strict
"use strict";

let rectangle;
let toggleButton;

// Code appelé lorsque tous les éléments du DOM sont chargés
// => On est sûr que document.querySelector trouvera les éléments
document.addEventListener('DOMContentLoaded', function () {
    // Données
    rectangle = document.querySelector('.rectangle');
    toggleButton = document.querySelector('#toggle-rectangle');
    
    // Mise en place des événements
    toggleButton.addEventListener('click', onToggleRectangle);
    rectangle.addEventListener('mouseover', onOverRectangle);
    rectangle.addEventListener('mouseleave', onLeaveRectangle);
    rectangle.addEventListener('dblclick', onDblClickRectangle);
});

// Fonctions
function onToggleRectangle()
{
    rectangle.classList.toggle('hide');
}

function onOverRectangle()
{
    rectangle.classList.add('important');
}

function onLeaveRectangle()
{
    rectangle.classList.remove('important');
}

function onDblClickRectangle()
{
    rectangle.classList.toggle('good');
}