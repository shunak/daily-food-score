"use strict";
class Food {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        // console.log(this);
        this.element.classList.toggle('food--active');
        const score = Score.getInstance();
        score.render();
    }
}
