/*

undefined
Schema for MODE_FERRY meta field

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/modes/MODE_FERRY.json';

// MODE_FERRY
// The default export. More information at the top.
export type MODE_FERRY = t.Branded<{}, MODE_FERRYBrand>;
export const MODE_FERRY = t.brand(
  t.type({}),
  (x): x is t.Branded<{}, MODE_FERRYBrand> => true,
  'MODE_FERRY',
);
export interface MODE_FERRYBrand {
  readonly MODE_FERRY: unique symbol;
}

export default MODE_FERRY;

// Success
