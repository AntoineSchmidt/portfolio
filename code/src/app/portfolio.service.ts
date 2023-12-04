import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface Project {
    image: string;
    link: string;
    title: string;
    description: string;
    tags: string[];
}

@Injectable({providedIn: 'root'})
export class PortfolioService {
    private projects: Project[] = [];

    constructor (private client: HttpClient) {}

    getProjects() {
        if (this.projects.length == 0) {
            this.client.get("assets/projects.json").subscribe((data) => {
                for (var p of <Project[]>data) {
                    // keep initial array
                    this.projects.push(p);
                }
            })
        }

        return this.projects
    }
}