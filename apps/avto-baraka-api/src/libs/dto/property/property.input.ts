import { Field, InputType, Int } from '@nestjs/graphql';
import { IsIn, IsInt, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
import {
	AudiModel,
	BMWModel,
	ChevroletModel,
	HondaModel,
	HyundaiModel,
	JeepModel,
	KiaModel,
	LandRoverModel,
	LexusModel,
	LincolnModel,
	MercedesModel,
	PropertyCarBody,
	PropertyCarType,
	PropertyFuel,
	PropertyLocation,
	PropertyStatus,
	TeslaModel,
	ToyotaModel,
	VolvoModel,
} from '../../enums/property.enum';
import { availableOptions, availablePropertySorts } from '../../config';
import { Direction } from '../../enums/common.enum';
import { ObjectId } from 'mongoose';

@InputType()
export class PropertyInput {
	@IsNotEmpty()
	@Field(() => PropertyCarType)
	propertyCarType: PropertyCarType;

	@IsNotEmpty()
	@Field(() => PropertyLocation)
	propertyLocation: PropertyLocation;

	/** Dynamic Model based on brand */
	@IsOptional()
	@Field(() => KiaModel, { nullable: true })
	kiaModel?: KiaModel;

	@IsOptional()
	@Field(() => BMWModel, { nullable: true })
	bmwModel?: BMWModel;

	@IsOptional()
	@Field(() => HyundaiModel, { nullable: true })
	hyundaiModel?: HyundaiModel;

	@IsOptional()
	@Field(() => AudiModel, { nullable: true })
	audiModel?: AudiModel;

	@IsOptional()
	@Field(() => MercedesModel, { nullable: true })
	mercedesModel?: MercedesModel;

	@IsOptional()
	@Field(() => ToyotaModel, { nullable: true })
	toyotaModel?: ToyotaModel;

	@IsOptional()
	@Field(() => TeslaModel, { nullable: true })
	teslaModel?: TeslaModel;

	@IsOptional()
	@Field(() => ChevroletModel, { nullable: true })
	chevroletModel?: ChevroletModel;

	@IsOptional()
	@Field(() => JeepModel, { nullable: true })
	jeepModel?: JeepModel;

	@IsOptional()
	@Field(() => HondaModel, { nullable: true })
	hondaModel?: HondaModel;

	@IsOptional()
	@Field(() => LandRoverModel, { nullable: true })
	landRoverModel?: LandRoverModel;

	@IsOptional()
	@Field(() => LexusModel, { nullable: true })
	lexusModel?: LexusModel;

	@IsOptional()
	@Field(() => LincolnModel, { nullable: true })
	lincolnModel?: LincolnModel;

	@IsOptional()
	@Field(() => VolvoModel, { nullable: true })
	volvoModel?: VolvoModel;

	@IsNotEmpty()
	@Field(() => PropertyFuel)
	propertyFuel: PropertyFuel;

	@IsNotEmpty()
	@Field(() => PropertyCarBody)
	propertyCarBody: PropertyCarBody;

	@IsNotEmpty()
	@Length(3, 100)
	@Field(() => String)
	propertyAddress: string;

	@IsNotEmpty()
	@Length(3, 100)
	@Field(() => String)
	propertyTitle: string;

	@IsNotEmpty()
	@Field(() => Number)
	propertyPrice: number;

	@IsNotEmpty()
	@IsInt()
	@Field(() => Int)
	@Min(0)
	propertyMile: number;

	@IsNotEmpty()
	@IsInt()
	@Field(() => Int)
	@Min(1)
	propertyYear: number;

	@IsNotEmpty()
	@Field(() => [String])
	propertyImages?: string[];

	@IsOptional()
	@Length(1, 1000)
	@Field(() => String, { nullable: true })
	propertyDesc?: string;

	@IsOptional()
	@Field(() => Boolean, { nullable: true })
	propertyBarter?: boolean;

	@IsOptional()
	@Field(() => Boolean, { nullable: true })
	propertyRent?: boolean;

	memberId?: ObjectId;

	@IsOptional()
	@Field(() => Date, { nullable: true })
	constructedAt?: Date;
}

@InputType()
export class PricesRange {
	@Field(() => Int)
	start: number;

	@Field(() => Int)
	end: number;
}

@InputType()
export class PeriodsRange {
	@Field(() => Date)
	start: Date;

	@Field(() => Date)
	end: Date;
}

@InputType()
export class YearsRange {
	@Field(() => Int)
	start: number;

	@Field(() => Int)
	end: number;
}

@InputType()
export class MileRange {
	@Field(() => Int)
	start: number;

	@Field(() => Int)
	end: number;
}

@InputType()
export class PISearch {
	@IsOptional()
	@Field(() => String, { nullable: true })
	memberId?: ObjectId;

	@IsOptional()
	@Field(() => [PropertyLocation], { nullable: true })
	locationList?: PropertyLocation[];

	@IsOptional()
	@Field(() => [PropertyCarType], { nullable: true })
	typeList?: PropertyCarType[];

	@IsOptional()
	@Field(() => [PropertyFuel], { nullable: true })
	fuelList?: PropertyFuel[];

	@IsOptional()
	@Field(() => [PropertyCarBody], { nullable: true })
	carBodyList?: PropertyCarBody[];

	@IsOptional()
	@IsIn(availableOptions, { each: true })
	@Field(() => [String], { nullable: true })
	options?: string[];

	@IsOptional()
	@Field(() => PricesRange, { nullable: true })
	pricesRange?: PricesRange;

	@IsOptional()
	@Field(() => PeriodsRange, { nullable: true })
	periodsRange?: PeriodsRange;

	@IsOptional()
	@Field(() => YearsRange, { nullable: true })
	yearsRange?: YearsRange;

	@IsOptional()
	@Field(() => MileRange, { nullable: true })
	mileRange?: MileRange;

	@IsOptional()
	@Field(() => String, { nullable: true })
	text?: string;
}

@InputType()
export class PropertiesInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	limit: number;

	@IsOptional()
	@IsIn(availablePropertySorts)
	@Field(() => String, { nullable: true })
	sort?: string;

	@IsOptional()
	@Field(() => Direction, { nullable: true })
	direction?: Direction;

	@IsNotEmpty()
	@Field(() => PISearch)
	search: PISearch;
}

@InputType()
export class APISearch {
	@IsOptional()
	@Field(() => PropertyStatus, { nullable: true })
	propertyStatus?: PropertyStatus;
}

@InputType()
export class AgentPropertiesInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	limit: number;

	@IsOptional()
	@IsIn(availablePropertySorts)
	@Field(() => String, { nullable: true })
	sort?: string;

	@IsOptional()
	@Field(() => Direction, { nullable: true })
	direction?: Direction;

	@IsNotEmpty()
	@Field(() => APISearch)
	search: APISearch;
}

@InputType()
class ALPISearch {
	@IsOptional()
	@Field(() => PropertyStatus, { nullable: true })
	propertyStatus?: PropertyStatus;

	@IsOptional()
	@Field(() => [PropertyLocation], { nullable: true })
	propertyLocationList?: PropertyLocation[];
}

@InputType()
export class AllPropertiesInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	limit: number;

	@IsOptional()
	@IsIn(availablePropertySorts)
	@Field(() => String, { nullable: true })
	sort?: string;

	@IsOptional()
	@Field(() => Direction, { nullable: true })
	direction?: Direction;

	@IsNotEmpty()
	@Field(() => ALPISearch)
	search: ALPISearch;
}

@InputType()
export class OrdinaryInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	limit: number;
}
