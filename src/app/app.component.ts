import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  @ViewChild('profile') profileInfo: ElementRef | undefined
  public title = 'resume';
  public selectedLang = environment.defaultLocale;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.use(this.selectedLang);
  }

  public onChangeLanguage() {
    this.translateService.use(this.selectedLang);
  }
}
