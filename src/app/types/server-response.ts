export interface ServerResponse<T> {
  ok: boolean;
  data: T,
  token?: string
}

export interface ListDataResponse<T> {
  data: T[],
  count: number;
}