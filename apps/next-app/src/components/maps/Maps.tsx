"use client"
import React, { useEffect, useRef } from "react"
import useGeoCurrentPosition from "hooks/useGeoCurrentPosition"
import useGeoWatchPosition from "hooks/useGeoWatchPosition"

const Maps = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<any>(null)
  const markerInstance = useRef<any>(null)
  const currentPosition = useGeoCurrentPosition()
  const watchPosition = useGeoWatchPosition()

  // console.log("complete")

  useEffect(() => {
    if (window.kakao) {
      window.kakao.maps.load(() => {
        if (!mapInstance.current) {
          const mapOption = {
            center: new window.kakao.maps.LatLng(currentPosition?.latitude, currentPosition?.longitude),
            level: 3,
          }
          mapInstance.current = new window.kakao.maps.Map(mapRef.current, mapOption)
          markerInstance.current = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(currentPosition?.latitude, currentPosition?.longitude),
          })
          markerInstance.current.setMap(mapInstance.current)
        }
      })
    }
  }, [currentPosition.latitude, currentPosition.longitude])

  useEffect(() => {
    if (markerInstance.current && watchPosition?.latitude && watchPosition.longitude) {
      const newPosition = new window.kakao.maps.LatLng(watchPosition.latitude, watchPosition.longitude)
      markerInstance.current.setPosition(newPosition)
      mapInstance.current.setCenter(newPosition)
    }
  }, [watchPosition?.latitude, watchPosition?.longitude])

  return <div ref={mapRef} className="w-full h-full" />
}

export default Maps
