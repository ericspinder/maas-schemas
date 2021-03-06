/*

undefined
Common definitions for different error and rejection conditions

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/components/errors.json';

// MaaS error reason definition
// A data structure to convey information about issues, rejections or service denial to the clients
export type Reason = t.Branded<
  {
    text?: string;
    errorCode?: string;
  },
  ReasonBrand
>;
export const Reason = t.brand(
  t.partial({
    text: t.string,
    errorCode: t.string,
  }),
  (
    x,
  ): x is t.Branded<
    {
      text?: string;
      errorCode?: string;
    },
    ReasonBrand
  > => true,
  'Reason',
);
export interface ReasonBrand {
  readonly Reason: unique symbol;
}

// Errors
// The default export. More information at the top.
export type Errors = t.Branded<unknown, ErrorsBrand>;
export const Errors = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, ErrorsBrand> => true,
  'Errors',
);
export interface ErrorsBrand {
  readonly Errors: unique symbol;
}

export default Errors;

// Success
