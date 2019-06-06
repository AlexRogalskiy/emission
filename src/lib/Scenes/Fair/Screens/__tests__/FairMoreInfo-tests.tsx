import { CaretButton } from "lib/Components/Buttons/CaretButton"
import { MockRelayRenderer } from "lib/tests/MockRelayRenderer"
import { renderUntil } from "lib/tests/renderUntil"
import React from "react"
import { graphql } from "react-relay"
import { fairFixture } from "../../__fixtures__"
import { FairMoreInfo, shouldGoStraightToWebsite, shouldShowFairMoreInfo } from "../FairMoreInfo"

jest.mock("lib/NativeModules/SwitchBoard", () => ({
  presentModalViewController: jest.fn(),
}))
jest.unmock("react-relay")

import SwitchBoard from "lib/NativeModules/SwitchBoard"

const renderTree = () =>
  renderUntil(
    wrapper => {
      return wrapper.text().includes("Buy tickets")
    },
    <MockRelayRenderer
      Component={FairMoreInfo}
      query={graphql`
        query FairMoreInfoTestsQuery {
          fair(id: "sofa-chicago-2018") {
            links
            about
            ticketsLink
          }
        }
      `}
      mockResolvers={{
        Fair: () => fairFixture,
      }}
    />
  )

describe("FairMoreInfo", () => {
  it("renders properly", async () => {
    const tree = await renderTree()
    expect(tree.html()).toMatchSnapshot()
  })
  it("renders fair about text", async () => {
    const tree = await renderTree()
    expect(tree.text()).toContain(fairFixture.about)
  })

  it("opens fair ticketsLink url", async () => {
    const tree = await renderTree()
    const button = tree.find<CaretButton>("[text='Buy tickets']")

    button.props().onPress()

    expect(SwitchBoard.presentModalViewController).toHaveBeenCalledWith(expect.anything(), fairFixture.ticketsLink)
  })
})

describe(shouldShowFairMoreInfo, () => {
  it("is false with an empty obj", () => {
    expect(shouldShowFairMoreInfo({})).toBeFalsy()
  })
  it("is true with a ticket link key", () => {
    expect(shouldShowFairMoreInfo({ ticketsLink: "http://" })).toBeTruthy()
  })
  it("is true with an about key", () => {
    expect(shouldShowFairMoreInfo({ about: "It's a long story..." })).toBeTruthy()
  })
})

describe(shouldGoStraightToWebsite, () => {
  it("is true with an org website", () => {
    expect(shouldGoStraightToWebsite({ organizer: { website: "http://" } })).toBeTruthy()
  })
  it("is false with a ticket link key", () => {
    expect(shouldGoStraightToWebsite({ ticketsLink: "http://", organizer: { website: "http://" } })).toBeFalsy()
  })
  it("is true with an about key", () => {
    expect(shouldGoStraightToWebsite({ about: "It's a long story...", organizer: { website: "http://" } })).toBeFalsy()
  })
})
