import { color } from "@artsy/palette"
import Spinner from "lib/Components/Spinner"
import React, { useEffect, useMemo, useState } from "react"
import { Animated, ImageBackground, ImageProps } from "react-native"

/**
 * Renders an image with a 'fade in' transition when it has loaded.
 * If the image takes more than a second to load, it shows a
 * loading spinner with a silhouette for good UX.
 *
 * @param param0 same as RN's Image props
 */
export const ImageWithLoadingState: React.FC<ImageProps> = ({ ...props }) => {
  const [isLoading, setIsLoading] = useState(true)

  // When the image has loaded we want to fade it in, so we have a white overlay
  // this assumes the image will be on a white backdrop. This component will
  // need to be significantly refactored if it ever needs to be used with other
  // color backgrounds
  const overlayOpacity = useMemo(() => new Animated.Value(1), [])
  useEffect(
    () => {
      Animated.spring(overlayOpacity, {
        toValue: isLoading ? 1 : 0,
        useNativeDriver: true,
      }).start()
    },
    [isLoading]
  )

  // show a loading spinner only after a short delay, if the image is taking a while to load
  const spinnerOpacity = useMemo(() => new Animated.Value(0), [])
  useEffect(() => {
    setTimeout(() => {
      Animated.spring(spinnerOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }).start()
    }, 1000)
  }, [])

  return (
    <ImageBackground {...props} onLoad={() => setIsLoading(false)}>
      <Animated.View
        style={{
          opacity: overlayOpacity,
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <Animated.View
          style={{
            opacity: spinnerOpacity,
            // give the image a subtle silhouette while the spinner is displaying
            // to keep the balance of the page and set an appropriate user expectation
            backgroundColor: color("black5"),
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Spinner />
        </Animated.View>
      </Animated.View>
    </ImageBackground>
  )
}