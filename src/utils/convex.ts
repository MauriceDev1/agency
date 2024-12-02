// // utils/convex.ts

// export async function getUserFromConvex(email: string, passwordHash: string) {
//   try {
//     const user = await convex.query("users.getByEmail", { email });

//     if (!user || user.passwordHash !== passwordHash) {
//       return null;
//     }

//     return user;
//   } catch (error) {
//     console.error("Error fetching user from Convex:", error);
//     return null;
//   }
// }
