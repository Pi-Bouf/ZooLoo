$(document).ready(function() {

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

    // Animate for left circle (Add/Delete)
    var tlOver = new TimelineMax();
    tlOver.to(CLeft, 0.3, {
        rotation: 45,
        transformOrigin: "50% 50%",
    })
        .to([CR_1, CR_2], 0.3, {
        stroke: '#E22D50'
    }, '-=0.3')
        .pause();

    $(document).on('click', '.table_group', function() {
        if (checkSelected()) {
            tlOver.play();
        } else {
            tlOver.reverse();
        }
    });

    $(CLeft).click(function() {
        if (checkSelected()) {
            for (var i = 0; i < tabTable.length; i++) {
                if (tabTable[i].getState() == "true") {
                    tabTable[i].destroyTable();
                    tabTable.splice(i, 1);
                }
            }
            tlOver.reverse();
        } else {
            var person = prompt("Nom de la table:");
            var x = Math.floor((Math.random() * 1000) + 100);
            var y = Math.floor((Math.random() * 400) + 100);
            var newTable = new Table(person, x, y, svg);
            newTable.makeTable();
            tabTable.push(newTable);
        }
    });

    function checkSelected() {
        for (var i = 0; i < tabTable.length; i++) {
            if (tabTable[i].getState() == "true") {
                console.log(i);
                return true;
            }
        }
        return false;
    }
});