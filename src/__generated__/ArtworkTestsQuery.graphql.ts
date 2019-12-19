/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtworkTestsQueryVariables = {};
export type ArtworkTestsQueryResponse = {
    readonly artwork: {
        readonly " $fragmentRefs": FragmentRefs<"Artwork_artwork">;
    } | null;
};
export type ArtworkTestsQuery = {
    readonly response: ArtworkTestsQueryResponse;
    readonly variables: ArtworkTestsQueryVariables;
};



/*
query ArtworkTestsQuery {
  artwork(id: "doesn't matter") {
    ...Artwork_artwork
    id
  }
}

fragment Artwork_artwork on Artwork {
  additional_information: additionalInformation
  description
  provenance
  exhibition_history: exhibitionHistory
  literature
  partner {
    type
    id
  }
  artist {
    biography_blurb: biographyBlurb {
      text
    }
    id
  }
  sale {
    id
    isBenefit
    isGalleryAuction
  }
  category
  conditionDescription {
    details
  }
  signature
  signatureInfo {
    details
  }
  certificateOfAuthenticity {
    details
  }
  framed {
    details
  }
  series
  publisher
  manufacturer
  image_rights: imageRights
  context {
    __typename
    ... on Sale {
      isAuction
    }
    ... on Node {
      id
    }
  }
  contextGrids {
    __typename
    artworks: artworksConnection(first: 6) {
      edges {
        node {
          id
        }
      }
    }
  }
  slug
  internalID
  id
  is_acquireable: isAcquireable
  is_offerable: isOfferable
  is_biddable: isBiddable
  is_inquireable: isInquireable
  availability
  ...PartnerCard_artwork
  ...AboutWork_artwork
  ...OtherWorks_artwork
  ...AboutArtist_artwork
  ...ArtworkDetails_artwork
  ...ContextCard_artwork
  ...ArtworkHeader_artwork
  ...CommercialInformation_artwork
  ...ArtworkHistory_artwork
}

fragment PartnerCard_artwork on Artwork {
  sale {
    isBenefit
    isGalleryAuction
    id
  }
  partner {
    cities
    is_default_profile_public: isDefaultProfilePublic
    type
    name
    slug
    id
    href
    initials
    profile {
      id
      internalID
      is_followed: isFollowed
      icon {
        url(version: "square140")
      }
    }
  }
}

fragment AboutWork_artwork on Artwork {
  additional_information: additionalInformation
  description
  isInAuction
}

fragment OtherWorks_artwork on Artwork {
  contextGrids {
    __typename
    title
    ctaTitle
    ctaHref
    artworks: artworksConnection(first: 6) {
      edges {
        node {
          ...GenericGrid_artworks
          id
        }
      }
    }
  }
}

fragment AboutArtist_artwork on Artwork {
  artists {
    id
    biography_blurb: biographyBlurb {
      text
    }
    ...ArtistListItem_artist
  }
}

fragment ArtworkDetails_artwork on Artwork {
  category
  conditionDescription {
    label
    details
  }
  signatureInfo {
    label
    details
  }
  certificateOfAuthenticity {
    label
    details
  }
  framed {
    label
    details
  }
  series
  publisher
  manufacturer
  image_rights: imageRights
}

fragment ContextCard_artwork on Artwork {
  id
  context {
    __typename
    ... on Sale {
      id
      name
      isLiveOpen
      href
      formattedStartDateTime
      isAuction
      coverImage {
        url
      }
    }
    ... on Fair {
      id
      name
      href
      exhibitionPeriod
      image {
        url
      }
    }
    ... on Show {
      id
      internalID
      slug
      name
      href
      exhibitionPeriod
      isFollowed
      coverImage {
        url
      }
    }
    ... on Node {
      id
    }
  }
}

fragment ArtworkHeader_artwork on Artwork {
  ...ArtworkActions_artwork
  ...ArtworkTombstone_artwork
  images {
    ...ImageCarousel_images
  }
}

fragment CommercialInformation_artwork on Artwork {
  isAcquireable
  isOfferable
  isInquireable
  isInAuction
  availability
  saleMessage
  isForSale
  artists {
    isConsignable
    id
  }
  editionSets {
    id
  }
  sale {
    isClosed
    isAuction
    isLiveOpen
    isPreview
    liveStartAt
    endAt
    startAt
    id
  }
  ...CommercialButtons_artwork
  ...CommercialPartnerInformation_artwork
  ...CommercialEditionSetInformation_artwork
  ...ArtworkExtraLinks_artwork
  ...AuctionPrice_artwork
}

fragment ArtworkHistory_artwork on Artwork {
  provenance
  exhibition_history: exhibitionHistory
  literature
}

fragment CommercialButtons_artwork on Artwork {
  slug
  isAcquireable
  isOfferable
  isInquireable
  isInAuction
  isBuyNowable
  isForSale
  editionSets {
    id
  }
  sale {
    isClosed
    id
  }
  ...BuyNowButton_artwork
  ...BidButton_artwork
  ...MakeOfferButton_artwork
}

fragment CommercialPartnerInformation_artwork on Artwork {
  availability
  isAcquireable
  isForSale
  isOfferable
  shippingOrigin
  shippingInfo
  priceIncludesTaxDisplay
  partner {
    name
    id
  }
}

fragment CommercialEditionSetInformation_artwork on Artwork {
  editionSets {
    id
    internalID
    saleMessage
    editionOf
    dimensions {
      in
      cm
    }
  }
  ...CommercialPartnerInformation_artwork
}

fragment ArtworkExtraLinks_artwork on Artwork {
  isAcquireable
  isInAuction
  isOfferable
  title
  isForSale
  sale {
    isClosed
    isBenefit
    partner {
      name
      id
    }
    id
  }
  artists {
    isConsignable
    name
    id
  }
  artist {
    name
    id
  }
}

fragment AuctionPrice_artwork on Artwork {
  sale {
    internalID
    isWithBuyersPremium
    isClosed
    isLiveOpen
    id
  }
  saleArtwork {
    reserveMessage
    currentBid {
      display
    }
    counts {
      bidderPositions
    }
    id
  }
  myLotStanding(live: true) {
    activeBid {
      isWinning
      id
    }
    mostRecentBid {
      maxBid {
        display
      }
      id
    }
  }
}

fragment BuyNowButton_artwork on Artwork {
  internalID
  saleMessage
}

fragment BidButton_artwork on Artwork {
  slug
  sale {
    slug
    registrationStatus {
      qualifiedForBidding
      id
    }
    isPreview
    isLiveOpen
    isClosed
    isRegistrationClosed
    id
  }
  myLotStanding(live: true) {
    mostRecentBid {
      maxBid {
        cents
      }
      id
    }
  }
  saleArtwork {
    increments {
      cents
    }
    id
  }
}

fragment MakeOfferButton_artwork on Artwork {
  internalID
}

fragment ArtworkActions_artwork on Artwork {
  id
  internalID
  slug
  title
  href
  is_saved: isSaved
  is_hangable: isHangable
  artists {
    name
    id
  }
  image {
    url
  }
  sale {
    isAuction
    isClosed
    id
  }
  widthCm
  heightCm
}

fragment ArtworkTombstone_artwork on Artwork {
  title
  isInAuction
  medium
  date
  cultural_maker: culturalMaker
  saleArtwork {
    lotLabel
    estimate
    id
  }
  partner {
    name
    id
  }
  sale {
    isClosed
    id
  }
  artists {
    name
    href
    ...FollowArtistButton_artist
    id
  }
  dimensions {
    in
    cm
  }
  edition_of: editionOf
  attribution_class: attributionClass {
    shortDescription
    id
  }
}

fragment ImageCarousel_images on Image {
  url: imageURL
  width
  height
  deepZoom {
    image: Image {
      tileSize: TileSize
      url: Url
      format: Format
      size: Size {
        width: Width
        height: Height
      }
    }
  }
}

fragment FollowArtistButton_artist on Artist {
  id
  slug
  internalID
  is_followed: isFollowed
}

fragment ArtistListItem_artist on Artist {
  id
  internalID
  slug
  name
  initials
  href
  is_followed: isFollowed
  nationality
  birthday
  deathday
  image {
    url
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
  is_biddable: isBiddable
  is_acquireable: isAcquireable
  is_offerable: isOfferable
  slug
  sale {
    is_auction: isAuction
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
    "value": "doesn't matter"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "initials",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "internalID",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": "is_followed",
  "name": "isFollowed",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "LinkedField",
  "alias": "biography_blurb",
  "name": "biographyBlurb",
  "storageKey": null,
  "args": null,
  "concreteType": "ArtistBlurb",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "text",
      "args": null,
      "storageKey": null
    }
  ]
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isAuction",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isLiveOpen",
  "args": null,
  "storageKey": null
},
v11 = [
  (v2/*: any*/),
  (v1/*: any*/)
],
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "partner",
  "storageKey": null,
  "args": null,
  "concreteType": "Partner",
  "plural": false,
  "selections": (v11/*: any*/)
},
v13 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "details",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "label",
    "args": null,
    "storageKey": null
  }
],
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v15 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "url",
    "args": null,
    "storageKey": null
  }
],
v16 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "coverImage",
  "storageKey": null,
  "args": null,
  "concreteType": "Image",
  "plural": false,
  "selections": (v15/*: any*/)
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "exhibitionPeriod",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "image",
  "storageKey": null,
  "args": null,
  "concreteType": "Image",
  "plural": false,
  "selections": (v15/*: any*/)
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "date",
  "args": null,
  "storageKey": null
},
v21 = {
  "kind": "ScalarField",
  "alias": "is_biddable",
  "name": "isBiddable",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "ScalarField",
  "alias": "is_acquireable",
  "name": "isAcquireable",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "ScalarField",
  "alias": "is_offerable",
  "name": "isOfferable",
  "args": null,
  "storageKey": null
},
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "display",
  "args": null,
  "storageKey": null
},
v25 = [
  (v24/*: any*/)
],
v26 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v27 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "dimensions",
  "storageKey": null,
  "args": null,
  "concreteType": "dimensions",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "in",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "cm",
      "args": null,
      "storageKey": null
    }
  ]
},
v28 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "saleMessage",
  "args": null,
  "storageKey": null
},
v29 = {
  "type": "Artwork",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v30 = {
  "type": "ID",
  "enumValues": null,
  "plural": false,
  "nullable": false
},
v31 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v32 = {
  "type": "Partner",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v33 = {
  "type": "Sale",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v34 = {
  "type": "ArtworkInfoRow",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v35 = {
  "type": "Boolean",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v36 = {
  "type": "ID",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v37 = {
  "type": "ArtistBlurb",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v38 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": false
},
v39 = {
  "type": "Artist",
  "enumValues": null,
  "plural": true,
  "nullable": true
},
v40 = {
  "type": "Image",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v41 = {
  "type": "Float",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v42 = {
  "type": "SaleArtwork",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v43 = {
  "type": "dimensions",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v44 = {
  "type": "Int",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v45 = {
  "type": "SaleArtworkCurrentBid",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v46 = {
  "type": "BidderPosition",
  "enumValues": null,
  "plural": false,
  "nullable": true
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ArtworkTestsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"doesn't matter\")",
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Artwork_artwork",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArtworkTestsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"doesn't matter\")",
        "args": (v0/*: any*/),
        "concreteType": "Artwork",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": "additional_information",
            "name": "additionalInformation",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "provenance",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "exhibition_history",
            "name": "exhibitionHistory",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "literature",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "partner",
            "storageKey": null,
            "args": null,
            "concreteType": "Partner",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "type",
                "args": null,
                "storageKey": null
              },
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cities",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": "is_default_profile_public",
                "name": "isDefaultProfilePublic",
                "args": null,
                "storageKey": null
              },
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "profile",
                "storageKey": null,
                "args": null,
                "concreteType": "Profile",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "icon",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Image",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "url",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "version",
                            "value": "square140"
                          }
                        ],
                        "storageKey": "url(version:\"square140\")"
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
            "name": "artist",
            "storageKey": null,
            "args": null,
            "concreteType": "Artist",
            "plural": false,
            "selections": [
              (v8/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sale",
            "storageKey": null,
            "args": null,
            "concreteType": "Sale",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isBenefit",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isGalleryAuction",
                "args": null,
                "storageKey": null
              },
              (v9/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isClosed",
                "args": null,
                "storageKey": null
              },
              (v10/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isPreview",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "liveStartAt",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endAt",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "startAt",
                "args": null,
                "storageKey": null
              },
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "registrationStatus",
                "storageKey": null,
                "args": null,
                "concreteType": "Bidder",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "qualifiedForBidding",
                    "args": null,
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isRegistrationClosed",
                "args": null,
                "storageKey": null
              },
              (v12/*: any*/),
              (v6/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isWithBuyersPremium",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "category",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "conditionDescription",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "plural": false,
            "selections": (v13/*: any*/)
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "signature",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "signatureInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "plural": false,
            "selections": (v13/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "certificateOfAuthenticity",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "plural": false,
            "selections": (v13/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "framed",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkInfoRow",
            "plural": false,
            "selections": (v13/*: any*/)
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "series",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "publisher",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "manufacturer",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "image_rights",
            "name": "imageRights",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "context",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              (v14/*: any*/),
              (v1/*: any*/),
              {
                "kind": "InlineFragment",
                "type": "Sale",
                "selections": [
                  (v9/*: any*/),
                  (v2/*: any*/),
                  (v10/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "formattedStartDateTime",
                    "args": null,
                    "storageKey": null
                  },
                  (v16/*: any*/)
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "Fair",
                "selections": [
                  (v2/*: any*/),
                  (v4/*: any*/),
                  (v17/*: any*/),
                  (v18/*: any*/)
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "Show",
                "selections": [
                  (v6/*: any*/),
                  (v3/*: any*/),
                  (v2/*: any*/),
                  (v4/*: any*/),
                  (v17/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isFollowed",
                    "args": null,
                    "storageKey": null
                  },
                  (v16/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "contextGrids",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": "artworks",
                "name": "artworksConnection",
                "storageKey": "artworksConnection(first:6)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 6
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
                          (v1/*: any*/),
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
                          (v19/*: any*/),
                          (v20/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": "sale_message",
                            "name": "saleMessage",
                            "args": null,
                            "storageKey": null
                          },
                          (v21/*: any*/),
                          (v22/*: any*/),
                          (v23/*: any*/),
                          (v3/*: any*/),
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
                              (v1/*: any*/)
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
                                "selections": (v25/*: any*/)
                              },
                              (v1/*: any*/)
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
                            "selections": (v11/*: any*/)
                          },
                          (v12/*: any*/),
                          (v4/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              },
              (v14/*: any*/),
              (v19/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "ctaTitle",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "ctaHref",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v3/*: any*/),
          (v6/*: any*/),
          (v1/*: any*/),
          (v22/*: any*/),
          (v23/*: any*/),
          (v21/*: any*/),
          {
            "kind": "ScalarField",
            "alias": "is_inquireable",
            "name": "isInquireable",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "availability",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isInAuction",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artists",
            "storageKey": null,
            "args": null,
            "concreteType": "Artist",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v8/*: any*/),
              (v6/*: any*/),
              (v3/*: any*/),
              (v2/*: any*/),
              (v5/*: any*/),
              (v4/*: any*/),
              (v7/*: any*/),
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
                "name": "birthday",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "deathday",
                "args": null,
                "storageKey": null
              },
              (v18/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isConsignable",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v19/*: any*/),
          (v4/*: any*/),
          {
            "kind": "ScalarField",
            "alias": "is_saved",
            "name": "isSaved",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "is_hangable",
            "name": "isHangable",
            "args": null,
            "storageKey": null
          },
          (v18/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "widthCm",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "heightCm",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "medium",
            "args": null,
            "storageKey": null
          },
          (v20/*: any*/),
          {
            "kind": "ScalarField",
            "alias": "cultural_maker",
            "name": "culturalMaker",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "saleArtwork",
            "storageKey": null,
            "args": null,
            "concreteType": "SaleArtwork",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "lotLabel",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "estimate",
                "args": null,
                "storageKey": null
              },
              (v1/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "increments",
                "storageKey": null,
                "args": null,
                "concreteType": "BidIncrementsFormatted",
                "plural": true,
                "selections": [
                  (v26/*: any*/)
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "reserveMessage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "currentBid",
                "storageKey": null,
                "args": null,
                "concreteType": "SaleArtworkCurrentBid",
                "plural": false,
                "selections": (v25/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "counts",
                "storageKey": null,
                "args": null,
                "concreteType": "SaleArtworkCounts",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "bidderPositions",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          (v27/*: any*/),
          {
            "kind": "ScalarField",
            "alias": "edition_of",
            "name": "editionOf",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": "attribution_class",
            "name": "attributionClass",
            "storageKey": null,
            "args": null,
            "concreteType": "AttributionClass",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "shortDescription",
                "args": null,
                "storageKey": null
              },
              (v1/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "images",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": "url",
                "name": "imageURL",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "width",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "height",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "deepZoom",
                "storageKey": null,
                "args": null,
                "concreteType": "DeepZoom",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": "image",
                    "name": "Image",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "DeepZoomImage",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": "tileSize",
                        "name": "TileSize",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "url",
                        "name": "Url",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "format",
                        "name": "Format",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": "size",
                        "name": "Size",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "DeepZoomImageSize",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": "width",
                            "name": "Width",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": "height",
                            "name": "Height",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isAcquireable",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isOfferable",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isInquireable",
            "args": null,
            "storageKey": null
          },
          (v28/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isForSale",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "editionSets",
            "storageKey": null,
            "args": null,
            "concreteType": "EditionSet",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v6/*: any*/),
              (v28/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "editionOf",
                "args": null,
                "storageKey": null
              },
              (v27/*: any*/)
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isBuyNowable",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "myLotStanding",
            "storageKey": "myLotStanding(live:true)",
            "args": [
              {
                "kind": "Literal",
                "name": "live",
                "value": true
              }
            ],
            "concreteType": "LotStanding",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "mostRecentBid",
                "storageKey": null,
                "args": null,
                "concreteType": "BidderPosition",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "maxBid",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "BidderPositionMaxBid",
                    "plural": false,
                    "selections": [
                      (v26/*: any*/),
                      (v24/*: any*/)
                    ]
                  },
                  (v1/*: any*/)
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "activeBid",
                "storageKey": null,
                "args": null,
                "concreteType": "BidderPosition",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isWinning",
                    "args": null,
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "shippingOrigin",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "shippingInfo",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "priceIncludesTaxDisplay",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ArtworkTestsQuery",
    "id": "caa640fd10a3af964a52847d612cea3d",
    "text": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "artwork": (v29/*: any*/),
        "artwork.id": (v30/*: any*/),
        "artwork.additional_information": (v31/*: any*/),
        "artwork.description": (v31/*: any*/),
        "artwork.provenance": (v31/*: any*/),
        "artwork.exhibition_history": (v31/*: any*/),
        "artwork.literature": (v31/*: any*/),
        "artwork.partner": (v32/*: any*/),
        "artwork.artist": {
          "type": "Artist",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "artwork.sale": (v33/*: any*/),
        "artwork.category": (v31/*: any*/),
        "artwork.conditionDescription": (v34/*: any*/),
        "artwork.signature": (v31/*: any*/),
        "artwork.signatureInfo": (v34/*: any*/),
        "artwork.certificateOfAuthenticity": (v34/*: any*/),
        "artwork.framed": (v34/*: any*/),
        "artwork.series": (v31/*: any*/),
        "artwork.publisher": (v31/*: any*/),
        "artwork.manufacturer": (v31/*: any*/),
        "artwork.image_rights": (v31/*: any*/),
        "artwork.context": {
          "type": "ArtworkContext",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "artwork.contextGrids": {
          "type": "ArtworkContextGrid",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "artwork.slug": (v30/*: any*/),
        "artwork.internalID": (v30/*: any*/),
        "artwork.is_acquireable": (v35/*: any*/),
        "artwork.is_offerable": (v35/*: any*/),
        "artwork.is_biddable": (v35/*: any*/),
        "artwork.is_inquireable": (v35/*: any*/),
        "artwork.availability": (v31/*: any*/),
        "artwork.partner.type": (v31/*: any*/),
        "artwork.partner.id": (v36/*: any*/),
        "artwork.artist.biography_blurb": (v37/*: any*/),
        "artwork.artist.id": (v36/*: any*/),
        "artwork.sale.id": (v36/*: any*/),
        "artwork.sale.isBenefit": (v35/*: any*/),
        "artwork.sale.isGalleryAuction": (v35/*: any*/),
        "artwork.conditionDescription.details": (v31/*: any*/),
        "artwork.signatureInfo.details": (v31/*: any*/),
        "artwork.certificateOfAuthenticity.details": (v31/*: any*/),
        "artwork.framed.details": (v31/*: any*/),
        "artwork.context.__typename": (v38/*: any*/),
        "artwork.contextGrids.artworks": {
          "type": "ArtworkConnection",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "artwork.isInAuction": (v35/*: any*/),
        "artwork.artists": (v39/*: any*/),
        "artwork.images": {
          "type": "Image",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "artwork.isAcquireable": (v35/*: any*/),
        "artwork.isOfferable": (v35/*: any*/),
        "artwork.isInquireable": (v35/*: any*/),
        "artwork.saleMessage": (v31/*: any*/),
        "artwork.isForSale": (v35/*: any*/),
        "artwork.editionSets": {
          "type": "EditionSet",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "artwork.artist.biography_blurb.text": (v31/*: any*/),
        "artwork.context.isAuction": (v35/*: any*/),
        "artwork.context.id": (v36/*: any*/),
        "artwork.contextGrids.artworks.edges": {
          "type": "ArtworkEdge",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "artwork.partner.cities": {
          "type": "String",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "artwork.partner.is_default_profile_public": (v35/*: any*/),
        "artwork.partner.name": (v31/*: any*/),
        "artwork.partner.slug": (v30/*: any*/),
        "artwork.partner.href": (v31/*: any*/),
        "artwork.partner.initials": (v31/*: any*/),
        "artwork.partner.profile": {
          "type": "Profile",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "artwork.contextGrids.__typename": (v38/*: any*/),
        "artwork.contextGrids.title": (v31/*: any*/),
        "artwork.contextGrids.ctaTitle": (v31/*: any*/),
        "artwork.contextGrids.ctaHref": (v31/*: any*/),
        "artwork.artists.id": (v30/*: any*/),
        "artwork.artists.biography_blurb": (v37/*: any*/),
        "artwork.conditionDescription.label": (v31/*: any*/),
        "artwork.signatureInfo.label": (v31/*: any*/),
        "artwork.certificateOfAuthenticity.label": (v31/*: any*/),
        "artwork.framed.label": (v31/*: any*/),
        "artwork.title": (v31/*: any*/),
        "artwork.href": (v31/*: any*/),
        "artwork.is_saved": (v35/*: any*/),
        "artwork.is_hangable": (v35/*: any*/),
        "artwork.image": (v40/*: any*/),
        "artwork.widthCm": (v41/*: any*/),
        "artwork.heightCm": (v41/*: any*/),
        "artwork.medium": (v31/*: any*/),
        "artwork.date": (v31/*: any*/),
        "artwork.cultural_maker": (v31/*: any*/),
        "artwork.saleArtwork": (v42/*: any*/),
        "artwork.dimensions": (v43/*: any*/),
        "artwork.edition_of": (v31/*: any*/),
        "artwork.attribution_class": {
          "type": "AttributionClass",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "artwork.artists.isConsignable": (v35/*: any*/),
        "artwork.editionSets.id": (v30/*: any*/),
        "artwork.sale.isClosed": (v35/*: any*/),
        "artwork.sale.isAuction": (v35/*: any*/),
        "artwork.sale.isLiveOpen": (v35/*: any*/),
        "artwork.sale.isPreview": (v35/*: any*/),
        "artwork.sale.liveStartAt": (v31/*: any*/),
        "artwork.sale.endAt": (v31/*: any*/),
        "artwork.sale.startAt": (v31/*: any*/),
        "artwork.isBuyNowable": (v35/*: any*/),
        "artwork.shippingOrigin": (v31/*: any*/),
        "artwork.shippingInfo": (v31/*: any*/),
        "artwork.priceIncludesTaxDisplay": (v31/*: any*/),
        "artwork.myLotStanding": {
          "type": "LotStanding",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "artwork.contextGrids.artworks.edges.node": (v29/*: any*/),
        "artwork.partner.profile.id": (v30/*: any*/),
        "artwork.partner.profile.internalID": (v30/*: any*/),
        "artwork.partner.profile.is_followed": (v35/*: any*/),
        "artwork.partner.profile.icon": (v40/*: any*/),
        "artwork.artists.biography_blurb.text": (v31/*: any*/),
        "artwork.artists.internalID": (v30/*: any*/),
        "artwork.artists.slug": (v30/*: any*/),
        "artwork.artists.name": (v31/*: any*/),
        "artwork.artists.initials": (v31/*: any*/),
        "artwork.artists.href": (v31/*: any*/),
        "artwork.artists.is_followed": (v35/*: any*/),
        "artwork.artists.nationality": (v31/*: any*/),
        "artwork.artists.birthday": (v31/*: any*/),
        "artwork.artists.deathday": (v31/*: any*/),
        "artwork.artists.image": (v40/*: any*/),
        "artwork.context.name": (v31/*: any*/),
        "artwork.context.isLiveOpen": (v35/*: any*/),
        "artwork.context.href": (v31/*: any*/),
        "artwork.context.formattedStartDateTime": (v31/*: any*/),
        "artwork.context.coverImage": (v40/*: any*/),
        "artwork.context.exhibitionPeriod": (v31/*: any*/),
        "artwork.context.image": (v40/*: any*/),
        "artwork.context.internalID": (v30/*: any*/),
        "artwork.context.slug": (v30/*: any*/),
        "artwork.context.isFollowed": (v35/*: any*/),
        "artwork.image.url": (v31/*: any*/),
        "artwork.saleArtwork.lotLabel": (v31/*: any*/),
        "artwork.saleArtwork.estimate": (v31/*: any*/),
        "artwork.saleArtwork.id": (v36/*: any*/),
        "artwork.dimensions.in": (v31/*: any*/),
        "artwork.dimensions.cm": (v31/*: any*/),
        "artwork.attribution_class.shortDescription": (v31/*: any*/),
        "artwork.attribution_class.id": (v36/*: any*/),
        "artwork.images.url": (v31/*: any*/),
        "artwork.images.width": (v44/*: any*/),
        "artwork.images.height": (v44/*: any*/),
        "artwork.images.deepZoom": {
          "type": "DeepZoom",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "artwork.editionSets.internalID": (v30/*: any*/),
        "artwork.editionSets.saleMessage": (v31/*: any*/),
        "artwork.editionSets.editionOf": (v31/*: any*/),
        "artwork.editionSets.dimensions": (v43/*: any*/),
        "artwork.sale.partner": (v32/*: any*/),
        "artwork.artist.name": (v31/*: any*/),
        "artwork.sale.internalID": (v30/*: any*/),
        "artwork.sale.isWithBuyersPremium": (v35/*: any*/),
        "artwork.saleArtwork.reserveMessage": (v31/*: any*/),
        "artwork.saleArtwork.currentBid": (v45/*: any*/),
        "artwork.saleArtwork.counts": {
          "type": "SaleArtworkCounts",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "artwork.myLotStanding.activeBid": (v46/*: any*/),
        "artwork.myLotStanding.mostRecentBid": (v46/*: any*/),
        "artwork.contextGrids.artworks.edges.node.id": (v30/*: any*/),
        "artwork.partner.profile.icon.url": (v31/*: any*/),
        "artwork.artists.image.url": (v31/*: any*/),
        "artwork.context.coverImage.url": (v31/*: any*/),
        "artwork.context.image.url": (v31/*: any*/),
        "artwork.images.deepZoom.image": {
          "type": "DeepZoomImage",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "artwork.sale.slug": (v30/*: any*/),
        "artwork.sale.registrationStatus": {
          "type": "Bidder",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "artwork.sale.isRegistrationClosed": (v35/*: any*/),
        "artwork.saleArtwork.increments": {
          "type": "BidIncrementsFormatted",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "artwork.editionSets.dimensions.in": (v31/*: any*/),
        "artwork.editionSets.dimensions.cm": (v31/*: any*/),
        "artwork.sale.partner.name": (v31/*: any*/),
        "artwork.sale.partner.id": (v36/*: any*/),
        "artwork.saleArtwork.currentBid.display": (v31/*: any*/),
        "artwork.saleArtwork.counts.bidderPositions": {
          "type": "FormattedNumber",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "artwork.myLotStanding.activeBid.isWinning": (v35/*: any*/),
        "artwork.myLotStanding.activeBid.id": (v36/*: any*/),
        "artwork.myLotStanding.mostRecentBid.maxBid": {
          "type": "BidderPositionMaxBid",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "artwork.myLotStanding.mostRecentBid.id": (v36/*: any*/),
        "artwork.images.deepZoom.image.tileSize": (v44/*: any*/),
        "artwork.images.deepZoom.image.url": (v31/*: any*/),
        "artwork.images.deepZoom.image.format": (v31/*: any*/),
        "artwork.images.deepZoom.image.size": {
          "type": "DeepZoomImageSize",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "artwork.sale.registrationStatus.qualifiedForBidding": (v35/*: any*/),
        "artwork.sale.registrationStatus.id": (v36/*: any*/),
        "artwork.saleArtwork.increments.cents": (v41/*: any*/),
        "artwork.myLotStanding.mostRecentBid.maxBid.display": (v31/*: any*/),
        "artwork.contextGrids.artworks.edges.node.image": (v40/*: any*/),
        "artwork.images.deepZoom.image.size.width": (v44/*: any*/),
        "artwork.images.deepZoom.image.size.height": (v44/*: any*/),
        "artwork.myLotStanding.mostRecentBid.maxBid.cents": (v41/*: any*/),
        "artwork.contextGrids.artworks.edges.node.image.aspect_ratio": {
          "type": "Float",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "artwork.contextGrids.artworks.edges.node.title": (v31/*: any*/),
        "artwork.contextGrids.artworks.edges.node.date": (v31/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale_message": (v31/*: any*/),
        "artwork.contextGrids.artworks.edges.node.is_biddable": (v35/*: any*/),
        "artwork.contextGrids.artworks.edges.node.is_acquireable": (v35/*: any*/),
        "artwork.contextGrids.artworks.edges.node.is_offerable": (v35/*: any*/),
        "artwork.contextGrids.artworks.edges.node.slug": (v30/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale": (v33/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale_artwork": (v42/*: any*/),
        "artwork.contextGrids.artworks.edges.node.artists": (v39/*: any*/),
        "artwork.contextGrids.artworks.edges.node.partner": (v32/*: any*/),
        "artwork.contextGrids.artworks.edges.node.href": (v31/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale.is_auction": (v35/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale.is_closed": (v35/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale.display_timely_at": (v31/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale.id": (v36/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale_artwork.current_bid": (v45/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale_artwork.id": (v36/*: any*/),
        "artwork.contextGrids.artworks.edges.node.image.url": (v31/*: any*/),
        "artwork.contextGrids.artworks.edges.node.artists.name": (v31/*: any*/),
        "artwork.contextGrids.artworks.edges.node.artists.id": (v36/*: any*/),
        "artwork.contextGrids.artworks.edges.node.partner.name": (v31/*: any*/),
        "artwork.contextGrids.artworks.edges.node.partner.id": (v36/*: any*/),
        "artwork.contextGrids.artworks.edges.node.sale_artwork.current_bid.display": (v31/*: any*/)
      }
    }
  }
};
})();
(node as any).hash = '42f05c48bd7612199a2c94fa48e5ddef';
export default node;
