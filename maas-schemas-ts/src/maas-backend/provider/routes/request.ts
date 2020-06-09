/*

undefined
Request schema for routes providers

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from '../../../core/components/units';
import * as UnitsGeo_ from '../../../core/components/units-geo';
import * as Address_ from '../../../core/components/address';
import * as Station_ from '../../../core/components/station';
import * as TravelMode_ from '../../../core/components/travel-mode';

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

export const schemaId = 'http://maasglobal.com/maas-backend/provider/routes/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  ({
    identityId?: Units_.IdentityId;
    from?: UnitsGeo_.ShortLocation;
    fromName?: Address_.PlaceName;
    fromAddress?: Address_.ComponentAddress;
    fromStationId?: Station_.Id;
    to?: UnitsGeo_.ShortLocation;
    toName?: Address_.PlaceName;
    toAddress?: Address_.ComponentAddress;
    toStationId?: Station_.Id;
    leaveAt?: Units_.Time;
    arriveBy?: Units_.Time;
    modes?: TravelMode_.TravelMode;
  } & Record<
    string,
    | Units_.IdentityId
    | UnitsGeo_.ShortLocation
    | Address_.PlaceName
    | Address_.ComponentAddress
    | Station_.Id
    | UnitsGeo_.ShortLocation
    | Address_.PlaceName
    | Address_.ComponentAddress
    | Station_.Id
    | Units_.Time
    | Units_.Time
    | TravelMode_.TravelMode
    | (string | number | boolean)
  >) & {
    from: Defined;
    to: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        identityId: Units_.IdentityId,
        from: UnitsGeo_.ShortLocation,
        fromName: Address_.PlaceName,
        fromAddress: Address_.ComponentAddress,
        fromStationId: Station_.Id,
        to: UnitsGeo_.ShortLocation,
        toName: Address_.PlaceName,
        toAddress: Address_.ComponentAddress,
        toStationId: Station_.Id,
        leaveAt: Units_.Time,
        arriveBy: Units_.Time,
        modes: TravelMode_.TravelMode,
      }),
      t.record(
        t.string,
        t.union([
          Units_.IdentityId,
          UnitsGeo_.ShortLocation,
          Address_.PlaceName,
          Address_.ComponentAddress,
          Station_.Id,
          UnitsGeo_.ShortLocation,
          Address_.PlaceName,
          Address_.ComponentAddress,
          Station_.Id,
          Units_.Time,
          Units_.Time,
          TravelMode_.TravelMode,
          t.union([t.string, t.number, t.boolean]),
        ]),
      ),
    ]),
    t.type({
      from: Defined,
      to: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      identityId?: Units_.IdentityId;
      from?: UnitsGeo_.ShortLocation;
      fromName?: Address_.PlaceName;
      fromAddress?: Address_.ComponentAddress;
      fromStationId?: Station_.Id;
      to?: UnitsGeo_.ShortLocation;
      toName?: Address_.PlaceName;
      toAddress?: Address_.ComponentAddress;
      toStationId?: Station_.Id;
      leaveAt?: Units_.Time;
      arriveBy?: Units_.Time;
      modes?: TravelMode_.TravelMode;
    } & Record<
      string,
      | Units_.IdentityId
      | UnitsGeo_.ShortLocation
      | Address_.PlaceName
      | Address_.ComponentAddress
      | Station_.Id
      | UnitsGeo_.ShortLocation
      | Address_.PlaceName
      | Address_.ComponentAddress
      | Station_.Id
      | Units_.Time
      | Units_.Time
      | TravelMode_.TravelMode
      | (string | number | boolean)
    >) & {
      from: Defined;
      to: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success
