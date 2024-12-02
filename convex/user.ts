import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { saltAndHashPassword, comparePassword } from "./../src/utils/password";

export const createUser = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if user already exists
    const existingUser = await ctx.db
      .query("users")
      .filter(q => q.eq(q.field("email"), args.email))
      .first();

    if (existingUser) {
      throw new Error("User already exists");
    }

    // Hash the password
    const pwHash = saltAndHashPassword(args.password);

    // Create the user
    return await ctx.db.insert("users", {
      email: args.email,
      pwHash: pwHash,
    });
  },
});

export const getUser = query({
  args: {
    email: v.string(),
    pwHash: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter(q => q.eq(q.field("email"), args.email))
      .first();

    if (!user) {
      return null;
    }

    // Verify password
    const isPasswordValid = comparePassword(args.pwHash, user.pwHash);
    
    return isPasswordValid ? user : null;
  },
});