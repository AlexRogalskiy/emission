import { ArrowRightIcon, Box, Button, CloseIcon, color, Flex, Sans, Serif } from "@artsy/palette"
import {
  MediumOptions,
  PriceRangeOptions,
  SizeOptions,
  SortOptions,
  TimePeriodOptions,
  WaysToBuyOptions,
} from "lib/data/ArtworkFilterOptions"
import React from "react"
import { FlatList, LayoutAnimation, Modal as RNModal, TouchableWithoutFeedback, ViewProperties } from "react-native"
import styled from "styled-components/native"

interface ModalProps extends ViewProperties {
  visible?: boolean
  closeModal?: () => void
}

// TODO:  Define a TypeScript interface to represent possible filter states (take a look at the Pick TypeScript generic)
interface State {
  isComponentMounted: boolean
  sortableItems: Array<{ type: string; data: any }>
  currentSortOrder: SortOptions
  waysToBuySortOrder: WaysToBuyOptions
  mediumSortOrder: MediumOptions
  priceRangeSortOrder: PriceRangeOptions
  sizeSortOrder: SizeOptions
  timePeriodSortOrder: TimePeriodOptions
}

export class FilterModal extends React.Component<ModalProps, State> {
  constructor(props) {
    super(props)

    this.state = {
      isComponentMounted: false,
      sortableItems: [],
      currentSortOrder: SortOptions.Default,
      waysToBuySortOrder: WaysToBuyOptions.All,
      mediumSortOrder: MediumOptions.All,
      priceRangeSortOrder: PriceRangeOptions.All,
      sizeSortOrder: SizeOptions.All,
      timePeriodSortOrder: TimePeriodOptions.All,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
      this.setState({ isComponentMounted: true })
    }, 100)

    const sortableItems = []

    sortableItems.push({
      type: "Sort by",
      data: {
        sort: [],
      },
    })
    sortableItems.push({
      type: "Ways to buy",
      data: {
        sort: [],
      },
    })
    sortableItems.push({
      type: "Medium",
      data: {
        sort: [],
      },
    })
    sortableItems.push({
      type: "Price range",
      data: {
        sort: [],
      },
    })
    sortableItems.push({
      type: "Size",
      data: {
        sort: [],
      },
    })
    sortableItems.push({
      type: "Time period",
      data: {
        sort: [],
      },
    })

    this.setState({
      sortableItems,
    })
  }

  closeModal() {
    if (this.props.closeModal) {
      this.props.closeModal()
    }
  }

  getDefaultSort(type) {
    switch (type) {
      case "Sort by":
        return this.state.currentSortOrder
      case "Ways to buy":
        return this.state.waysToBuySortOrder
      case "Medium":
        return this.state.mediumSortOrder
      case "Price range":
        return this.state.priceRangeSortOrder
      case "Size":
        return this.state.sizeSortOrder
      case "Time period":
        return this.state.timePeriodSortOrder
      default:
        return null
    }
  }
  getSortItem(type) {
    return (
      <SortRowItem>
        <Flex p={2} flexDirection="row" justifyContent="space-between" flexGrow={1}>
          <Serif size="3">{type}</Serif>
          <Flex flexDirection="row">
            <Serif color={color("black60")} size="3">
              {this.getDefaultSort(type)}
            </Serif>
            <ArrowRightIcon fill="black30" ml={0.3} mt={0.3} />
          </Flex>
        </Flex>
      </SortRowItem>
    )
  }
  renderSortItem = ({ item: { type } }) => {
    return this.getSortItem(type)
  }

  render() {
    const { sortableItems } = this.state

    return (
      <RNModal animationType="fade" transparent={true} visible={this.props.visible}>
        <TouchableWithoutFeedback>
          <ModalBackgroundView>
            <TouchableWithoutFeedback onPress={null}>
              <>
                <Flex onTouchStart={() => this.closeModal()} style={{ flexGrow: 1 }} />
                <ModalInnerView visible={this.state.isComponentMounted}>
                  <Flex flexDirection="row" justifyContent="space-between">
                    <Flex alignItems="flex-end" mt={0.5} mb={2}>
                      <Box ml={2} mt={2} onTouchStart={() => this.closeModal()}>
                        <CloseIcon fill="black100" />
                      </Box>
                    </Flex>
                    <Sans mt={2} weight="medium" size="4">
                      Filter
                    </Sans>
                    <Sans mr={2} mt={2} size="4">
                      Clear all
                    </Sans>
                  </Flex>
                  {this.props.children}
                  <Flex flexDirection="row">
                    <FlatList
                      keyExtractor={(_item, index) => String(index)}
                      data={sortableItems}
                      renderItem={item => <Box>{this.renderSortItem(item)}</Box>}
                    />
                  </Flex>
                  <Box p={2}>
                    <Button
                      onPress={() => {
                        this.closeModal()
                      }}
                      block
                      width={100}
                      variant="secondaryOutline"
                    >
                      Ok
                    </Button>
                  </Box>
                </ModalInnerView>
              </>
            </TouchableWithoutFeedback>
          </ModalBackgroundView>
        </TouchableWithoutFeedback>
      </RNModal>
    )
  }
}

const ModalBackgroundView = styled.View`
  background-color: #00000099;
  flex: 1;
  flex-direction: column;
`

const ModalInnerView = styled.View<{ visible: boolean }>`
  flex-direction: column;
  background-color: white;
  height: ${({ visible }) => (visible ? "auto" : "0")};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
const SortRowItem = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  border: solid 1px ${color("black10")};
  border-bottom-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  flex: 1;
  width: 100%;
`
