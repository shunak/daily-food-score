import { Foodsable } from "./interfaces";
import { Food } from "./food";

export class Foods implements Foodsable {
    private static instance: Foods; //static is Class using without  create instance
    elements = document.querySelectorAll<HTMLDivElement>('.food');
    private _activeElements: HTMLDivElement[] = [];
    private _activeElementsScore: number[] = [];
    get activeElements(){
        this._activeElements = [];
        this.elements.forEach(element => {
            if(element.classList.contains('food--active')){
                this._activeElements.push(element);
            }
        })
        console.log(this._activeElements)
        return this._activeElements;
    }
    get activeElementsScore(){
        this._activeElementsScore = [];
        this.activeElements.forEach(element => {
            const foodScore = element.querySelector('.food__score');
            if(foodScore){
                this._activeElementsScore.push(Number(foodScore.textContent));
            } 
        })
        return this._activeElementsScore;
    }
    constructor(){
        this.elements.forEach(element => {
            new Food(element);
        })
    }
    static getInstance(){
        if(!Foods.instance){
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }
}