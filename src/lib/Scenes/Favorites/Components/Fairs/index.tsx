import SavedFairItemRow from "lib/Components/Lists/SavedFairItemRow"
import Spinner from "lib/Components/Spinner"
import ZeroState from "lib/Components/States/ZeroState"
import { PAGE_SIZE } from "lib/data/constants"
import React, { Component } from "react"
import { FlatList } from "react-native"
import { ConnectionData, createPaginationContainer, graphql, RelayPaginationProp } from "react-relay"

import { Fairs_me } from "__generated__/Fairs_me.graphql"

interface Props {
  me: Fairs_me
  relay: RelayPaginationProp
  onDataFetching?: (loading: boolean) => void
}

interface State {
  fetchingMoreData: boolean
}

export class SavedFairs extends Component<Props, State> {
  state = {
    fetchingMoreData: false,
  }

  loadMore = () => {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return
    }

    this.setState({ fetchingMoreData: true })
    this.props.relay.loadMore(PAGE_SIZE, error => {
      if (error) {
        // FIXME: Handle error
        console.error("Fairs/index.tsx", error.message)
      }
      this.setState({ fetchingMoreData: false })
    })
  }

  render() {
    const fairs = this.props.me.followsAndSaves.fairs.edges.filter(edge => edge.node.profile.is_followed)

    if (fairs.length === 0 || !fairs) {
      return (
        <ZeroState
          title="You haven’t followed any fairs yet"
          subtitle="Follow fairs to get notified about new fairs that have been added to Artsy."
        />
      )
    }

    return (
      <FlatList
        data={fairs}
        keyExtractor={({ node }) => node.__id}
        renderItem={item => <SavedFairItemRow {...item.item} relayEnvironment={this.props.relay} />}
        onEndReached={this.loadMore}
        onEndReachedThreshold={0.2}
        ListFooterComponent={
          this.state.fetchingMoreData ? <Spinner style={{ marginTop: 20, marginBottom: 20 }} /> : null
        }
      />
    )
  }
}

export default createPaginationContainer(
  SavedFairs,
  {
    me: graphql`
      fragment Fairs_me on Me
        @argumentDefinitions(count: { type: "Int", defaultValue: 10 }, cursor: { type: "String", defaultValue: "" }) {
        followsAndSaves {
          fairs(first: $count, after: $cursor) @connection(key: "SavedFairs_fairs") {
            edges {
              node {
                profile {
                  id
                  is_followed
                  __id
                }
                name
                counts {
                  partners
                }
                href
                image {
                  url
                }
                start_at
                end_at
              }
            }
          }
        }
      }
    `,
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.me && (props.me.followsAndSaves.fairs as ConnectionData)
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      }
    },
    getVariables(_props, { count, cursor }, fragmentVariables) {
      return {
        ...fragmentVariables,
        count,
        cursor,
      }
    },
    query: graphql`
      query FairsQuery($count: Int!, $cursor: String) {
        me {
          ...Fairs_me @arguments(count: $count, cursor: $cursor)
        }
      }
    `,
  }
)