import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
	name: 'cpf',
	pure: false
})
export class CpfPipe implements PipeTransform {

	REGEX = /(\d{3})(\d{3})(\d{3})(\d{2})/g;

	transform(value: any, args?: any): any {
		console.log('aro', value);
		

		if (value) {

			if (value.length === 11) {
				return value.replace(this.REGEX, '\$1.\$2.\$3\-\$4');
			}
			
			return value.replace('.', '')
				.replace('.', '')
				.replace('-', '');
		}
	}
}
