"use client";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";

import ROUTES from "@/constants/routes";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const [loadingProvider, setLoadingProvider] = useState<
    "github" | "google" | null
  >(null);

  const buttonClass =
    "background-dark400_light900 cursor-pointer body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5 flex items-center justify-center";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      setLoadingProvider(provider);
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: true,
      });
    } catch (error) {
      console.error(error);
      toast(
        <div>
          <div className="font-bold text-red-600">Sign-in Failed</div>
          <div>
            {error instanceof Error
              ? error.message
              : "An error occurred during sign-in"}
          </div>
        </div>
      );
    } finally {
      setLoadingProvider(null);
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      {/* GitHub */}
      <Button
        className={buttonClass}
        onClick={() => handleSignIn("github")}
        disabled={loadingProvider === "github"}
      >
        {loadingProvider === "github" ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            <span>Logging in…</span>
          </>
        ) : (
          <>
            <Image
              src="/icons/github.svg"
              alt="Github Logo"
              width={20}
              height={20}
              className="invert-colors mr-2.5 object-contain"
            />
            <span>Log in with GitHub</span>
          </>
        )}
      </Button>

      {/* Google */}
      <Button
        className={buttonClass}
        onClick={() => handleSignIn("google")}
        disabled={loadingProvider === "google"}
      >
        {loadingProvider === "google" ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            <span>Logging in…</span>
          </>
        ) : (
          <>
            <Image
              src="/icons/google.svg"
              alt="Google Logo"
              width={20}
              height={20}
              className="mr-2.5 object-contain"
            />
            <span>Log in with Google</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default SocialAuthForm;
