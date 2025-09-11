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
	PropertyCarType: PropertyCarType;

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

	@IsOptional()
	@Field(() => Number, { nullable: true })
	propertyMile?: number;

	@IsOptional()
	@IsInt()
	@Field(() => Int, { nullable: true })
	propertyYear?: number;

	@IsOptional()
	@Field(() => [String], { nullable: true })
	propertyImages?: string[];

	@IsOptional()
	@Length(0, 1000)
	@Field(() => String, { nullable: true })
	propertyDesc?: string;

	@IsOptional()
	@Field(() => Boolean, { nullable: true })
	propertyBarter?: boolean;

	@IsOptional()
	@Field(() => Boolean, { nullable: true })
	propertyRent?: boolean;

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
export class SquaresRange {
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
	@Field(() => [Number], { nullable: true })
	roomsList?: number[];

	@IsOptional()
	@Field(() => [Number], { nullable: true })
	bedsList?: number[];

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
	@Field(() => SquaresRange, { nullable: true })
	squaresRange?: SquaresRange;

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
