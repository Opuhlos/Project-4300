import NextAuth, { CredentialsSignin } from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";
import connectMongoDB from "./libs/mongodb";
import { User } from "./models/User";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Credentials({
    name: 'Credentials',
    credentials: {
      email: {label: "Email", type: "email"},
      password: {label: "Password", type: "password"},
    },

    authorize: async (credentials) => {
      const email = credentials.email as string | undefined;
      const password = credentials.password as string | undefined;

      if(!email || !password) {
        throw new CredentialsSignin('Please provide both email and password');
      }

      await connectMongoDB();

      const user = await User.findOne({email}).select("+password +role");

      if(!user) {
        throw new Error("Invalid email or password");
      }

      if(!user.password) {
        throw new Error("Invalid email or password");
      }

      const isMatchedPassword = await compare(password, user.password);

      if(!isMatchedPassword) {
        throw new Error("Invalid email or password");
      }

      const userData = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        id: user._id
      }

      return userData;

    }

  }), Google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
  })],

  pages: {
    signIn: '/login'
  },

  callbacks: {
    async session({session, token}) {
      if(token?.sub && token?.role) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }

      return session;
    },
    async jwt({token, user}) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    signIn: async({user, account}) => {
      if(account?.provider === 'google') {
        try { 
          const {email, name, image, id } = user;
          await connectMongoDB();
          const alreadyUser = await User.findOne({email});

          if(!alreadyUser) {
            await User.create({ email, name, image, authProviderId: id })
          } else {
            return true;
          }

        } catch(error) {
          throw new Error("Error while creating user")
        }
      }

      if(account?.provider === 'credentials') {
        return true;
      } else {
        return false;
      }
    }
  }
  
})