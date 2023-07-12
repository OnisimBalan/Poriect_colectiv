export interface IProfileData {
  userId: string;
  shipmentName: string;
  name: string;
  surName: string;
  adress: string;
  adressExtend: string;
  city: string;
  county: string;
  country: string;
  zipCode: string;
  email: string;
  phoneNumber: string;
}

export default class Profile implements IProfileData {
  userId: string;
  shipmentName: string;
  name: string;
  surName: string;
  adress: string;
  adressExtend: string;
  city: string;
  county: string;
  country: string;
  zipCode: string;
  email: string;
  phoneNumber: string;

  constructor(
    userId: string,
    shipmentName: string,
    name: string,
    surName: string,
    adress: string,
    adressExtend: string,
    city: string,
    county: string,
    country: string,
    zipCode: string,
    email: string,
    phoneNumber: string
  ) {
    this.userId = userId;
    this.shipmentName = shipmentName;
    this.name = name;
    this.surName = surName;
    this.adress = adress;
    this.adressExtend = adressExtend;
    this.city = city;
    this.county = county;
    this.country = country;
    this.zipCode = zipCode;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
