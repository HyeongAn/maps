"use client"

import { RecoilRoot } from "@maps/lib"
import React, { ReactNode } from "react"

const RecoilProvider = ({ children }: { children: ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>
}

export default RecoilProvider
