import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  imageUrls: string[] = [
    'https://i.postimg.cc/Fs3m1Djy/notification.png',
    'https://i.postimg.cc/YqGKZ8nc/inbox.png',
    'https://i.postimg.cc/xCzpgFjg/video.png',
    'https://i.postimg.cc/xCzpgFjg/video.png',
    'https://i.postimg.cc/xCzpgFjg/video.png',
    'https://i.postimg.cc/xCzpgFjg/video.png',
  ];

  profileIconUrl : string = "https://e7.pngegg.com/pngimages/987/0/png-clipart-narendra-modi-narendra-modi-gujarat-prime-minister-of-india-chief-minister-narendra-modi-people-india-thumbnail.png";

  isSettingsMenuOpen: boolean = false;

  settingsMenuToggle(): void {
    this.isSettingsMenuOpen = !this.isSettingsMenuOpen;
  }


}
