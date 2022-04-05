import { Component } from "@angular/core";
//в ангуляр все сущности являются классами
//они различаются при помощи разных декораторов
@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: [
        './post.component.scss',
    ],
})

export class PostComponent {};