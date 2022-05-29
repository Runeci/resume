import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  public contacts = [
    {
      contactName: this.translateService.instant('contacts.phone'),
      link: 'tel:+375(44)-777-11-67',
      contact: '+375(44)-777-11-67',
      icon: 'phone',
    },
    {
      contactName: this.translateService.instant('contacts.email'),
      link: 'mailto:dkastsianok@gmail.com',
      contact: 'dkastsianok@gmail.com',
      icon: 'email',
    },
    {
      contactName: this.translateService.instant('contacts.telegram'),
      link: 'https://telegram.me/runeci',
      contact: '@runeci',
      icon: 'telegram',
    },

  ]

  public educations = [
    {
      name: this.translateService.instant('educations.BSMU'),
      years: '2015-2021',
      profession: this.translateService.instant('educations.BSMU-profession'),
    },
    {
      name: this.translateService.instant('educations.RS-JS'),
      years: '2021-2022',
    },
    {
      name: this.translateService.instant('educations.RS-Angular'),
      years: '2022',
    }
  ]

  public languages = [
    {
      language: this.translateService.instant('languages.russian'),
      level: this.translateService.instant('languages.native'),
      progress: '100%'
    },
    {
      language: this.translateService.instant('languages.english'),
      level: 'B2',
      progress: '70%'
    },

    {
      language: this.translateService.instant('languages.polish'),
      level: 'A1',
      progress: '30%'
    }
  ]

  constructor(private translateService: TranslateService) {
  }
}
