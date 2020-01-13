import { Flex, Spacer, Theme } from "@artsy/palette"
import { Artist_artist } from "__generated__/Artist_artist.graphql"
import ArtistAbout from "lib/Components/Artist/ArtistAbout"
import ArtistArtworks from "lib/Components/Artist/ArtistArtworks"
import ArtistHeader from "lib/Components/Artist/ArtistHeader"
import ArtistShows from "lib/Components/Artist/ArtistShows"
import { StickyTabPage } from "lib/Components/StickyTabPage/StickyTabPage"
import { Schema, screenTrack } from "lib/utils/track"
import { ProvideScreenDimensions } from "lib/utils/useScreenDimensions"
import React from "react"
import { ViewProperties } from "react-native"
import { createFragmentContainer, graphql } from "react-relay"

interface Props extends ViewProperties {
  artist: Artist_artist
}

interface State {
  tabs: any[]
}

@screenTrack((props: Props) => ({
  context_screen: Schema.PageNames.ArtistPage,
  context_screen_owner_slug: props.artist.slug,
  context_screen_owner_id: props.artist.internalID,
  context_screen_owner_type: Schema.OwnerEntityTypes.Artist,
}))
export class Artist extends React.Component<Props, State> {
  state = {
    tabs: [],
  }

  componentWillMount = () => {
    this.availableTabs()
  }

  availableTabs = () => {
    const tabs = []
    const artist = this.props.artist
    const displayAboutSection = artist.has_metadata || artist.counts.articles > 0 || artist.counts.related_artists > 0

    if (displayAboutSection) {
      tabs.push({
        title: "About",
        content: <ArtistAbout artist={artist} />,
      })
    }

    if (artist.counts.artworks) {
      tabs.push({
        title: "Artworks",
        initial: true,
        content: <ArtistArtworks artist={artist} />,
      })
    }

    if (artist.counts.partner_shows) {
      tabs.push({
        title: "Shows",
        content: <ArtistShows artist={artist} />,
      })
    }

    this.setState({ tabs })
  }

  render() {
    const { artist } = this.props
    const { tabs } = this.state

    return (
      <Theme>
        <ProvideScreenDimensions>
          <Flex style={{ flex: 1 }}>
            <StickyTabPage
              staticHeaderContent={
                <>
                  <ArtistHeader artist={artist} />
                  <Spacer mb={1} />
                </>
              }
              tabs={tabs}
            />
          </Flex>
        </ProvideScreenDimensions>
      </Theme>
    )
  }
}

export default createFragmentContainer(Artist, {
  artist: graphql`
    fragment Artist_artist on Artist {
      internalID
      slug
      has_metadata: hasMetadata
      counts {
        artworks
        partner_shows: partnerShows
        related_artists: relatedArtists
        articles
      }
      ...ArtistHeader_artist
      ...ArtistAbout_artist
      ...ArtistShows_artist
      ...ArtistArtworks_artist
    }
  `,
})
