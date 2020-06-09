/*

undefined
Response schema for subscriptions-update

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Subscription_ from '../subscription';

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
  'http://maasglobal.com/maas-backend/subscriptions/subscriptions-update/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    subscription?: Subscription_.Subscription;
    immediateUpdate?: boolean;
    debug?: {};
  } & {
    subscription: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      subscription: Subscription_.Subscription,
      immediateUpdate: t.boolean,
      debug: t.type({}),
    }),
    t.type({
      subscription: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      subscription?: Subscription_.Subscription;
      immediateUpdate?: boolean;
      debug?: {};
    } & {
      subscription: Defined;
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
