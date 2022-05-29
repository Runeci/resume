import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCertificateComponent } from '../modal-certificate/modal-certificate.component';
import { Education, Language } from '../../shared/models/project-typing';

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

  public educations: Education[] = [
    {
      name: this.translateService.instant('educations.BSMU'),
      years: '2015-2021',
      profession: this.translateService.instant('educations.BSMU-profession'),
    },
    {
      name: this.translateService.instant('educations.RS-JS'),
      years: '2021-2022',
      certificatePath: './assets/images/js.png',
    },
    {
      name: this.translateService.instant('educations.RS-Angular'),
      years: '2022',
      certificatePath: './assets/images/angular.png',
    }
  ]

  public languages: Language[] = [
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

  constructor(private translateService: TranslateService,
              public dialog: MatDialog) {
  }

  public openDialog(imagePath: Education['certificatePath']) {
    if (!imagePath) {
      return
    }
    this.dialog.open(ModalCertificateComponent,  {
      data: { certificatePath: imagePath },
    });
  }
}
