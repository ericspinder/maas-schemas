/*

undefined
Request schema for initiating customer authorization for TSP

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Common_ from '../../core/components/common';
import * as Units_ from '../../core/components/units';
import * as I18n_ from '../../core/components/i18n';

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

export const schemaId = 'http://maasglobal.com/tsp/customer-auth/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    nonce?: Common_.EncodedQueryParam;
    returnUrl?: Units_.Url;
    locale?: I18n_.Locale;
  } & {
    nonce: Defined;
    returnUrl: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      nonce: Common_.EncodedQueryParam,
      returnUrl: Units_.Url,
      locale: I18n_.Locale,
    }),
    t.type({
      nonce: Defined,
      returnUrl: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      nonce?: Common_.EncodedQueryParam;
      returnUrl?: Units_.Url;
      locale?: I18n_.Locale;
    } & {
      nonce: Defined;
      returnUrl: Defined;
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
