import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  constructor(private translateService: TranslateService) {
  }
  public projects = [
    {
      name: 'RS Trello',
      description: this.translateService.instant('self-funded_exp.rs-trello'),
      link: 'https://rstrello.netlify.app/home',
    },
    {
      name: 'Art Quiz',
      description: this.translateService.instant('self-funded_exp.art-quiz'),
      link: 'https://rolling-scopes-school.github.io/runeci-JSFE2021Q3/art-quiz/',
    },
    {
      name: 'RS Lang',
      description: this.translateService.instant('self-funded_exp.rs-lang'),
      link: 'https://rs-lang-22.netlify.app/',
    },
    {
      name: 'Christmas tree',
      description: this.translateService.instant('self-funded_exp.christmas-task'),
      link: 'https://rolling-scopes-school.github.io/runeci-JSFE2021Q3/christmas-task/',

    }
  ];

  public skills = ['JavaScript', 'HTML', 'CSS/SCSS', 'Angular', 'GIT'];
}
