export interface ServerResponse<T> {
  ok: boolean;
  data: T,
  token?: string
}