import { loginUser } from "@/app/actions/auth/loginUser";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  // providers: [
  //   CredentialsProvider({
  //     name: "Credentials",

  //     credentials: {
  //       email: { label: "Email", type: "text", placeholder: "Enter Email" },
  //       password: { label: "Password", type: "password" },
  //     },
  //     async authorize(credentials, req) {
  //       console.log(credentials);
  //       const user = await loginUser(credentials);
  //       console.log(user);

  //       // const res = await fetch("/your/endpoint", {
  //       //   method: "POST",
  //       //   body: JSON.stringify(credentials),
  //       //   headers: { "Content-Type": "application/json" },
  //       // });
  //       // const user = await res.json();

  //       // if (res.ok && user) {
  //       //   return user;
  //       // }

  //       return null;
  //     },
  //   }),
  // ],
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = await loginUser(credentials);
        console.log(user);

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
