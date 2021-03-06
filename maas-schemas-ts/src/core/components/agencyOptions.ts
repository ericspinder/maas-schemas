/*

undefined
Options that can be used for available booking options

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as TravelMode_ from './travel-mode';
import * as Common_ from './common';
import * as Units_ from './units';
import * as UnitsGeo_ from './units-geo';
import * as Address_ from './address';

export const schemaId = 'http://maasglobal.com/core/components/agencyOptions.json';

// AgencyOptions
// The default export. More information at the top.
export type AgencyOptions = t.Branded<
  {
    mode?: TravelMode_.TravelMode;
    agencyId?: Common_.AgencyId;
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    from?: UnitsGeo_.ShortLocationString;
    to?: UnitsGeo_.ShortLocationString;
    fromName?: Address_.PlaceName;
    fromAddress?: Address_.ComponentAddress;
    fromRadius?: UnitsGeo_.Distance;
    toName?: Address_.PlaceName;
    toAddress?: Address_.ComponentAddress;
    toRadius?: UnitsGeo_.Distance;
  },
  AgencyOptionsBrand
>;
export const AgencyOptions = t.brand(
  t.partial({
    mode: TravelMode_.TravelMode,
    agencyId: Common_.AgencyId,
    startTime: Units_.Time,
    endTime: Units_.Time,
    from: UnitsGeo_.ShortLocationString,
    to: UnitsGeo_.ShortLocationString,
    fromName: Address_.PlaceName,
    fromAddress: Address_.ComponentAddress,
    fromRadius: UnitsGeo_.Distance,
    toName: Address_.PlaceName,
    toAddress: Address_.ComponentAddress,
    toRadius: UnitsGeo_.Distance,
  }),
  (
    x,
  ): x is t.Branded<
    {
      mode?: TravelMode_.TravelMode;
      agencyId?: Common_.AgencyId;
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      from?: UnitsGeo_.ShortLocationString;
      to?: UnitsGeo_.ShortLocationString;
      fromName?: Address_.PlaceName;
      fromAddress?: Address_.ComponentAddress;
      fromRadius?: UnitsGeo_.Distance;
      toName?: Address_.PlaceName;
      toAddress?: Address_.ComponentAddress;
      toRadius?: UnitsGeo_.Distance;
    },
    AgencyOptionsBrand
  > => true,
  'AgencyOptions',
);
export interface AgencyOptionsBrand {
  readonly AgencyOptions: unique symbol;
}

export default AgencyOptions;

// Success
