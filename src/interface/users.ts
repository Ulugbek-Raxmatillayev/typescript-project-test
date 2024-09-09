interface userGeoType {
    "lat": string
    "lng": string
}
interface userAddressType {
    "street": string
    "suite": string
    "city": string
    "zipcode": string
    "geo": userGeoType
}
interface userCompType {
    "name": string
    "catchPhrase": string
    "bs": string

}
export interface userTypes {
    "id": number
    "name": string
    "username": string
    "email": string
    "address": userAddressType
    "phone": string
    "website": string
    "company": userCompType
}