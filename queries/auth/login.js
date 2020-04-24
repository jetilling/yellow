import {fullEndpoint} from "../../config"

export default function login({email, password}) {
  return {
    url: `${fullEndpoint}/auth/authenticate`,
    body: {
      email, password
    }
  }
}