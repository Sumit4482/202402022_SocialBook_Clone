import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-right-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-section.component.html',
  styleUrl: './right-section.component.css'
})
export class RightSectionComponent {
  events: any[] = [
    { day: '29', month: 'October', title: 'IPL Fan Park', location: 'Willson Tech Park', moreInfoLink: '#' },
    { day: '31', month: 'June', title: 'Aspire Classes', location: 'Willson Tech Park', moreInfoLink: '#' }
  ];

  advertisementImageUrl: string = 'https://i.postimg.cc/CLXYx9BL/advertisement.png';

  onlineUsers: any[] = [
    { imageUrl: 'https://i.postimg.cc/XNPtfdVs/member-1.png', name: 'Alison Mina' },
    { imageUrl: 'https://i.postimg.cc/4NhqByys/member-2.png', name: 'Jackson Aston' },
    { imageUrl: 'https://i.postimg.cc/FH5qqvkc/member-3.png', name: 'Samona Rose' },
    { imageUrl: 'https://i.postimg.cc/Sx65bPcP/member-4.png', name: 'Mike Pérez' }
  ];
}
