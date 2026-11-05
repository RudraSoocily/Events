import {getServerSession,type NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import {compare} from 'bcryptjs';
import {db} from './db';
export const authOptions:NextAuthOptions={
 session:{strategy:'jwt'},
 providers:[CredentialsProvider({name:'Email and password',credentials:{email:{label:'Email',type:'email'},password:{label:'Password',type:'password'}},async authorize(c){
 if(!c?.email||!c.password)return null;
 const u=await db.user.findUnique({where:{email:c.email.toLowerCase().trim()}});
 if(!u||!await compare(c.password,u.passwordHash))return null;
 return {id:u.id,email:u.email,name:u.name,role:u.role};
 }})],
 callbacks:{async jwt({token,user}){if(user){token.id=user.id;token.role=(user as {role:string}).role;}return token;},async session({session,token}){if(session.user){(session.user as typeof session.user & {id:string;role:string}).id=String(token.id);(session.user as typeof session.user & {id:string;role:string}).role=String(token.role);}return session;}},
 pages:{signIn:'/login'}
};
export const getSession=()=>getServerSession(authOptions);