import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import Navbar from "./Navbar";

export default function AuthContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SignedIn>
        <div className="min-h-screen">
          <Navbar />
          <main className="px-4 sm:px-6 lg:px-8">{children}</main>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}