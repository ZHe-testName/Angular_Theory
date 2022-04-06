import { Component } from '@angular/core';
//директивы это воспомагательные атрибуты тегов которые помагают
//управлять повелением и видом html элементов

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent {
  toggleColor: boolean = false;

  toggle:  boolean = false;

  fib: number[] = [
    1, 1, 2, 3, 5, 8,
  ];

  postsArr = [
    {title: 'Post 1', author: 'Zheka', coments: [
      {name: 'Bodik', text: 'Lorem 1'},
      {name: 'Bodik', text: 'Lorem 2'},
      {name: 'Bodik', text: 'Lorem 3'},
    ],},

    {title: 'Post 2', author: 'Zheka', coments: [
      {name: 'Bodik 2', text: 'Lorem 1'},
      {name: 'Bodik 2', text: 'Lorem 2'},
      {name: 'Bodik 2', text: 'Lorem 3'},
    ],},
  ];
};
