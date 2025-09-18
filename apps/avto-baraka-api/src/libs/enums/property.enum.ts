import { registerEnumType } from '@nestjs/graphql';

export enum PropertyCarType {
	KIA = 'KIA',
	HYUNDAI = 'HYUNDAI',
	AUDI = 'AUDI',
	BMW = 'BMW',
	MERCEDES = 'MERCEDES',
	TAYOTA = 'TOYOTA',
	TESLA = 'TESLA',
	CHEVROLET = 'CHEVROLET',
	JEEP = 'JEEP',
	HONDA = 'HONDA',
	LAND_ROVER = 'LAND_ROVER',
	LEXSUS = 'LEXSUS',
	LINCOLN = 'LINCOLN',
	VOLVO = 'VOLVO',
}
registerEnumType(PropertyCarType, {
	name: 'PropertyCarType',
});

export enum KiaModel {
	EV9 = 'EV9',
	EV6 = 'EV6',
	SORENTO = 'SORENTO',
	SPORTAGE = 'SPORTAGE',
	NIRO = 'NIRO',
	SOUL = 'SOUL',
	CARNIVAL = 'CARNIVAL',
	K5 = 'K5',
	K4 = 'K4',
	K8 = 'K8',
	K9 = 'K9',
}
registerEnumType(KiaModel, { name: 'KiaModel' });

export enum BMWModel {
	SERIES_2 = '2_SERIES',
	SERIES_3 = '3_SERIES',
	SERIES_5 = '5_SERIES',
	SERIES_7 = '7_SERIES',
	SERIES_4 = '4_SERIES',
	SERIES_8 = '8_SERIES',
	X1 = 'X1',
	X2 = 'X2',
	X3 = 'X3',
	X4 = 'X4',
	X5 = 'X5',
	X6 = 'X6',
	X7 = 'X7',
	I4 = 'I4',
	I5 = 'I5',
	I7 = 'I7',
	IX = 'IX',
	IX3 = 'IX3',
	XM = 'XM',
	M235 = 'M235',
	M240i = 'M240i',
	M340i = 'M340i',
	M440i = 'M440i',
	M4 = 'M4',
}
registerEnumType(BMWModel, { name: 'BMWModel' });

export enum HyundaiModel {
	ELANTRA = 'ELANTRA',
	SONATA = 'SONATA',
	SANTA_FE = 'SANTA_FE',
	SANTA_CRUZ = 'SANTA_CRUZ',
	PALISADE = 'PALISADE',
	KONA = 'KONA',
	KONA_ELECTRIC = 'KONA_ELECTRIC',
	IONIQ_5 = 'IONIQ_5',
	IONIQ_6 = 'IONIQ_6',
	IONIQ_7 = 'IONIQ_7',
	VENUE = 'VENUE',
	CRETA = 'CRETA',
	CRETA_KING = 'CRETA_KING',
	CRETA_KING_LIMITED = 'CRETA_KING_LIMITED',
	CRETA_KING_KNIGHT = 'CRETA_KING_KNIGHT',
}
registerEnumType(HyundaiModel, { name: 'HyundaiModel' });

export enum AudiModel {
	A3 = 'A3',
	A4 = 'A4',
	A5 = 'A5',
	A6 = 'A6',
	A7 = 'A7',
	A8 = 'A8',
	Q3 = 'Q3',
	Q5 = 'Q5',
	Q7 = 'Q7',
	Q8 = 'Q8',
	Q5_SPORTBACK = 'Q5_SPORTBACK',
	Q8_SPORTBACK = 'Q8_SPORTBACK',
	Q5_TFSI_E = 'Q5_TFSI_E',
	Q8_TFSI_E = 'Q8_TFSI_E',
	Q6_E_TRON = 'Q6_E_TRON',
	A6_E_TRON = 'A6_E_TRON',
	RS_MODELS = 'RS_MODELS',
}
registerEnumType(AudiModel, { name: 'AudiModel' });

export enum MercedesModel {
	A_CLASS = 'A_CLASS',
	B_CLASS = 'B_CLASS',
	C_CLASS = 'C_CLASS',
	E_CLASS = 'E_CLASS',
	S_CLASS = 'S_CLASS',
	CLA = 'CLA',
	CLS = 'CLS',
	GLA = 'GLA',
	GLB = 'GLB',
	GLC = 'GLC',
	GLE = 'GLE',
	GLS = 'GLS',
	EQB = 'EQB',
	EQC = 'EQC',
	EQE = 'EQE',
	EQS = 'EQS',
	EQS_SUV = 'EQS_SUV',
	AMG = 'AMG',
}
registerEnumType(MercedesModel, { name: 'MercedesModel' });

export enum ToyotaModel {
	COROLLA = 'COROLLA',
	CAMRY = 'CAMRY',
	AVALON = 'AVALON',
	PRIUS = 'PRIUS',
	MIRAI = 'MIRAI',
	YARIS = 'YARIS',
	HIGHLANDER = 'HIGHLANDER',
	RAV4 = 'RAV4',
	RUNNER = '4RUNNER',
	LAND_CRUISER = 'LAND_CRUISER',
	SEQUOIA = 'SEQUOIA',
	TUNDRA = 'TUNDRA',
	TACOMA = 'TACOMA',
	SIENNA = 'SIENNA',
	HIGHLANDER_HYBRID = 'HIGHLANDER_HYBRID',
	RAV4_HYBRID = 'RAV4_HYBRID',
	PRIUS_HYBRID = 'PRIUS_HYBRID',
	MIRAI_HYBRID = 'MIRAI_HYBRID',
	COROLLA_HYBRID = 'COROLLA_HYBRID',
	CAMRY_HYBRID = 'CAMRY_HYBRID',
}
registerEnumType(ToyotaModel, { name: 'ToyotaModel' });

export enum TeslaModel {
	MODEL_S = 'MODEL_S',
	MODEL_3 = 'MODEL_3',
	MODEL_X = 'MODEL_X',
	MODEL_Y = 'MODEL_Y',
	ROADSTER = 'ROADSTER',
	CYBERTRUCK = 'CYBERTRUCK',
	SEMI = 'SEMI',
}
registerEnumType(TeslaModel, { name: 'TeslaModel' });

export enum ChevroletModel {
	SPARK = 'SPARK',
	SONIC = 'SONIC',
	MALIBU = 'MALIBU',
	CAMARO = 'CAMARO',
	CORVETTE = 'CORVETTE',
	TRAILBLAZER = 'TRAILBLAZER',
	EQUINOX = 'EQUINOX',
	BLAZER = 'BLAZER',
	TRAVERSE = 'TRAVERSE',
	TAHOE = 'TAHOE',
	SUBURBAN = 'SUBURBAN',
	COLORADO = 'COLORADO',
	SILVERADO_1500 = 'SILVERADO_1500',
	SILVERADO_2500HD = 'SILVERADO_2500HD',
	SILVERADO_3500HD = 'SILVERADO_3500HD',
	BOLT_EV = 'BOLT_EV',
	BOLT_EUV = 'BOLT_EUV',
}
registerEnumType(ChevroletModel, { name: 'ChevroletModel' });

export enum JeepModel {
	CHEROKEE = 'CHEROKEE',
	COMPASS = 'COMPASS',
	GRAND_CHEROKEE = 'GRAND_CHEROKEE',
	GRAND_CHEROKEE_L = 'GRAND_CHEROKEE_L',
	GRAND_CHEROKEE_4XE = 'GRAND_CHEROKEE_4XE',
	WRANGLER = 'WRANGLER',
	WRANGLER_4XE = 'WRANGLER_4XE',
	GLADIATOR = 'GLADIATOR',
	RENEGADE = 'RENEGADE',
	WAGONEER = 'WAGONEER',
	GRAND_WAGONEER = 'GRAND_WAGONEER',
}
registerEnumType(JeepModel, { name: 'JeepModel' });

export enum HondaModel {
	CIVIC = 'CIVIC',
	ACCORD = 'ACCORD',
	INSIGHT = 'INSIGHT',
	HR_V = 'HR_V',
	CR_V = 'CR_V',
	PILOT = 'PILOT',
	RIDGELINE = 'RIDGELINE',
	PASSPORT = 'PASSPORT',
	ODYSSEY = 'ODYSSEY',
	RIDGELINE_PHEV = 'RIDGELINE_PHEV',
	CR_V_HYBRID = 'CR_V_HYBRID',
	ACCORD_HYBRID = 'ACCORD_HYBRID',
	INSIGHT_HYBRID = 'INSIGHT_HYBRID',
	CIVIC_HYBRID = 'CIVIC_HYBRID',
}
registerEnumType(HondaModel, { name: 'HondaModel' });

export enum LandRoverModel {
	DEFENDER = 'DEFENDER',
	DISCOVERY = 'DISCOVERY',
	DISCOVERY_SPORT = 'DISCOVERY_SPORT',
	RANGE_ROVER = 'RANGE_ROVER',
	RANGE_ROVER_SPORT = 'RANGE_ROVER_SPORT',
	RANGE_ROVER_VELAR = 'RANGE_ROVER_VELAR',
	RANGE_ROVER_EVOQUE = 'RANGE_ROVER_EVOQUE',
	RANGE_ROVER_SPORT_HYBRID = 'RANGE_ROVER_SPORT_HYBRID',
	RANGE_ROVER_VELAR_HYBRID = 'RANGE_ROVER_VELAR_HYBRID',
	RANGE_ROVER_EVOQUE_HYBRID = 'RANGE_ROVER_EVOQUE_HYBRID',
}
registerEnumType(LandRoverModel, { name: 'LandRoverModel' });

export enum LexusModel {
	UX = 'UX',
	NX = 'NX',
	RX = 'RX',
	GX = 'GX',
	LX = 'LX',
	ES = 'ES',
	GS = 'GS',
	IS = 'IS',
	LS = 'LS',
	LC = 'LC',
	RC = 'RC',
	LX_HYBRID = 'LX_HYBRID',
	RX_HYBRID = 'RX_HYBRID',
	NX_HYBRID = 'NX_HYBRID',
	ES_HYBRID = 'ES_HYBRID',
}
registerEnumType(LexusModel, { name: 'LexusModel' });

export enum LincolnModel {
	CORSAIR = 'CORSAIR',
	AVIATOR = 'AVIATOR',
	NAUTILUS = 'NAUTILUS',
	NAVIGATOR = 'NAVIGATOR',
	ZEPHYR = 'ZEPHYR',
}
registerEnumType(LincolnModel, { name: 'LincolnModel' });

export enum VolvoModel {
	XC40 = 'XC40',
	XC60 = 'XC60',
	XC90 = 'XC90',
	S60 = 'S60',
	S90 = 'S90',
	V60 = 'V60',
	V90 = 'V90',
	C40 = 'C40',
}
registerEnumType(VolvoModel, { name: 'VolvoModel' });

export enum PropertyFuel {
	LPG = 'LPG',
	PETROL = 'PETROL',
	DIESEL = 'DIESEL',
	ELECTRIC = 'ELECTRIC',
	HYBRID = 'HYBRID',
}
registerEnumType(PropertyFuel, {
	name: 'PropertyFuel',
});

export enum PropertyCarBody {
	SEDAN = 'SEDAN',
	HATCHBACK = 'HATCHBACK',
	SUV = 'SUV',
	COUPE = 'COUPE',
	CONVERTIBLE = 'CONVERTIBLE',
	WAGON = 'WAGON',
	VAN = 'VAN',
	TRUCK = 'TRUCK',
	PICKUP_TRUCK = 'PICKUP_TRUCK',
	MINIVAN = 'MINIVAN',
	LIMOUSINE = 'LIMOUSINE',
	ROADSTER = 'ROADSTER',
}
registerEnumType(PropertyCarBody, {
	name: 'PropertyCarBody',
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
