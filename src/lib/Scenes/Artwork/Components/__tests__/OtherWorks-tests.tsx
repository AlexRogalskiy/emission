import { shallow } from "enzyme"
import { ArtworkFixture } from "lib/__fixtures__/ArtworkFixture"
import React from "react"
import { ArtworkContextArtistFragmentContainer as ArtworkContextArtist } from "../OtherWorks/ArtworkContexts/ArtworkContextArtist"
import { OtherWorksFragmentContainer as OtherWorks } from "../OtherWorks/index"

describe("OtherWorks", () => {
  it("renders ArtistArtworkGrid with empty context", () => {
    const regularArtwork = {
      ...ArtworkFixture,
      context: null as any,
    }
    const component = shallow(<OtherWorks artwork={regularArtwork} />)
    expect(component.find(ArtworkContextArtist).length).toEqual(1)
    const componentText = component
      .find(ArtworkContextArtist)
      .at(0)
      .render()
      .text()
    expect(componentText).toContain("Other works by Abbas Kiarostami")
    expect(componentText).toContain("Other works from CAMA Gallery")
    expect(componentText).toContain("Related Works")
  })

  it("renders ArtistArtworkGrid with correct components", () => {
    const regularArtwork = {
      ...ArtworkFixture,
      context: "ArtworkContextArtist",
    }
    const component = shallow(<OtherWorks artwork={regularArtwork} />)
    expect(component.find(ArtworkContextArtist).length).toEqual(1)
    const componentText = component
      .find(ArtworkContextArtist)
      .at(0)
      .render()
      .text()
    expect(componentText).toContain("Other works by Abbas Kiarostami")
    expect(componentText).toContain("Other works from CAMA Gallery")
    expect(componentText).toContain("Related Works")
  })

  it("returns null for artwork with ArtworkContextAuction context", () => {
    const regularArtwork = {
      ...ArtworkFixture,
      context: {
        __typename: "ArtworkContextAuction",
      },
    }
    const component = shallow(<OtherWorks artwork={regularArtwork} />)
    expect(component.render().text()).toEqual("")
  })

  it("returns null for artwork with ArtworkContextFair context", () => {
    const regularArtwork = {
      ...ArtworkFixture,
      context: {
        __typename: "ArtworkContextFair",
      },
    }
    const component = shallow(<OtherWorks artwork={regularArtwork} />)
    expect(component.render().text()).toEqual("")
  })

  it("returns null for artwork with ArtworkContextPartnerShow context", () => {
    const regularArtwork = {
      ...ArtworkFixture,
      context: {
        __typename: "ArtworkContextPartnerShow",
      },
    }
    const component = shallow(<OtherWorks artwork={regularArtwork} />)
    expect(component.render().text()).toEqual("")
  })
})
