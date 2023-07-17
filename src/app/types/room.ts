export interface RoomDetailed {
  _id:         string;
  updatedBy:   Hotel;
  code:        string;
  location:    Location;
  baseCost:    string;
  taxes:       string;
  type:        string;
  hotel:       Hotel;
  active:      boolean;
  reserved:    boolean;
  reservation: null;
}

export interface Hotel {
  _id:       string;
  name:      string;
  email:     string;
  lastName?: string;
}

export interface Location {
  floor: string;
  room:  string;
  _id:   string;
}
