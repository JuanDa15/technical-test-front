export interface ReservationDetailed {
  _id:              string;
  hotel:            HotelReservation;
  room:             RoomReservation;
  startDate:        Date;
  endDate:          Date;
  travelers:        TravelerReservation[];
  emergencyContact: EmergencyContact;
}

export interface EmergencyContact {
  name:  string;
  phone: string;
  _id:   string;
}

export interface HotelReservation {
  _id:      string;
  name:     string;
  email:    string;
  location: string;
  address:  string;
}

export interface RoomReservation {
  _id:      string;
  location: Location;
  baseCost: string;
  taxes:    string;
  type:     string;
}

export interface Location {
  floor: string;
  room:  string;
  _id:   string;
}

export interface TravelerReservation {
  _id:          string;
  name:         string;
  lastName:     string;
  email:        string;
  documentType: string;
  document:     string;
  phone:        string;
}


export interface ReservationList {
  _id:              string;
  hotel:            Hotel;
  room:             Room;
  startDate:        Date;
  endDate:          Date;
  travelers:        string[];
  emergencyContact: EmergencyContact;
}

export interface EmergencyContact {
  name:  string;
  phone: string;
  _id:   string;
}

export interface Hotel {
  _id:      string;
  name:     string;
  location: string;
  address:  string;
}

export interface Room {
  _id:      string;
  code:     string;
  baseCost: string;
  taxes:    string;
  type:     string;
}
