/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Artist_artist = {
    readonly internalID: string;
    readonly slug: string;
    readonly has_metadata: boolean | null;
    readonly counts: {
        readonly artworks: number | null;
        readonly partner_shows: number | null;
        readonly related_artists: number | null;
        readonly articles: number | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ArtistHeader_artist" | "ArtistAbout_artist" | "ArtistShows_artist" | "ArtistArtworks_artist">;
    readonly " $refType": "Artist_artist";
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Artist_artist",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "name": "slug",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "has_metadata",
      "name": "hasMetadata",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "counts",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtistCounts",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "artworks",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": "partner_shows",
          "name": "partnerShows",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": "related_artists",
          "name": "relatedArtists",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "articles",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "ArtistHeader_artist",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ArtistAbout_artist",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ArtistShows_artist",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ArtistArtworks_artist",
      "args": null
    }
  ]
};
(node as any).hash = 'fdbddf65bd6badfcca6c1bb991f9d51f';
export default node;
