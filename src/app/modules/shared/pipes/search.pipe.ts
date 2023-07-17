import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(items: any[], searchText: string, field?: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    if (field) {
      return items.filter(it => {
        return it[field].toLocaleLowerCase().includes(searchText);
      });
    } else {
      return items.filter(it => {
        return it.toLocaleLowerCase().includes(searchText);
      });
    }
  }
}
