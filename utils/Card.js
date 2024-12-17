export class Card {
    openingTag = "<div class='card'>
    <img class='card-img-top'
    id='${card.id}'
    src='${card.src}'
    alt='${card.title}'/>";
    closingTag = "</div>";
    innerHTML = "";

    constructor(content="") {
        this.innerHTML = content;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }

}
