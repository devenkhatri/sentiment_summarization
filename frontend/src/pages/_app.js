import "@/styles/globals.css";
import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({
  Auth: {
    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID,
    region: process.env.NEXT_PUBLIC_API_REGION,
  },
  API: {
    endpoints: [
      {
        name: "genai-app-boilerplate",
        endpoint: process.env.NEXT_PUBLIC_API_ENDPOINT,
        region: process.env.NEXT_PUBLIC_API_REGION,
        custom_header: async () => {
          return {
            Authorization: `Bearer ${(await Auth.currentSession())
              .getIdToken()
              .getJwtToken()}`,
          };
        },
      },
    ],
  },
});

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default withAuthenticator(App, { hideSignUp: true });