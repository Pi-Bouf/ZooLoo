function Table(name, x, y, svg) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.svg = svg;
    this.selected = 0;
    var tabField = new Array();
    this.tabField = tabField;

    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("id", "table_" + this.name);
    group.setAttribute("class", "table_group");
    group.setAttribute("stateSelected", "false");
    this.group = group;
    this.svg.appendChild(group);

    TweenMax.set(this.group, {
        alpha: 0,
        y: -20
    });

    this.makeTable = function() {
        // Draw rect
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("class", "table");
        rect.setAttribute("x", this.x);
        rect.setAttribute("y", this.y);
        rect.setAttribute("rx", 6);
        rect.setAttribute("ry", 6);
        this.group.appendChild(rect);

        // Draw text (table name)
        var name = document.createElementNS("http://www.w3.org/2000/svg", "text");
        name.setAttribute("class", "table_name name_" + this.name);
        name.setAttribute("transform", 'translate(' + (this.x + 10) + ' ' + (this.y + 28) + ')');
        name.textContent = this.name;
        this.group.appendChild(name);

        setTimeout(function() {
            // Change size of rect for the title
            var positionInfo = name.getBoundingClientRect();
            rect.setAttribute("width", positionInfo.width + 20);
            rect.setAttribute("height", positionInfo.height - 4);
        }, 300);

        // Display group with animation
        var tl = new TimelineMax();
        tl.to(this.group, 0.7, {
            delay: 0.3,
            y: 20,
            alpha: 1
        });


        // Make group draggable
        Draggable.create(this.group, {
            type: "x,y",
            edgeResistance: 0.5,
            throwProps: true,
            bounds: window
        });

        var tlOver = new TimelineMax();        
        tlOver.to(rect, 0.3, {
            stroke: '#E31E66'
        }).pause();


        $(this.group).click(function() {
            if (group.getAttribute("stateSelected") == "true") {
                group.setAttribute("stateSelected", "false");
                tlOver.reverse();
            } else {
                group.setAttribute("stateSelected", "true");
                tlOver.play();
            }
        });
    };

    this.addField = function()
    {
        var fieldName = prompt("Quel est le nom du champ ?");
        tabField.push(fieldName);
        console.log("ok");
        var newField = document.createElementNS("http://www.w3.org/2000/svg", "text");
        newField.setAttribute("class", "table_field field_" + this.fieldName);
        newField.setAttribute("transform", 'translate(' + (this.x + 60) + ' ' + (this.y + 60) + ')');
        newField.textContent = fieldName;
        this.group.appendChild(newField);
        console.log("ok");
    };
    
    this.destroyTable = function()
    {
        $("#table_" + this.name).remove();
    };
    
    this.getState = function()
    {
        return group.getAttribute("stateSelected");
    };
}