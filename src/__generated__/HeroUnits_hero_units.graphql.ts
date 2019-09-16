/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _HeroUnits_hero_units$ref: unique symbol;
export type HeroUnits_hero_units$ref = typeof _HeroUnits_hero_units$ref;
export type HeroUnits_hero_units = ReadonlyArray<{
    readonly id: string;
    readonly title: string | null;
    readonly href: string | null;
    readonly heading: string | null;
    readonly narrow_image_url: string | null;
    readonly wide_image_url: string | null;
    readonly " $refType": HeroUnits_hero_units$ref;
}>;



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "HeroUnits_hero_units",
  "type": "HomePageHeroUnit",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
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
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "href",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "heading",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "narrow_image_url",
      "name": "backgroundImageURL",
      "args": [
        {
          "kind": "Literal",
          "name": "version",
          "value": "NARROW"
        }
      ],
      "storageKey": "backgroundImageURL(version:\"NARROW\")"
    },
    {
      "kind": "ScalarField",
      "alias": "wide_image_url",
      "name": "backgroundImageURL",
      "args": [
        {
          "kind": "Literal",
          "name": "version",
          "value": "WIDE"
        }
      ],
      "storageKey": "backgroundImageURL(version:\"WIDE\")"
    }
  ]
};
(node as any).hash = '4f027cedec5f897a10440af5d716eaf0';
export default node;
