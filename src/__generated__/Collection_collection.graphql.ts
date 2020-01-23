/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Collection_collection = {
    readonly id: string;
    readonly slug: string;
    readonly " $fragmentRefs": FragmentRefs<"CollectionHeader_collection" | "CollectionArtworks_collection" | "FeaturedArtists_collection">;
    readonly " $refType": "Collection_collection";
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Variable",
  "name": "screenWidth",
  "variableName": "screenWidth"
};
return {
  "kind": "Fragment",
  "name": "Collection_collection",
  "type": "MarketingCollection",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "screenWidth",
      "type": "Int",
      "defaultValue": 500
    },
    {
      "kind": "LocalArgument",
      "name": "headerHeight",
      "type": "Int",
      "defaultValue": 204
    }
  ],
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
      "name": "slug",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "CollectionHeader_collection",
      "args": [
        {
          "kind": "Variable",
          "name": "headerHeight",
          "variableName": "headerHeight"
        },
        (v0/*: any*/)
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "CollectionArtworks_collection",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "FeaturedArtists_collection",
      "args": [
        (v0/*: any*/)
      ]
    }
  ]
};
})();
(node as any).hash = 'c466937a7fdbb42629780e7c4836e6e9';
export default node;
