import { Box, Theme } from "@artsy/palette"
import { Collection_collection } from "__generated__/Collection_collection.graphql"
import React, { Component } from "react"
import { FlatList } from "react-native"
import { createFragmentContainer, graphql } from "react-relay"
import { CollectionHeaderContainer as CollectionHeader } from "./Components/CollectionHeader"
import { CollectionFeaturedArtistsContainer as CollectionFeaturedArtists } from "./Components/FeaturedArtists"

interface CollectionProps {
  collection: Collection_collection
  artworks: any
}

interface CollectionState {
  sections: Array<{ type: string; data: any }>
}

export class Collection extends Component<CollectionProps, CollectionState> {
  state = {
    sections: [],
  }

  componentDidMount() {
    const sections = []

    sections.push({
      type: "featuredArtists",
      data: {
        artists: [],
      },
    })

    this.setState({
      sections,
    })
  }

  renderItem({ item }) {
    switch (item.type) {
      case "featuredArtists":
        return (
          <Box>
            <CollectionFeaturedArtists featuredArtists={this.props.collection} />
          </Box>
        )
      default:
        return null
    }
  }

  render() {
    const { sections } = this.state

    return (
      <Theme>
        <Box>
          <FlatList
            keyExtractor={(_item, index) => String(index)}
            data={sections}
            ListHeaderComponent={<CollectionHeader collection={this.props.collection} />}
            renderItem={item => (
              <Box px={2} pb={2}>
                {this.renderItem(item)}
              </Box>
            )}
          />
        </Box>
      </Theme>
    )
  }
}

export const CollectionContainer = createFragmentContainer(Collection, {
  collection: graphql`
    fragment Collection_collection on MarketingCollection {
      ...CollectionHeader_collection
      ...FeaturedArtists_featuredArtists
    }
  `,
})
