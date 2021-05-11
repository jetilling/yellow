import {fullEndpoint} from "../config"

export default function login({email, password}) {
  return {
    url: `${fullEndpoint}/auth/authenticate`,
    options: {
      body: JSON.stringify({email: email, password: password}),
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      },
      method: "POST"
    }
  }
}