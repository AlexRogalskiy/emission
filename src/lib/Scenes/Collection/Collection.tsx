import { Box, Sans, Theme } from "@artsy/palette"
import React, { Component } from "react"
import { FlatList } from "react-native"
import { createFragmentContainer, graphql } from "react-relay"
import { CollectionHeaderContainer as CollectionHeader } from "./Components/CollectionHeader"

interface CollectionProps {
  collection: any
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
            <Sans size="3t">Featured Artists</Sans>
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
    }
  `,
})
