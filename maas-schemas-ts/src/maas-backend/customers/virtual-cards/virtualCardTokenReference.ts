/*

undefined
MaaS virtual card schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from '../../../core/components/common';
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
  'http://maasglobal.com/maas-backend/customers/virtual-cards/virtualCardTokenReference.json';

// VirtualCardTokenReference
// The default export. More information at the top.
export type VirtualCardTokenReference = t.Branded<
  {
    id?: number;
    tokenReferenceId?: string;
    userDevicesId?: number;
    appInstanceId?: Common_.AppInstanceId;
    walletPlatform?: string & ('APPLE' | 'GOOGLE');
    added?: Units_.Time;
    deviceType?: string & ('SMARTPHONE' | 'WEARABLE');
    hasExtendedData?: boolean;
    extendedData?: string;
  } & (
    | {
        id: Defined;
        userDevicesId: Defined;
        appInstanceId: Defined;
        walletPlatform: Defined;
        added: Defined;
        deviceType: Defined;
        hasExtendedData: Defined;
        tokenReferenceId: Defined;
      }
    | {
        id: Defined;
        userDevicesId: Defined;
        appInstanceId: Defined;
        walletPlatform: Defined;
        added: Defined;
        deviceType: Defined;
        hasExtendedData: Defined;
        extendedData: Defined;
      }
  ),
  VirtualCardTokenReferenceBrand
>;
export const VirtualCardTokenReference = t.brand(
  t.intersection([
    t.partial({
      id: t.number,
      tokenReferenceId: t.string,
      userDevicesId: t.number,
      appInstanceId: Common_.AppInstanceId,
      walletPlatform: t.intersection([
        t.string,
        t.union([t.literal('APPLE'), t.literal('GOOGLE')]),
      ]),
      added: Units_.Time,
      deviceType: t.intersection([
        t.string,
        t.union([t.literal('SMARTPHONE'), t.literal('WEARABLE')]),
      ]),
      hasExtendedData: t.boolean,
      extendedData: t.string,
    }),
    t.union([
      t.type({
        id: Defined,
        userDevicesId: Defined,
        appInstanceId: Defined,
        walletPlatform: Defined,
        added: Defined,
        deviceType: Defined,
        hasExtendedData: Defined,
        tokenReferenceId: Defined,
      }),
      t.type({
        id: Defined,
        userDevicesId: Defined,
        appInstanceId: Defined,
        walletPlatform: Defined,
        added: Defined,
        deviceType: Defined,
        hasExtendedData: Defined,
        extendedData: Defined,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: number;
      tokenReferenceId?: string;
      userDevicesId?: number;
      appInstanceId?: Common_.AppInstanceId;
      walletPlatform?: string & ('APPLE' | 'GOOGLE');
      added?: Units_.Time;
      deviceType?: string & ('SMARTPHONE' | 'WEARABLE');
      hasExtendedData?: boolean;
      extendedData?: string;
    } & (
      | {
          id: Defined;
          userDevicesId: Defined;
          appInstanceId: Defined;
          walletPlatform: Defined;
          added: Defined;
          deviceType: Defined;
          hasExtendedData: Defined;
          tokenReferenceId: Defined;
        }
      | {
          id: Defined;
          userDevicesId: Defined;
          appInstanceId: Defined;
          walletPlatform: Defined;
          added: Defined;
          deviceType: Defined;
          hasExtendedData: Defined;
          extendedData: Defined;
        }
    ),
    VirtualCardTokenReferenceBrand
  > => true,
  'VirtualCardTokenReference',
);
export interface VirtualCardTokenReferenceBrand {
  readonly VirtualCardTokenReference: unique symbol;
}

export default VirtualCardTokenReference;

// Success
