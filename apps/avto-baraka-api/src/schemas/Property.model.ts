import { Schema } from 'mongoose';
import {
	PropertyLocation,
	PropertyStatus,
	PropertyCarType,
	PropertyFuel,
	PropertyCarBody,
	KiaModel,
	BMWModel,
	HyundaiModel,
	AudiModel,
	MercedesModel,
	ToyotaModel,
	TeslaModel,
	ChevroletModel,
	JeepModel,
	HondaModel,
	LandRoverModel,
	LincolnModel,
	VolvoModel,
	LexusModel,
} from '../libs/enums/property.enum';

const PropertySchema = new Schema(
	{
		propertyCarType: {
			type: String,
			enum: PropertyCarType,
			required: true,
		},

		propertyStatus: {
			type: String,
			enum: PropertyStatus,
			default: PropertyStatus.ACTIVE,
		},

		propertyLocation: {
			type: String,
			enum: PropertyLocation,
			required: true,
		},

		propertyFuel: {
			type: String,
			enum: PropertyFuel,
			required: true,
		},

		propertyCarBody: {
			type: String,
			enum: PropertyCarBody,
			required: true,
		},

		// Brand-specific models
		kiaModel: {
			type: String,
			enum: KiaModel,
			required: false,
		},

		bmwModel: {
			type: String,
			enum: BMWModel,
			required: false,
		},

		hyundaiModel: {
			type: String,
			enum: HyundaiModel,
			required: false,
		},

		audiModel: {
			type: String,
			enum: AudiModel,
			required: false,
		},

		mercedesModel: {
			type: String,
			enum: MercedesModel,
			required: false,
		},

		toyotaModel: {
			type: String,
			enum: ToyotaModel,
			required: false,
		},

		teslaModel: {
			type: String,
			enum: TeslaModel,
			required: false,
		},

		chevroletModel: {
			type: String,
			enum: ChevroletModel,
			required: false,
		},

		jeepModel: {
			type: String,
			enum: JeepModel,
			required: false,
		},

		hondaModel: {
			type: String,
			enum: HondaModel,
			required: false,
		},

		landRoverModel: {
			type: String,
			enum: LandRoverModel,
			required: false,
		},

		lexusModel: {
			type: String,
			enum: LexusModel,
			required: false,
		},

		lincolnModel: {
			type: String,
			enum: LincolnModel,
			required: false,
		},

		volvoModel: {
			type: String,
			enum: VolvoModel,
			required: false,
		},

		propertyAddress: {
			type: String,
			required: true,
		},

		propertyTitle: {
			type: String,
			required: true,
		},

		propertyPrice: {
			type: Number,
			required: true,
		},

		propertyMile: {
			type: Number,
			required: true,
		},

		propertyYear: {
			type: Number,
			required: true,
		},

		propertyViews: {
			type: Number,
			default: 0,
		},

		propertyLikes: {
			type: Number,
			default: 0,
		},

		propertyComments: {
			type: Number,
			default: 0,
		},

		propertyRank: {
			type: Number,
			default: 0,
		},

		propertyImages: {
			type: [String],
			required: true,
		},

		propertyDesc: {
			type: String,
		},

		propertyBarter: {
			type: Boolean,
			default: false,
		},

		propertyRent: {
			type: Boolean,
			default: false,
		},

		memberId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Member',
		},

		soldAt: {
			type: Date,
		},

		deletedAt: {
			type: Date,
		},

		constructedAt: {
			type: Date,
		},
	},
	{ timestamps: true, collection: 'properties' },
);

PropertySchema.index({ propertyType: 1, propertyLocation: 1, propertyTitle: 1, propertyPrice: 1 }, { unique: true });

export default PropertySchema;
