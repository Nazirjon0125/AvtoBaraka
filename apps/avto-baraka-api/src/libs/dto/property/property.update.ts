import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, Length, Min } from 'class-validator';
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
import { ObjectId } from 'mongoose';

@InputType()
export class PropertyUpdate {
	@IsNotEmpty()
	@Field(() => String)
	_id: ObjectId;

	@IsOptional()
	@Field(() => PropertyCarType, { nullable: true })
	propertyCarType?: PropertyCarType;

	/** Brand Models Optional */
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

	@IsOptional()
	@Field(() => PropertyFuel, { nullable: true })
	propertyFuel?: PropertyFuel;

	@IsOptional()
	@Field(() => PropertyCarBody, { nullable: true })
	propertyCarBody?: PropertyCarBody;

	@IsOptional()
	@Field(() => PropertyStatus, { nullable: true })
	propertyStatus?: PropertyStatus;

	@IsOptional()
	@Field(() => PropertyLocation, { nullable: true })
	propertyLocation?: PropertyLocation;

	@IsOptional()
	@Length(3, 100)
	@Field(() => String, { nullable: true })
	propertyAddress?: string;

	@IsOptional()
	@Length(3, 100)
	@Field(() => String, { nullable: true })
	ropertyTitle?: string;

	@IsOptional()
	@Field(() => Number, { nullable: true })
	propertyPrice?: number;

	@IsOptional()
	@Min(0)
	@Field(() => Number, { nullable: true })
	propertyMile?: number;

	@IsOptional()
	@IsInt()
	@Min(6)
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

	@IsOptional()
	@Field(() => Date, { nullable: true })
	soldAt?: Date;

	@IsOptional()
	@Field(() => Date, { nullable: true })
	deletedAt?: Date;
}
