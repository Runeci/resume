import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-certificate',
  templateUrl: './modal-certificate.component.html',
  styleUrls: ['./modal-certificate.component.scss']
})
export class ModalCertificateComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {certificatePath: string}) { }
}
