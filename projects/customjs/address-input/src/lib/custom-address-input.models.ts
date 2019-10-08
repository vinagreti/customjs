export interface CustomAddress {
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  publicPlace: string;
  number: string;
  complement: string;
  postalCode: string;
}

export interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  unidade: string;
  ibge: string;
  gia: string;
}
