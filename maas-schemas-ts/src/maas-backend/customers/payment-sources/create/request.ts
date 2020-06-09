/*

undefined
MaaS customer payment sources create

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from '../../../../core/components/units';
import * as PaymentSource_ from '../paymentSource';
import * as ApiCommon_ from '../../../../core/components/api-common';

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
  'http://maasglobal.com/maas-backend/customers/payment-sources/create/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    customerId?: Units_.IdentityId;
    payload?: {
      paymentSource?: {
        gatewayName?: PaymentSource_.GatewayName;
        type?: PaymentSource_.Type;
        temporaryToken?: string;
        isDefault?: boolean;
        alias?: PaymentSource_.Alias;
      } & {
        type: Defined;
        gatewayName: Defined;
        temporaryToken: Defined;
        isDefault: Defined;
      };
    } & {
      paymentSource: Defined;
    };
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
    customerId: Defined;
    payload: Defined;
    headers: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      customerId: Units_.IdentityId,
      payload: t.intersection([
        t.partial({
          paymentSource: t.intersection([
            t.partial({
              gatewayName: PaymentSource_.GatewayName,
              type: PaymentSource_.Type,
              temporaryToken: t.string,
              isDefault: t.boolean,
              alias: PaymentSource_.Alias,
            }),
            t.type({
              type: Defined,
              gatewayName: Defined,
              temporaryToken: Defined,
              isDefault: Defined,
            }),
          ]),
        }),
        t.type({
          paymentSource: Defined,
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
      customerId: Defined,
      payload: Defined,
      headers: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      customerId?: Units_.IdentityId;
      payload?: {
        paymentSource?: {
          gatewayName?: PaymentSource_.GatewayName;
          type?: PaymentSource_.Type;
          temporaryToken?: string;
          isDefault?: boolean;
          alias?: PaymentSource_.Alias;
        } & {
          type: Defined;
          gatewayName: Defined;
          temporaryToken: Defined;
          isDefault: Defined;
        };
      } & {
        paymentSource: Defined;
      };
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
      customerId: Defined;
      payload: Defined;
      headers: Defined;
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
