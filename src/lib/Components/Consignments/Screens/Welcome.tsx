import { Box, color, Flex, Sans, Serif, Spacer, Theme } from "@artsy/palette"
import { Schema, screenTrack } from "lib/utils/track"
import React from "react"
import { FlatList, Image, Route, ViewProperties } from "react-native"
import NavigatorIOS from "react-native-navigator-ios"
import styled from "styled-components/native"
import CloseButton from "../Components/CloseButton"
import ConsignmentBG from "../Components/ConsignmentBG"
import { FormButton } from "../Components/FormElements"
import Overview from "./Overview"

interface Props extends ViewProperties {
  navigator: NavigatorIOS
  route: Route
}

const rows = [
  {
    iconHref: require("../../../../../images/cam.png"),
    text: "Take a few photos and submit details about the work.",
  },
  {
    iconHref: require("../../../../../images/offer.png"),
    text: "Get offers from galleries and auction houses.",
  },
  {
    iconHref: require("../../../../../images/sell.png"),
    text: "Have your work placed in a gallery or upcoming sale.",
  },
  {
    iconHref: require("../../../../../images/money.png"),
    text: "Receive payment once the work sells.",
  },
]

@screenTrack({
  context_screen: Schema.PageNames.ConsignmentsWelcome,
  context_screen_owner_type: Schema.OwnerEntityTypes.Consignment,
})
export default class Welcome extends React.Component<Props> {
  goTapped = () => this.props.navigator.push({ component: Overview })
  render() {
    return (
      <Theme>
        <ConsignmentBG>
          <FlatList
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            data={rows}
            alwaysBounceVertical={false}
            keyExtractor={(_item, index) => String(index)}
            ListHeaderComponent={() => (
              <Box px={2}>
                <Sans size="4" textAlign="center" weight="medium" color={color("white100")}>
                  Sell works from your collection
                </Sans>
              </Box>
            )}
            renderItem={({ item }) => {
              return (
                <Box px={2}>
                  <Spacer mb={3} />
                  <Flex flexDirection="row" alignItems="center" flexWrap="nowrap">
                    <Icon source={item.iconHref} />
                    <Flex style={{ flex: 1 }}>
                      <Serif size="4" color={color("white100")}>
                        {item.text}
                      </Serif>
                    </Flex>
                  </Flex>
                </Box>
              )
            }}
            ListFooterComponent={() => (
              <>
                <Spacer mb={3} />
                <Flex flexDirection="column" alignItems="center">
                  <FormButton text="Get started" onPress={this.goTapped} style={{ marginTop: 0 }} />
                  <CloseButton />
                </Flex>
              </>
            )}
          />
        </ConsignmentBG>
      </Theme>
    )
  }
}

const Icon = styled(Image)`
  resize-mode: contain;
  width: 40;
  margin-right: 24;
`
