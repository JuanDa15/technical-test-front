export interface HotelAdminList {
  _id: string,
  name: string,
  email: string,
  location: string,
  address: string,
  rooms: string[],
  enabled: boolean,
  availableRooms: number
}