/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { ImagePreview_attachment$ref } from "./ImagePreview_attachment.graphql";
import { InvoicePreview_invoice$ref } from "./InvoicePreview_invoice.graphql";
import { PDFPreview_attachment$ref } from "./PDFPreview_attachment.graphql";
declare const _Message_message$ref: unique symbol;
export type Message_message$ref = typeof _Message_message$ref;
export type Message_message = {
    readonly body: string | null;
    readonly created_at: string | null;
    readonly is_from_user: boolean | null;
    readonly from: {
        readonly name: string | null;
    } | null;
    readonly invoice: {
        readonly payment_url: string | null;
        readonly " $fragmentRefs": InvoicePreview_invoice$ref;
    } | null;
    readonly attachments: ReadonlyArray<{
        readonly id: string;
        readonly internalID: string;
        readonly content_type: string;
        readonly download_url: string;
        readonly " $fragmentRefs": ImagePreview_attachment$ref & PDFPreview_attachment$ref;
    } | null> | null;
    readonly " $refType": Message_message$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Message_message",
  "type": "Message",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "body",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "created_at",
      "name": "createdAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "is_from_user",
      "name": "isFromUser",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "from",
      "storageKey": null,
      "args": null,
      "concreteType": "MessageInitiator",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "invoice",
      "storageKey": null,
      "args": null,
      "concreteType": "Invoice",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": "payment_url",
          "name": "paymentURL",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "InvoicePreview_invoice",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "attachments",
      "storageKey": null,
      "args": null,
      "concreteType": "Attachment",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "internalID",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": "content_type",
          "name": "contentType",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": "download_url",
          "name": "downloadURL",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "ImagePreview_attachment",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "PDFPreview_attachment",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = 'e7d7b851504d1975f1903ae5f63111a6';
export default node;
