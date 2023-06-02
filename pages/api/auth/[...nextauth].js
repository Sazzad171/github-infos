import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        // data from my login page
        const { email, password } = credentials;

        // match auth data
        if ( email === "admin@gmail.com" && password === "1234" ) {
          return { id: 1, name: "admin", email: "admin@gmail.com" };
        }
        else {
          throw new Error('Invalid Credentials!');
        }
      }
    }),
    // ...add more providers here
  ],
  page: {
    signIn: "/auth/signin"
  }
});