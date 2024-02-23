import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-left-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-section.component.html',
  styleUrl: './left-section.component.css',
})
export class LeftSectionComponent {
  imageUrls: string[] = [
    'https://i.postimg.cc/RCj4MjnC/news.png',
    'https://i.postimg.cc/MpBwMtV0/friends.png',
    'https://i.postimg.cc/44FRWj1b/group.png',
    'https://i.postimg.cc/0jh39RtT/marketplace.png',
    'https://i.postimg.cc/VsXHCTVk/watch.png',
  ];
  texts: string[] = [' News', ' Friends', 'Groups ', 'Marketplace ', ' Reels'];
  shortcutImageUrls: string[] = [
    'https://i.postimg.cc/3JHVf7vG/shortcut-1.png',
    'https://i.postimg.cc/rFCbvb1P/shortcut-2.png',
    'https://i.postimg.cc/0yk3xfZ2/shortcut-3.png',
    'https://i.postimg.cc/Z5wQqdDP/shortcut-4.png',
  ];
  shortcutTexts: string[] = [
    'Area 51: Overview',
    'One Piece : Discussion',
    'Stack Full Development',
    'We are all Failures',
  ];
}
