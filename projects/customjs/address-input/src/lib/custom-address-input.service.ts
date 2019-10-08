import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ViaCepResponse } from './custom-address-input.models';

@Injectable()
export class CustomAddressInputService {
  constructor(private genericHttp: HttpClient) {}

  getpostalCodeData(postalCode: string) {
    const enpoint = `https://viacep.com.br/ws/${postalCode}/json/`;
    return this.genericHttp.get<ViaCepResponse>(enpoint);
  }
}
