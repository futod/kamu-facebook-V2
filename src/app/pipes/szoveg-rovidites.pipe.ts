import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'szovegRovidites'
})
export class SzovegRoviditesPipe implements PipeTransform {
  transform(value: string, maxHossz: number = 100): string {
    if (!value) return '';
    return value.length > maxHossz ? value.substring(0, maxHossz) + '...' : value;
  }
}
