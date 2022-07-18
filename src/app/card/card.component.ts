import { Component, Input, OnInit } from "@angular/core";
import { Card } from "../app.component";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    interpolation: ['{{', '}}']
})
export class CardComponent implements OnInit {
    
    @Input() card: Card = {title: '', text: ''};
    @Input() index: number = 0;
    
    title: string = 'My Card Title';
    text: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, asperiores.'

    cardDate: Date = new Date

    disabled: boolean = false;
    textColor: string = 'blue';
    
    // number: number = 42;
    // array = [1, 1, 2, 3, 5, 8, 13];

    // imgUrl: string = 'https://cdn.pixabay.com/photo/2016/11/25/07/00/diamond-1857736__340.png'

    // ngOnInit() {
    //     setTimeout(() => {
    //         this.imgUrl = 'https://cdn.pixabay.com/photo/2016/03/03/17/15/fruit-1234657__340.png'
    //         this.disabled = true
    //     }, 3000)
    // }

    ngOnInit() {

    }

    changeTitle() {
        this.card.title = 'Title has been changed!'
    }

    inputHandler(value: any) {
        // const value = event.target.value;
        this.card.title = value;
    }

    changeHandler() {
        console.log(this.card.title)
    }
}