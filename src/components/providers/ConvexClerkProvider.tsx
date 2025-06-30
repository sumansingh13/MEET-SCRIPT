"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Validate required environment variables
if (!convexUrl) {
  throw new Error("Missing NEXT_PUBLIC_CONVEX_URL environment variable");
}

if (!clerkPublishableKey) {
  throw new Error("Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY environment variable. Please add it to your .env.local file.");
}

// Validate Clerk publishable key format
if (!clerkPublishableKey.startsWith('pk_test_') && !clerkPublishableKey.startsWith('pk_live_')) {
  throw new Error("Invalid NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY format. The key should start with 'pk_test_' or 'pk_live_'");
}

const convex = new ConvexReactClient(convexUrl);

export default function ConvexClerkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}