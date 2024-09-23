import axios, { AxiosInstance } from "axios"

const baseURL = process.env.NEXT_PUBLIC_API_URL ?? process.env.DATA_API_URL

export default class Service {
  protected https: AxiosInstance

  constructor(accessToken?: string) {
    this.https = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }
}
