$(document).ready(function () {

    var tabTable = new Array();

    // Save element in vars and get W/H
    var svg = document.getElementById("Shema");
    var Menu = document.getElementById("Circle_Menu");
    var CLeft = document.getElementById("Circle_Left");
    var CRight = document.getElementById("Circle_Right");
    var CR_1 = document.getElementById("Cross_Red_1");
    var CR_2 = document.getElementById("Cross_Red_2");
    var positonMenu = Menu.getBoundingClientRect();

    // Set position of element MENU
    TweenMax.set(Menu, {
        x: (($(svg).width() - positonMenu.width) / 2),
        y: -20
    });
    // Animate menu when page is loaded
    var tl = new TimelineMax();
    tl.to(Menu, 0.3, {
        delay: 1,
        alpha: 1,
        y: 20
    });

    var person = prompt("Nom de la table:");
    var newTable = new Table(person, svg);
    tabTable.push(newTable);
});