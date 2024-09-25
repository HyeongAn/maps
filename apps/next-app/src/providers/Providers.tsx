import React, { ReactNode } from "react"
import ReactQueryProvider from "./ReactQueryProvider"
import RecoilProvider from "./RecoilProvider"

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ReactQueryProvider>
      <RecoilProvider>{children}</RecoilProvider>
    </ReactQueryProvider>
  )
}

export default Providers
