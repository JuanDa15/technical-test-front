export function setStorage(key: string, value: any) {
  const data = JSON.stringify(value);
  localStorage.setItem(key, data);
}

export function getStorage(key: string) {
  const data = localStorage.getItem(key);
  return (data !== null) ? JSON.parse(data) : null;
}