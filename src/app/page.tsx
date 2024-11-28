"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import UserCard from "@/components/UserCard";

export default function Home() {
  const companion = useQuery(api.companion.get);
  return (
    <main>
      {companion?.map(c => <UserCard key={c._id} />)}
    </main>
  );
}
