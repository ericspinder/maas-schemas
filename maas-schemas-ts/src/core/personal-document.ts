/*

undefined
Personal document object

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from './components/units';

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

export const schemaId = 'http://maasglobal.com/core/personal-document.json';

// DocumentType
// The purpose of this remains a mystery
export type DocumentType = t.Branded<string, DocumentTypeBrand>;
export const DocumentType = t.brand(
  t.string,
  (x): x is t.Branded<string, DocumentTypeBrand> => true,
  'DocumentType',
);
export interface DocumentTypeBrand {
  readonly DocumentType: unique symbol;
}

// DocumentStatus
// The purpose of this remains a mystery
export type DocumentStatus = t.Branded<
  string &
    (
      | 'PENDING'
      | 'APPROVED'
      | 'DECLINED'
      | 'EXPIRED'
      | 'RESUBMISSION_REQUESTED'
      | 'ABANDONED'
    ),
  DocumentStatusBrand
>;
export const DocumentStatus = t.brand(
  t.intersection([
    t.string,
    t.union([
      t.literal('PENDING'),
      t.literal('APPROVED'),
      t.literal('DECLINED'),
      t.literal('EXPIRED'),
      t.literal('RESUBMISSION_REQUESTED'),
      t.literal('ABANDONED'),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    string &
      (
        | 'PENDING'
        | 'APPROVED'
        | 'DECLINED'
        | 'EXPIRED'
        | 'RESUBMISSION_REQUESTED'
        | 'ABANDONED'
      ),
    DocumentStatusBrand
  > => true,
  'DocumentStatus',
);
export interface DocumentStatusBrand {
  readonly DocumentStatus: unique symbol;
}

// PartyId
// The purpose of this remains a mystery
export type PartyId = t.Branded<string, PartyIdBrand>;
export const PartyId = t.brand(
  t.string,
  (x): x is t.Branded<string, PartyIdBrand> =>
    (typeof x !== 'string' || x.length >= 1) && (typeof x !== 'string' || x.length <= 64),
  'PartyId',
);
export interface PartyIdBrand {
  readonly PartyId: unique symbol;
}

// PartyType
// The purpose of this remains a mystery
export type PartyType = t.Branded<string, PartyTypeBrand>;
export const PartyType = t.brand(
  t.string,
  (x): x is t.Branded<string, PartyTypeBrand> =>
    (typeof x !== 'string' || x.length >= 1) && (typeof x !== 'string' || x.length <= 64),
  'PartyType',
);
export interface PartyTypeBrand {
  readonly PartyType: unique symbol;
}

// PersonalDocument
// The default export. More information at the top.
export type PersonalDocument = t.Branded<
  {
    id?: Units_.Uuid;
    identityId?: Units_.IdentityId;
    type?: DocumentType;
    documentNumber?: string;
    nameOnDocument?: string;
    issuingCountry?: string;
    status?: DocumentStatus;
    validFrom?: Units_.IsoDate;
    validTo?: Units_.IsoDate;
    details?: {
      category?: string;
    };
    media?: Array<
      {
        content?: string;
        context?: string;
      } & {
        content: Defined;
        context: Defined;
      }
    >;
  } & {
    type: Defined;
    documentNumber: Defined;
    nameOnDocument: Defined;
    issuingCountry: Defined;
    status: Defined;
    validFrom: Defined;
    validTo: Defined;
  },
  PersonalDocumentBrand
>;
export const PersonalDocument = t.brand(
  t.intersection([
    t.partial({
      id: Units_.Uuid,
      identityId: Units_.IdentityId,
      type: DocumentType,
      documentNumber: t.string,
      nameOnDocument: t.string,
      issuingCountry: t.string,
      status: DocumentStatus,
      validFrom: Units_.IsoDate,
      validTo: Units_.IsoDate,
      details: t.partial({
        category: t.string,
      }),
      media: t.array(
        t.intersection([
          t.partial({
            content: t.string,
            context: t.string,
          }),
          t.type({
            content: Defined,
            context: Defined,
          }),
        ]),
      ),
    }),
    t.type({
      type: Defined,
      documentNumber: Defined,
      nameOnDocument: Defined,
      issuingCountry: Defined,
      status: Defined,
      validFrom: Defined,
      validTo: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: Units_.Uuid;
      identityId?: Units_.IdentityId;
      type?: DocumentType;
      documentNumber?: string;
      nameOnDocument?: string;
      issuingCountry?: string;
      status?: DocumentStatus;
      validFrom?: Units_.IsoDate;
      validTo?: Units_.IsoDate;
      details?: {
        category?: string;
      };
      media?: Array<
        {
          content?: string;
          context?: string;
        } & {
          content: Defined;
          context: Defined;
        }
      >;
    } & {
      type: Defined;
      documentNumber: Defined;
      nameOnDocument: Defined;
      issuingCountry: Defined;
      status: Defined;
      validFrom: Defined;
      validTo: Defined;
    },
    PersonalDocumentBrand
  > => true,
  'PersonalDocument',
);
export interface PersonalDocumentBrand {
  readonly PersonalDocument: unique symbol;
}

export default PersonalDocument;

// Success
