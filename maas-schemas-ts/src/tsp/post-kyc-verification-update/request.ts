/*

undefined
Request post KYC verification update

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Customer_ from '../../core/customer';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

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
  'http://maasglobal.com/tsp/post-kyc-verification-update/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    customer?: Customer_.Customer;
  } & {
    customer: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      customer: Customer_.Customer,
    }),
    t.type({
      customer: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customer?: Customer_.Customer;
    } & {
      customer: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}
/** require('io-ts-validator').validator(nonEmptyArray(Request)).decodeSync(examplesRequest) // => examplesRequest */
export const examplesRequest: NonEmptyArray<Request> = ([
  {
    customer: {
      firstName: 'John',
      lastName: 'Maas',
      opaqueId: '8da153248154d1b3f4f7322245f1c93a588dc6aac53c46d551a547c8524c315e',
      phone: '+35888999222',
      email: 'maasuser-test@maas.fi',
      documents: [
        {
          media: [
            { context: 'document-front', content: 'iVBORw0KGgoAAAANSUhEUgA' },
            { context: 'document-back', content: 'iVBORw0KGgoAAAANSUhEUgA' },
          ],
          type: 'DRIVERS_LICENSE',
          documentNumber: '491102155590',
          nameOnDocument: 'NGUYEN DUY HIEU',
          issuingCountry: 'JP',
          status: 'APPROVED',
          validFrom: '2018-10-12',
          validTo: '2022-02-21',
        },
      ],
    },
  },
] as unknown) as NonEmptyArray<Request>;

export default Request;

// Success
