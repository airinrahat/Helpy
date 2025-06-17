import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";

//helpy-463102

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
