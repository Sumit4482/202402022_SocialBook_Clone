import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mid-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mid-section.component.html',
  styleUrl: './mid-section.component.css'
})
export class MidSectionComponent {
  storyImageUrls: string[] = [
    'https://p7.hiclipart.com/preview/496/535/822/5bbef84fead99.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAiIQQWroPeiSyTrPWVWYHGrXXTdkEZ86ShcOgQn_XXNybck9YtbrZ9JcUrFpTOs3kHPk&usqp=CAU',
    'https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14042.jpg?w=740',
    'https://i.postimg.cc/FH5qqvkc/member-3.png',
    'https://i.postimg.cc/Sx65bPcP/member-4.png'
  ];
  storyTexts: string[] = [
    'Post Story',
    'Gwen',
    'Umesh',
    'Akriti',
    'Salman'
  ];
  storyBackgroundImages: string[] = [
    'https://i.postimg.cc/x8GxVJzz/status-3.png',
    'https://i.postimg.cc/W4KfGPVh/status-1.png',
    'https://i.postimg.cc/cCG9zMrW/status-4.png',
    'https://i.postimg.cc/9Fp8x9V3/status-1.png',
    'https://i.postimg.cc/3J7fCBsC/status-2.png',
  ];
  storyGradients: string[] = [
    'linear-gradient(transparent, rgba(0, 0, 0, 0.5))',
    'linear-gradient(transparent, rgba(0, 0, 0, 0.5))',
    'linear-gradient(transparent, rgba(0, 0, 0, 0.5))',
    'linear-gradient(transparent, rgba(0, 0, 0, 0.5))',
    'linear-gradient(transparent, rgba(0, 0, 0, 0.5))'
  ];
  firstName: string = 'Narendra';
  lastName: string = 'Modi';
  profileIconUrl : string = "https://e7.pngegg.com/pngimages/987/0/png-clipart-narendra-modi-narendra-modi-gujarat-prime-minister-of-india-chief-minister-narendra-modi-people-india-thumbnail.png";

  posts: any[] = [
    {
      userProfileImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAiIQQWroPeiSyTrPWVWYHGrXXTdkEZ86ShcOgQn_XXNybck9YtbrZ9JcUrFpTOs3kHPk&usqp=CAU',
      userName: 'Sumit Banwakade',
      postDateTime: 'June 24 2024, 10:40 am',
      postText: 'Just Don\'t Subscribe to Vkive Tutorials Youtube Channel to watch more videos on website development and UI designs. #VkiveTutorials #YoutubeChannel',
      postImageUrl: 'https://i.postimg.cc/9fjhGTY6/feed-image-1.png'
    },
    {
      userProfileImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAiIQQWroPeiSyTrPWVWYHGrXXTdkEZ86ShcOgQn_XXNybck9YtbrZ9JcUrFpTOs3kHPk&usqp=CAU',
      userName: 'Sumit Banwakade',
      postDateTime: 'June 24 2024, 10:40 am',
      postText: 'Just Don\'t Subscribe to Vkive Tutorials Youtube Channel to watch more videos on website development and UI designs. #VkiveTutorials #YoutubeChannel',
      postImageUrl: 'https://i.postimg.cc/9fjhGTY6/feed-image-1.png'
    },
    // Add mor
    // Add more posts as needed
  ];
}
