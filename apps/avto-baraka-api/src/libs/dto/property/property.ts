import { ObjectId } from 'mongoose';
import { Field, Int, ObjectType } from '@nestjs/graphql';
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
import { Member, TotalCounter } from '../member/member';
import { MeLiked } from '../like/like';

@ObjectType()
export class Property {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => PropertyCarType)
	propertyCarType: PropertyCarType;

	/** Brand Models Optional */
	@Field(() => KiaModel, { nullable: true })
	kiaModel?: KiaModel;

	@Field(() => BMWModel, { nullable: true })
	bmwModel?: BMWModel;

	@Field(() => HyundaiModel, { nullable: true })
	hyundaiModel?: HyundaiModel;

	@Field(() => AudiModel, { nullable: true })
	audiModel?: AudiModel;

	@Field(() => MercedesModel, { nullable: true })
	mercedesModel?: MercedesModel;

	@Field(() => ToyotaModel, { nullable: true })
	toyotaModel?: ToyotaModel;

	@Field(() => TeslaModel, { nullable: true })
	teslaModel?: TeslaModel;

	@Field(() => ChevroletModel, { nullable: true })
	chevroletModel?: ChevroletModel;

	@Field(() => JeepModel, { nullable: true })
	jeepModel?: JeepModel;

	@Field(() => HondaModel, { nullable: true })
	hondaModel?: HondaModel;

	@Field(() => LandRoverModel, { nullable: true })
	landRoverModel?: LandRoverModel;

	@Field(() => LexusModel, { nullable: true })
	lexusModel?: LexusModel;

	@Field(() => LincolnModel, { nullable: true })
	lincolnModel?: LincolnModel;

	@Field(() => VolvoModel, { nullable: true })
	volvoModel?: VolvoModel;

	@Field(() => PropertyFuel)
	propertyFuel: PropertyFuel;

	@Field(() => PropertyCarBody)
	propertyCarBody: PropertyCarBody;

	@Field(() => PropertyStatus)
	propertyStatus: PropertyStatus;

	@Field(() => PropertyLocation)
	propertyLocation: PropertyLocation;

	@Field(() => String)
	propertyAddress: string;

	@Field(() => String)
	propertyTitle: string;

	@Field(() => Number)
	propertyPrice: number;

	@Field(() => Number)
	propertyMile: number;

	@Field(() => Int)
	propertyYear: number;

	@Field(() => Number)
	propertyViews: number;

	@Field(() => [String])
	propertyImages: string[];

	@Field(() => String, { nullable: true })
	propertyDesc?: string;

	@Field(() => Boolean)
	propertyBarter: boolean;

	@Field(() => Boolean)
	propertyRent: boolean;

	@Field(() => String)
	memberId: ObjectId;

	@Field(() => Date, { nullable: true })
	constructedAt?: Date;

	@Field(() => Date, { nullable: true })
	soldAt?: Date;

	@Field(() => Date, { nullable: true })
	deletedAt?: Date;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;

	/**from agrgregation */

	@Field(() => [MeLiked], { nullable: true })
	meLiked?: MeLiked[];

	@Field(() => Member, { nullable: true })
	memberData?: Member;
}

@ObjectType()
export class Properties {
	@Field(() => [Property])
	list: Property[];

	@Field(() => [TotalCounter], { nullable: true })
	metaCounter: TotalCounter[];
}
