import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markSearchPhrase'
})
export class MarkSearchPhrasePipe implements PipeTransform {

  transform(value: string, phrase?: string): string {
    if (phrase && phrase.length > 0) {
      if (value.indexOf(phrase) != -1) {
        return value.replace(phrase, '<span class="marked-search-phrase">' + phrase + '</span>');
      }
    }

    return value;
  }
}
