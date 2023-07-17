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

export interface HotelDetailedAdmin {
  _id:       string;
  name:      string;
  updatedBy: UpdatedBy;
  email:     string;
  location:  string;
  address:   string;
  rooms:     Room[];
  enabled:   boolean;
  deleted:   boolean;
}

export interface Room {
  _id:      string;
  location: Location;
  active:   boolean;
  reserved: boolean;
}

export interface Location {
  floor: string;
  room:  string;
  _id:   string;
}

export interface UpdatedBy {
  _id:      string;
  name:     string;
  lastName: string;
  email:    string;
}
