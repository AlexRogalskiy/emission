/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type FeaturedArtists_collection = {
    readonly artworksConnection: {
        readonly merchandisableArtists: ReadonlyArray<{
            readonly id: string;
            readonly slug: string;
            readonly internalID: string;
            readonly name: string | null;
            readonly image: {
                readonly resized: {
                    readonly url: string | null;
                } | null;
            } | null;
            readonly birthday: string | null;
            readonly nationality: string | null;
            readonly isFollowed: boolean | null;
        } | null> | null;
    } | null;
    readonly query: {
        readonly artistIDs: ReadonlyArray<string> | null;
    };
    readonly featuredArtistExclusionIds: ReadonlyArray<string> | null;
    readonly " $refType": "FeaturedArtists_collection";
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "FeaturedArtists_collection",
  "type": "MarketingCollection",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "screenWidth",
      "type": "Int",
      "defaultValue": 500
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "artworksConnection",
      "storageKey": "artworksConnection(aggregations:[\"MERCHANDISABLE_ARTISTS\"],size:9,sort:\"-decayed_merch\")",
      "args": [
        {
          "kind": "Literal",
          "name": "aggregations",
          "value": [
            "MERCHANDISABLE_ARTISTS"
          ]
        },
        {
          "kind": "Literal",
          "name": "size",
          "value": 9
        },
        {
          "kind": "Literal",
          "name": "sort",
          "value": "-decayed_merch"
        }
      ],
      "concreteType": "FilterArtworksConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "merchandisableArtists",
          "storageKey": null,
          "args": null,
          "concreteType": "Artist",
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
              "name": "slug",
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
              "alias": null,
              "name": "name",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "image",
              "storageKey": null,
              "args": null,
              "concreteType": "Image",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "resized",
                  "storageKey": null,
                  "args": [
                    {
                      "kind": "Variable",
                      "name": "width",
                      "variableName": "screenWidth"
                    }
                  ],
                  "concreteType": "ResizedImageUrl",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "url",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "birthday",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "nationality",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "isFollowed",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "query",
      "storageKey": null,
      "args": null,
      "concreteType": "MarketingCollectionQuery",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "artistIDs",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "featuredArtistExclusionIds",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '4656aea6bb48221c3198fa2d168e476e';
export default node;
