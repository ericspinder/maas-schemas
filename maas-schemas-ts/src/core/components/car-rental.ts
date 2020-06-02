/*

undefined
Base schema for MODE_CAR* metas

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as ACRISS_ from 'maas-schemas-ts/core/components/ACRISS';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';
import * as Common_ from 'maas-schemas-ts/core/components/common';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId = 'http://maasglobal.com/core/components/car-rental.json';

// Instruction
// The purpose of this remains a mystery
export type Instruction = t.Branded<
  {
    title?: string;
    icon?: Units_.Url;
    text?: string;
    image?: Units_.Url;
  } & (
    | {
        title: Defined;
        text: Defined;
      }
    | {
        title: Defined;
        image: Defined;
      }
  ),
  InstructionBrand
>;
export const Instruction = t.brand(
  t.intersection([
    t.partial({
      title: t.string,
      icon: Units_.Url,
      text: t.string,
      image: Units_.Url,
    }),
    t.union([
      t.type({
        title: Defined,
        text: Defined,
      }),
      t.type({
        title: Defined,
        image: Defined,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      title?: string;
      icon?: Units_.Url;
      text?: string;
      image?: Units_.Url;
    } & (
      | {
          title: Defined;
          text: Defined;
        }
      | {
          title: Defined;
          image: Defined;
        }
    ),
    InstructionBrand
  > => true,
  'Instruction',
);
export interface InstructionBrand {
  readonly Instruction: unique symbol;
}

// CarRental
// The default export. More information at the top.
export type CarRental = t.Branded<
  {
    id?: string;
    name?: string;
    description?: string;
    image?: Units_.Url;
    vendor?: {
      voucher?: unknown;
    };
    terms?: unknown;
    car?: {
      passengers?: number;
      doors?: Array<number>;
      luggage?: Array<number>;
      transmission?: 'manual' | 'automatic' | null;
      fuel?:
        | 'diesel'
        | 'electric'
        | 'ethanol'
        | 'gasoline'
        | 'hybrid'
        | 'hydrogen'
        | 'lpg'
        | 'multifuel'
        | null;
      classification?: ACRISS_.ACRISS | null;
      registrationPlate?: string;
      damage?: string;
      fuelLevel?: number;
      location?: UnitsGeo_.Location;
    } & {
      classification: Defined;
    };
    pickupInfo?: Common_.HtmlBlock;
    returnInfo?: Common_.HtmlBlock;
    startEndGeoRegionUrl?: Units_.Url;
    instructions?: Array<Instruction>;
  } & {
    name: Defined;
    description: Defined;
    image: Defined;
  },
  CarRentalBrand
>;
export const CarRental = t.brand(
  t.intersection([
    t.partial({
      id: t.string,
      name: t.string,
      description: t.string,
      image: Units_.Url,
      vendor: t.partial({
        voucher: t.unknown,
      }),
      terms: t.unknown,
      car: t.intersection([
        t.partial({
          passengers: t.number,
          doors: t.array(t.number),
          luggage: t.array(t.number),
          transmission: t.union([t.literal('manual'), t.literal('automatic'), t.null]),
          fuel: t.union([
            t.literal('diesel'),
            t.literal('electric'),
            t.literal('ethanol'),
            t.literal('gasoline'),
            t.literal('hybrid'),
            t.literal('hydrogen'),
            t.literal('lpg'),
            t.literal('multifuel'),
            t.null,
          ]),
          classification: t.union([ACRISS_.ACRISS, t.null]),
          registrationPlate: t.string,
          damage: t.string,
          fuelLevel: t.number,
          location: UnitsGeo_.Location,
        }),
        t.type({
          classification: Defined,
        }),
      ]),
      pickupInfo: Common_.HtmlBlock,
      returnInfo: Common_.HtmlBlock,
      startEndGeoRegionUrl: Units_.Url,
      instructions: t.array(Instruction),
    }),
    t.type({
      name: Defined,
      description: Defined,
      image: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: string;
      name?: string;
      description?: string;
      image?: Units_.Url;
      vendor?: {
        voucher?: unknown;
      };
      terms?: unknown;
      car?: {
        passengers?: number;
        doors?: Array<number>;
        luggage?: Array<number>;
        transmission?: 'manual' | 'automatic' | null;
        fuel?:
          | 'diesel'
          | 'electric'
          | 'ethanol'
          | 'gasoline'
          | 'hybrid'
          | 'hydrogen'
          | 'lpg'
          | 'multifuel'
          | null;
        classification?: ACRISS_.ACRISS | null;
        registrationPlate?: string;
        damage?: string;
        fuelLevel?: number;
        location?: UnitsGeo_.Location;
      } & {
        classification: Defined;
      };
      pickupInfo?: Common_.HtmlBlock;
      returnInfo?: Common_.HtmlBlock;
      startEndGeoRegionUrl?: Units_.Url;
      instructions?: Array<Instruction>;
    } & {
      name: Defined;
      description: Defined;
      image: Defined;
    },
    CarRentalBrand
  > => true,
  'CarRental',
);
export interface CarRentalBrand {
  readonly CarRental: unique symbol;
}

export default CarRental;

// Success
