/*

undefined
Response schema for profile-devices-put

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../../core/components/units';

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

export const schemaId =
  'http://maasglobal.com/maas-backend/profile/profile-devices-put/response.json';

// Device
// The purpose of this remains a mystery
export type Device = t.Branded<
  {
    devicePushToken?: string;
    deviceIdentifier?: Units_.Uuid;
    deviceType?: string & ('iOS' | 'Android');
  } & {
    devicePushToken: Defined;
    deviceIdentifier: Defined;
    deviceType: Defined;
  },
  DeviceBrand
>;
export const Device = t.brand(
  t.intersection([
    t.partial({
      devicePushToken: t.string,
      deviceIdentifier: Units_.Uuid,
      deviceType: t.intersection([
        t.string,
        t.union([t.literal('iOS'), t.literal('Android')]),
      ]),
    }),
    t.type({
      devicePushToken: Defined,
      deviceIdentifier: Defined,
      deviceType: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      devicePushToken?: string;
      deviceIdentifier?: Units_.Uuid;
      deviceType?: string & ('iOS' | 'Android');
    } & {
      devicePushToken: Defined;
      deviceIdentifier: Defined;
      deviceType: Defined;
    },
    DeviceBrand
  > => true,
  'Device',
);
export interface DeviceBrand {
  readonly Device: unique symbol;
}

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    device?: Device;
    debug?: {};
  } & {
    device: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      device: Device,
      debug: t.type({}),
    }),
    t.type({
      device: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      device?: Device;
      debug?: {};
    } & {
      device: Defined;
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
