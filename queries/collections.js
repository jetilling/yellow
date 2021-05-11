import {fullEndpoint} from "../config"

export default function collections() {
  return {
    url: `${fullEndpoint}/collections`,
    options: {
      method: "GET"
    }
  }
}