import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: Array<any>, nameSearch: string, emailSearch: string, idCustomerSearch: string) {
    if (items && items.length) {
      return items.filter(item => {
        if (nameSearch && item.name.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1) {
          return false;
        }
        if (emailSearch && item.email.toLowerCase().indexOf(emailSearch.toLowerCase()) === -1) {
          return false;
        }
        if (idCustomerSearch && item.idCustomer.toLowerCase().indexOf(idCustomerSearch.toLowerCase()) === -1) {
          return false;
        }
        return true;
      });
    } else {
      return items;
    }
  }
}
