interface Scoreable {
    readonly totalScore: number;
    render(): void;
}
interface Foodable {
    element: HTMLDivElement;
    clickEventHandler(): void;
}

interface Foodsable {
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementsScore: number[]
}

class Score implements Scoreable{
    private static instance: Score;
    get totalScore(){
        const foods = Foods.getInstance();
        return foods.activeElementsScore.reduce((total, score) => total + score, 0);
    }
    render(){
        document.querySelector('.score__number')!.textContent = String(this.totalScore);
    }
    private constructor(){}
    static getInstance(){
        if(!Score.instance){
            Score.instance = new Score();
        }
        return Score.instance;
    }
}
class Food implements Foodable {
    constructor(public element: HTMLDivElement){
        element.addEventListener('click',this.clickEventHandler.bind(this));
    }
    clickEventHandler(){
    // console.log(this);
        this.element.classList.toggle('food--active');
        const score = Score.getInstance();
        score.render();
    }
}
class Foods implements Foodsable {
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

const foods = Foods.getInstance();
