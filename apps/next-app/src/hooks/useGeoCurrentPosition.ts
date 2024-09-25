import { useCallback, useEffect, useState } from "react"
import { LocationType } from "../../type"

const useGeoCurrentPosition = () => {
  const defaultLatitude = 37.579293849225756
  const defaultLongitude = 126.97798076343491
  const [location, setLocation] = useState<LocationType>({ latitude: defaultLatitude, longitude: defaultLongitude })

  const updateLocation = useCallback((position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords
    setLocation({ latitude, longitude })
  }, [])

  useEffect(() => {
    const { geolocation } = navigator

    if (!geolocation) {
      return
    }

    geolocation.getCurrentPosition(updateLocation, error => console.error(error))
  }, [updateLocation])

  return location
}

export default useGeoCurrentPosition
