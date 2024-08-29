import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformStatus',
})
export class transformStatusPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'trend':
        return 'Tendance';
      case 'new':
        return 'Nouveauté';
      case 'discount':
        return 'Articles soldés';
      default:
        return value;
    }
  }
}
