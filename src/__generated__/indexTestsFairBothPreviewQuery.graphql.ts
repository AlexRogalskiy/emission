/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FairBoothPreview_show$ref } from "./FairBoothPreview_show.graphql";
export type indexTestsFairBothPreviewQueryVariables = {};
export type indexTestsFairBothPreviewQueryResponse = {
    readonly show: {
        readonly " $fragmentRefs": FairBoothPreview_show$ref;
    } | null;
};
export type indexTestsFairBothPreviewQuery = {
    readonly response: indexTestsFairBothPreviewQueryResponse;
    readonly variables: indexTestsFairBothPreviewQueryVariables;
};



/*
query indexTestsFairBothPreviewQuery {
  show(id: "abxy-blk-and-blue") {
    ...FairBoothPreview_show
    id
  }
}

fragment FairBoothPreview_show on Show {
  slug
  internalID
  counts {
    artworks
  }
  partner {
    __typename
    ... on Partner {
      name
      href
      slug
      internalID
      id
      profile {
        id
        slug
        internalID
        isFollowed
      }
    }
    ... on Node {
      id
    }
    ... on ExternalPartner {
      id
    }
  }
  coverImage {
    url
  }
  location {
    display
    id
  }
  artworks: artworksConnection(first: 4) {
    edges {
      node {
        ...GenericGrid_artworks
        id
      }
    }
  }
}

fragment GenericGrid_artworks on Artwork {
  id
  image {
    aspect_ratio: aspectRatio
  }
  ...ArtworkGridItem_artwork
}

fragment ArtworkGridItem_artwork on Artwork {
  title
  date
  sale_message: saleMessage
  is_in_auction: isInAuction
  is_biddable: isBiddable
  is_acquireable: isAcquireable
  is_offerable: isOfferable
  slug
  sale {
    is_auction: isAuction
    is_live_open: isLiveOpen
    is_open: isOpen
    is_closed: isClosed
    display_timely_at: displayTimelyAt
    id
  }
  sale_artwork: saleArtwork {
    current_bid: currentBid {
      display
    }
    id
  }
  image {
    url(version: "large")
    aspect_ratio: aspectRatio
  }
  artists(shallow: true) {
    name
    id
  }
  partner {
    name
    id
  }
  href
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "abxy-blk-and-blue"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "internalID",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "display",
  "args": null,
  "storageKey": null
},
v7 = [
  (v4/*: any*/),
  (v3/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "indexTestsFairBothPreviewQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "show",
        "storageKey": "show(id:\"abxy-blk-and-blue\")",
        "args": (v0/*: any*/),
        "concreteType": "Show",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "FairBoothPreview_show",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "indexTestsFairBothPreviewQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "show",
        "storageKey": "show(id:\"abxy-blk-and-blue\")",
        "args": (v0/*: any*/),
        "concreteType": "Show",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "counts",
            "storageKey": null,
            "args": null,
            "concreteType": "ShowCounts",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "artworks",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "partner",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              },
              (v3/*: any*/),
              {
                "kind": "InlineFragment",
                "type": "Partner",
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "profile",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Profile",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v1/*: any*/),
                      (v2/*: any*/),
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
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "coverImage",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
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
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "location",
            "storageKey": null,
            "args": null,
            "concreteType": "Location",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v3/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "artworks",
            "name": "artworksConnection",
            "storageKey": "artworksConnection(first:4)",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 4
              }
            ],
            "concreteType": "ArtworkConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ArtworkEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Artwork",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
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
                            "kind": "ScalarField",
                            "alias": "aspect_ratio",
                            "name": "aspectRatio",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "url",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "version",
                                "value": "large"
                              }
                            ],
                            "storageKey": "url(version:\"large\")"
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "date",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "sale_message",
                        "name": "saleMessage",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "is_in_auction",
                        "name": "isInAuction",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "is_biddable",
                        "name": "isBiddable",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "is_acquireable",
                        "name": "isAcquireable",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "is_offerable",
                        "name": "isOfferable",
                        "args": null,
                        "storageKey": null
                      },
                      (v1/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "sale",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Sale",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": "is_auction",
                            "name": "isAuction",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": "is_live_open",
                            "name": "isLiveOpen",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": "is_open",
                            "name": "isOpen",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": "is_closed",
                            "name": "isClosed",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": "display_timely_at",
                            "name": "displayTimelyAt",
                            "args": null,
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": "sale_artwork",
                        "name": "saleArtwork",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SaleArtwork",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": "current_bid",
                            "name": "currentBid",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SaleArtworkCurrentBid",
                            "plural": false,
                            "selections": [
                              (v6/*: any*/)
                            ]
                          },
                          (v3/*: any*/)
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "artists",
                        "storageKey": "artists(shallow:true)",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "shallow",
                            "value": true
                          }
                        ],
                        "concreteType": "Artist",
                        "plural": true,
                        "selections": (v7/*: any*/)
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "partner",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Partner",
                        "plural": false,
                        "selections": (v7/*: any*/)
                      },
                      (v5/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "indexTestsFairBothPreviewQuery",
    "id": "3bac4a6ef697f9bbf3d94d9d54de9260",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = 'bc73543ff24fdb5c115822d142772bba';
export default node;
