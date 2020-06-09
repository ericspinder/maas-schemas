/*

undefined
Response schema for tsp-auth verify -> verification failure keys

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from '../../../core/booking';
import * as CustomerSelection_ from '../../../core/components/customerSelection';

export const schemaId =
  'http://maasglobal.com/maas-backend/tsp-auth/verify/definitions.json';

// VerificationFailureKey
// Failure key enum, identifying reason for the verification failure
export type VerificationFailureKey = t.Branded<
  string &
    (
      | 'UNKNOWN_ERROR'
      | 'NO_TOKEN_FOR_THE_USER'
      | 'INVALID_USER_TOKEN'
      | 'INVALID_USER'
      | 'EMPTY_PRODUCTS'
      | 'VERIFICATION_FAILURE'
    ),
  VerificationFailureKeyBrand
>;
export const VerificationFailureKey = t.brand(
  t.intersection([
    t.string,
    t.union([
      t.literal('UNKNOWN_ERROR'),
      t.literal('NO_TOKEN_FOR_THE_USER'),
      t.literal('INVALID_USER_TOKEN'),
      t.literal('INVALID_USER'),
      t.literal('EMPTY_PRODUCTS'),
      t.literal('VERIFICATION_FAILURE'),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    string &
      (
        | 'UNKNOWN_ERROR'
        | 'NO_TOKEN_FOR_THE_USER'
        | 'INVALID_USER_TOKEN'
        | 'INVALID_USER'
        | 'EMPTY_PRODUCTS'
        | 'VERIFICATION_FAILURE'
      ),
    VerificationFailureKeyBrand
  > => true,
  'VerificationFailureKey',
);
export interface VerificationFailureKeyBrand {
  readonly VerificationFailureKey: unique symbol;
}

// VerifiedProducts
// The list of verified products
export type VerifiedProducts = t.Branded<
  Array<{
    id?: Booking_.TspId;
    verified?: boolean;
  }>,
  VerifiedProductsBrand
>;
export const VerifiedProducts = t.brand(
  t.array(
    t.partial({
      id: Booking_.TspId,
      verified: t.boolean,
    }),
  ),
  (
    x,
  ): x is t.Branded<
    Array<{
      id?: Booking_.TspId;
      verified?: boolean;
    }>,
    VerifiedProductsBrand
  > => true,
  'VerifiedProducts',
);
export interface VerifiedProductsBrand {
  readonly VerifiedProducts: unique symbol;
}

// ProductsNeededVerification
// The list of products to verify
export type ProductsNeededVerification = t.Branded<
  Array<{
    id?: Booking_.TspId;
    customerSelection?: CustomerSelection_.CustomerSelection;
  }>,
  ProductsNeededVerificationBrand
>;
export const ProductsNeededVerification = t.brand(
  t.array(
    t.partial({
      id: Booking_.TspId,
      customerSelection: CustomerSelection_.CustomerSelection,
    }),
  ),
  (
    x,
  ): x is t.Branded<
    Array<{
      id?: Booking_.TspId;
      customerSelection?: CustomerSelection_.CustomerSelection;
    }>,
    ProductsNeededVerificationBrand
  > => true,
  'ProductsNeededVerification',
);
export interface ProductsNeededVerificationBrand {
  readonly ProductsNeededVerification: unique symbol;
}

// Definitions
// The default export. More information at the top.
export type Definitions = t.Branded<unknown, DefinitionsBrand>;
export const Definitions = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, DefinitionsBrand> => true,
  'Definitions',
);
export interface DefinitionsBrand {
  readonly Definitions: unique symbol;
}

export default Definitions;

// Success
