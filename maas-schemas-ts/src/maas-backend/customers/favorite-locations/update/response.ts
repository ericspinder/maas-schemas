/*

undefined
MaaS customer favorite location updating response

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as PartialFavoriteLocation_ from '../../../../core/partialFavoriteLocation';

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
  'http://maasglobal.com/maas-backend/customers/favorite-locations/update/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    favoriteLocation?: PartialFavoriteLocation_.PartialFavoriteLocation & {
      type: Defined;
      name: Defined;
      location: Defined;
      id: Defined;
      identityId: Defined;
    };
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.partial({
    favoriteLocation: t.intersection([
      PartialFavoriteLocation_.PartialFavoriteLocation,
      t.type({
        type: Defined,
        name: Defined,
        location: Defined,
        id: Defined,
        identityId: Defined,
      }),
    ]),
  }),
  (
    x,
  ): x is t.Branded<
    {
      favoriteLocation?: PartialFavoriteLocation_.PartialFavoriteLocation & {
        type: Defined;
        name: Defined;
        location: Defined;
        id: Defined;
        identityId: Defined;
      };
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
