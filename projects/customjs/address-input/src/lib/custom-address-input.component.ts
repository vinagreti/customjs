import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { I18nService } from '@customjs/i18n';
import { CustomAddressInputTranslationKeysMap } from './custom-address-input.internal.i18n';
import { CustomAddress } from './custom-address-input.models';
import { CustomAddressInputService } from './custom-address-input.service';

@Component({
  selector: 'custom-address-input',
  templateUrl: './custom-address-input.component.html',
  styleUrls: ['./custom-address-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomAddressInputComponent {
  @ViewChild(NgForm, { static: true }) customAddressForm: NgForm;

  @Input() addressData: CustomAddress = {
    country: '',
    state: '',
    city: '',
    neighborhood: '',
    publicPlace: '',
    number: '',
    complement: '',
    postalCode: '',
  };

  constructor(
    private service: CustomAddressInputService,
    private cd: ChangeDetectorRef,
    public i18n: I18nService<CustomAddressInputTranslationKeysMap>,
  ) {}

  loadpostalCodeData(postalCode: string) {
    this.service.getpostalCodeData(postalCode).subscribe(res => {
      this.addressData.state = res.uf;
      this.addressData.city = res.localidade;
      this.addressData.neighborhood = res.bairro;
      this.addressData.publicPlace = res.logradouro;
      this.cd.markForCheck();
    });
  }

  get valid() {
    return !this.customAddressForm.invalid;
  }
}
