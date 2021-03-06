/*

undefined
Response schema for getting options from a TSP adapter

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as BookingOption_ from '../../core/booking-option';
import * as BikeStation_ from '../../core/components/bike-station';

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

export const schemaId = 'http://maasglobal.com/tsp/booking-options-list/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    options?: Array<BookingOption_.BookingOption>;
    additional?: {
      bikeStations?: Array<BikeStation_.BikeStation>;
    };
  } & {
    options: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      options: t.array(BookingOption_.BookingOption),
      additional: t.partial({
        bikeStations: t.array(BikeStation_.BikeStation),
      }),
    }),
    t.type({
      options: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      options?: Array<BookingOption_.BookingOption>;
      additional?: {
        bikeStations?: Array<BikeStation_.BikeStation>;
      };
    } & {
      options: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
