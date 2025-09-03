import { registerEnumType } from '@nestjs/graphql';

export enum PropertyType {
	KIA = 'KIA',
	HYUNDAI = 'HYUNDAI',
	AUDI = 'AUDI',
	BMW = 'BMW',
	MERS = 'MERS',
	TAYOTA = 'TAYOTA',
	TESLA = 'TESLA',
	CHEVROLET = 'CHEVROLET',
	JEEP = 'JEEP',
	HONDA = 'HONDA',
	LAND_ROVER = 'LAND_ROVER',
	LEXSUS = ' LEXSUS',
	LINCOLN = 'LINCOLN',
	VOLVO = 'VOLVO',
}
registerEnumType(PropertyType, {
	name: 'PropertyType',
});

export enum PropertyStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(PropertyStatus, {
	name: 'PropertyStatus',
});

export enum PropertyLocation {
	SEOUL = 'SEOUL',
	BUSAN = 'BUSAN',
	INCHEON = 'INCHEON',
	DAEGU = 'DAEGU',
	GYEONGJU = 'GYEONGJU',
	GWANGJU = 'GWANGJU',
	CHONJU = 'CHONJU',
	DAEJON = 'DAEJON',
	JEJU = 'JEJU',
}
registerEnumType(PropertyLocation, {
	name: 'PropertyLocation',
});
