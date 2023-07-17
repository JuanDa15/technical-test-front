export interface Agent {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  role: "USER_ROLE" | "ADMIN_ROLE";
  deleted: boolean;
}