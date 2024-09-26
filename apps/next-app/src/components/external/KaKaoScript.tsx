import { KAKAO_SDK_API, KAKAO_SDK_MAPS_API } from "constants/api"
import React from "react"
import Script from "next/script"

const KaKaoScript = () => {
  return (
    <>
      <Script src={KAKAO_SDK_API} strategy="beforeInteractive" />
      <Script src={KAKAO_SDK_MAPS_API} strategy="beforeInteractive" type="text/javascript" />
    </>
  )
}

export default KaKaoScript
