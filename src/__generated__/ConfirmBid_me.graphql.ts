/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _ConfirmBid_me$ref: unique symbol;
export type ConfirmBid_me$ref = typeof _ConfirmBid_me$ref;
export type ConfirmBid_me = {
    readonly has_qualified_credit_cards: boolean | null;
    readonly bidders: ReadonlyArray<{
        readonly id: string;
    } | null> | null;
    readonly " $refType": ConfirmBid_me$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ConfirmBid_me",
  "type": "Me",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "saleID",
      "type": "String"
    }
  ],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": "has_qualified_credit_cards",
      "name": "hasQualifiedCreditCards",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "bidders",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "saleID",
          "variableName": "saleID"
        }
      ],
      "concreteType": "Bidder",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = '316558546349c6c6cd56a990b045c1e4';
export default node;
