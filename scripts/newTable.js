class Table {

    constructor(name, svg)
    {
        this.name = name;
        this.x = Math.floor((Math.random() * 1000) + 100);
        this.y = Math.floor((Math.random() * 400) + 100);
        this.svg = svg;
        this.group = null;
        this.selected = false;
        this.displayed = false;

        this.makeGroup();
        this.makeTable();
    }

    makeGroup()
    {
        // Création du groupe
        var newGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        newGroup.setAttribute("id", "group_" + this.name);
        newGroup.setAttribute("class", "table_group");
        this.group = newGroup;
        this.svg.appendChild(newGroup);
    }

    makeTable()
    {
        // Création du rectangle
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("class", "table_rect");
        rect.setAttribute("x", this.x);
        rect.setAttribute("y", this.y);
        rect.setAttribute("rx", 6);
        rect.setAttribute("ry", 6);
        this.group.appendChild(rect);

        // Création du nom de table_group
        var textName = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textName.setAttribute("class", "table_name name_" + this.name);
        textName.setAttribute("transform", 'translate(' + (this.x + 10) + ' ' + (this.y + 28) + ')');
        textName.textContent = this.name;
        this.group.appendChild(textName);

        this.restructureTable();
    }

    restructureTable()
    {
        // TODO: Déterminé le plus grand texte dans le rectangle afin de le dimensionner
    }

}