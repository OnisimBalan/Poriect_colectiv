export default interface ProfileData {
  shipmentId: number;
  shipmentName: string;
  name: string;
  surname: string;
  city: string;
  county: string;
  country: string;
  zip: string;
  email: string;
  phone: string;
}

class Profile implements ProfileData {
  shipmentId: number;
  shipmentName: string;
  name: string;
  surname: string;
  city: string;
  county: string;
  country: string;
  zip: string;
  email: string;
  phone: string;

  constructor(
    shipmentId: number,
    shipmentName: string,
    name: string,
    surname: string,
    city: string,
    county: string,
    country: string,
    zip: string,
    email: string,
    phone: string
  ) {
    this.shipmentId = shipmentId;
    this.shipmentName = shipmentName;
    this.name = name;
    this.surname = surname;
    this.city = city;
    this.county = county;
    this.country = country;
    this.zip = zip;
    this.email = email;
    this.phone = phone;
  }
}
