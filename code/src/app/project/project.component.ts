import { Component, Input } from '@angular/core';
import { Project } from '../portfolio.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() item : Project | undefined;
}
