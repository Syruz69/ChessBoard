var table = document.createElement("table");
table.setAttribute("width", "400");
table.setAttribute("height", "400");

var lastColor;
var selectedCell;

for (var i = 0; i < 8; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < 8; j++) {
        var column = document.createElement("td");

        if ((i + j) % 2 == 0) {
            setColor(column, "black");
            setBorderColor(column, "black");
        } else {
            setColor(column, "white");
            setBorderColor(column, "white");
        }

        column.addEventListener('click', function onClick() {

            removeMark();
            markCell(this);
            selectedCell = this;
            lastColor = this.style.backgroundColor;
            this.id = "changed";
        });

        row.appendChild(column);
    }

    table.appendChild(row);
}

document.body.appendChild(table);

function setBorderColor(cell, color) {
    cell.style.border = ("2px solid " + color);
}

function setColor(cell, color) {
    cell.setAttribute("style", "background-color: " + color);
}

function markCell(cell) {
    setBorderColor(cell, "red");
}

function removeMark() {

    var changed = document.getElementById("changed");
    if (unsignChanged(changed)) {
        setColor(changed, lastColor);
    }
}

function colorCell() {
    if (selectedCell != null) {
        var color = document.getElementById("colorPicker").value;
        setColor(selectedCell, color);
    }

    var changed = document.getElementById("changed");
    unsignChanged(changed);
}

function unsignChanged(changed) {
    if (changed != null) {
        changed.removeAttribute("id");
        return true;
    } else return false;
}

function resetBoard() {

    for (var i = 0; i < table.rows.length; i++) {
        var row = table.rows[i];

        for (var j = 0; j < row.cells.length; j++) {
            var column = row.cells[j];

            if ((i + j) % 2 == 0) {
                setColor(column, "black");
                setBorderColor(column, "black");
            } else {
                setColor(column, "white");
                setBorderColor(column, "white");
            }
        }
    }

    var changed = document.getElementById("changed");
    unsignChanged(changed);
}