/*

undefined
Request schema for retrieving a ticket from booking through a TSP adapter

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from '../../core/booking';

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

export const schemaId = 'http://maasglobal.com/tsp/booking-ticket/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    tspId?: Booking_.TspId;
    ticket?: string | Array<string>;
    token?: Booking_.Token;
  } & {
    ticket: Defined;
    token: Defined;
    tspId: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      tspId: Booking_.TspId,
      ticket: t.union([t.string, t.array(t.string)]),
      token: Booking_.Token,
    }),
    t.type({
      ticket: Defined,
      token: Defined,
      tspId: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      tspId?: Booking_.TspId;
      ticket?: string | Array<string>;
      token?: Booking_.Token;
    } & {
      ticket: Defined;
      token: Defined;
      tspId: Defined;
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
