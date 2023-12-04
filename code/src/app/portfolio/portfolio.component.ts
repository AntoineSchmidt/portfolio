import { Component, OnInit } from '@angular/core';
import { PortfolioService, Project } from '../portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: [PortfolioService]
})
export class PortfolioComponent implements OnInit {
  private projects : Project[] = [];
  public  projects_filtered : Project[] = [];

  public  searchterm : string = '';

  constructor(private service: PortfolioService) {}

  ngOnInit(): void {
    this.projects_filtered = this.projects = this.service.getProjects();
  }

  filter(): void {
    if (this.searchterm) {
      let query : string[] = this.searchterm.toLowerCase().split(' ');

      this.projects_filtered = this.projects.filter(
        project => this.search(query, project)
      )
    } else {
      this.projects_filtered = this.projects;
    }
  }

  private search(query: string[], project: Project): boolean {
    let project_flat : string = project.title + " " + project.description + " " + project.tags.join(" ");
    project_flat = project_flat.toLowerCase();

    for (var element of query) {
      if (project_flat.includes(element)) {
        return true;
      }
    }

    return false;
  }
}
