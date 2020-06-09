/*

undefined
MaaS stations query request schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from '../../core/components/units-geo';

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

export const schemaId = 'http://maasglobal.com/tsp/stations-list/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  | ({
      location?: UnitsGeo_.ShortLocationString;
      radius?: UnitsGeo_.Distance;
    } & {
      location: Defined;
    })
  | ({
      name?: string;
      count?: number;
      type?: 'origin' | 'destination' | 'viaAvoid';
    } & {
      name: Defined;
      type: Defined;
    }),
  RequestBrand
>;
export const Request = t.brand(
  t.union([
    t.intersection([
      t.partial({
        location: UnitsGeo_.ShortLocationString,
        radius: UnitsGeo_.Distance,
      }),
      t.type({
        location: Defined,
      }),
    ]),
    t.intersection([
      t.partial({
        name: t.string,
        count: t.number,
        type: t.union([
          t.literal('origin'),
          t.literal('destination'),
          t.literal('viaAvoid'),
        ]),
      }),
      t.type({
        name: Defined,
        type: Defined,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    | ({
        location?: UnitsGeo_.ShortLocationString;
        radius?: UnitsGeo_.Distance;
      } & {
        location: Defined;
      })
    | ({
        name?: string;
        count?: number;
        type?: 'origin' | 'destination' | 'viaAvoid';
      } & {
        name: Defined;
        type: Defined;
      }),
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success
