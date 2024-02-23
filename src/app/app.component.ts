import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { RightSectionComponent } from "./right-section/right-section.component";
import { MidSectionComponent } from "./mid-section/mid-section.component";
import { LeftSectionComponent } from "./left-section/left-section.component";
import { BottomBarComponent } from "./bottom-bar/bottom-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TopBarComponent, RightSectionComponent, MidSectionComponent, LeftSectionComponent, BottomBarComponent]
})
export class AppComponent {
  title = 'social-book';
}
