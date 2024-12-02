"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import UserCard from "@/components/UserCard";
import Hero from "@/components/Hero";

export default function Home() {
  const companion = useQuery(api.companion.get);
  return (
    <>
      <Hero />
      {/* Live escort update */}
      <div>
        Live Escort Update
      </div>
      {/* Trusted Reviews */}
      <div>
        Trusted Reviews
      </div>
      {/* How it Works */}
      <div>
        How it Works
      </div>
      {/* Escorts Currently Online */}
      <div>
        Escorts Currently Online
      </div>
    </>
  );
}
