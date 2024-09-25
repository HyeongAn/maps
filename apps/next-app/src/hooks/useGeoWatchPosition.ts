import { useCallback, useEffect, useState } from "react"
import { LocationType } from "../../type"

const useGeoWatchPosition = () => {
  const defaultLatitude = 37.579293849225756
  const defaultLongitude = 126.97798076343491
  const [location, setLocation] = useState<LocationType | null>(null)

  const updateLocation = useCallback((position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords
    setLocation({ latitude, longitude })
  }, [])

  useEffect(() => {
    const { geolocation } = navigator

    if (!geolocation) {
      return
    }

    const watcher = geolocation.watchPosition(
      updateLocation,
      error => {
        setLocation({ latitude: defaultLatitude, longitude: defaultLongitude })
        console.error(error)
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    )

    return () => {
      geolocation.clearWatch(watcher)
    }
  }, [updateLocation])

  return location
}

export default useGeoWatchPosition
