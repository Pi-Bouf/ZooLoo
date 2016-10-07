class Table {

    constructor(name, svg)
    {
        this.name = name;
        this.x = Math.floor((Math.random() * 1000) + 100);
        this.y = Math.floor((Math.random() * 400) + 100);
        this.svg = svg;
        this.group = null;
        this.rect = null;
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
        newGroup.setAttribute("transform", 'translate(' + this.x + ' ' + this.y + ')');
        this.group = newGroup;
        this.svg.appendChild(newGroup);
    }

    makeTable()
    {
        // Création du rectangle
        var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("class", "table_rect");
        rect.setAttribute("rx", 6);
        rect.setAttribute("ry", 6);
        rect.setAttribute("height", 40);
        this.rect = rect;
        this.group.appendChild(rect);

        // Création du nom de table_group
        var textName = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textName.setAttribute("class", "table_name name_" + this.name);
        textName.setAttribute("id", "ZORRO");
        textName.setAttribute("x", 10);
        textName.setAttribute("y", 28);
        textName.textContent = this.name;
        this.group.appendChild(textName);

        this.restructureTable();
    }

    restructureTable()
    {
        // TODO: Déterminé le plus grand texte dans le rectangle afin de le dimensionner
        // INFO: Les marges à gauche sont TOUJOURS de 10px
        var maxWidth = 0;
        var positionInfo;
        // Calcul largeur textName
        var textName = document.getElementsByClassName("name_" + this.name)[0];
        positionInfo = textName.getBoundingClientRect().width;
        maxWidth = 20 + positionInfo;


        // Set the MaxWidth to width's rect attribute
        this.rect.setAttribute("width", maxWidth);
    }

}