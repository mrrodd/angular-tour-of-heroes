import { Component } from '@angular/core';


// The AppComponent is now attached to a router and displays routed views. 
// For this reason, and to distinguish it from other kinds of components, 
// this component type is called a router component.
@Component({
    selector: "my-app",
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "Tour of Heroes";
}