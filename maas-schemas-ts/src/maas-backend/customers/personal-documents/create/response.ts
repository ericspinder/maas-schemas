/*

undefined
Insert a pending verification personal document object

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as PersonalDocument_ from '../../../../core/personal-document';

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
  'http://maasglobal.com/maas-backend/customers/personal-documents/create/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    type?: PersonalDocument_.DocumentType;
    status?: PersonalDocument_.DocumentStatus;
  } & {
    type: Defined;
    status: Defined;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.intersection([
    t.partial({
      type: PersonalDocument_.DocumentType,
      status: PersonalDocument_.DocumentStatus,
    }),
    t.type({
      type: Defined,
      status: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: PersonalDocument_.DocumentType;
      status?: PersonalDocument_.DocumentStatus;
    } & {
      type: Defined;
      status: Defined;
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
