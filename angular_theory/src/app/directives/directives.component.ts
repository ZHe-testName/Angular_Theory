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
};
