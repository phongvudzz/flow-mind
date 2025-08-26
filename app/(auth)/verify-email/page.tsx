"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, RefreshCw } from "lucide-react";

export default function VerifyEmail() {
  return (
    <div className="relative mt-40">
      <div className="flex items-center flex-col justify-center md:py-10">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-semibold">
              Verify Your Email
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              We&apos;ve sent a verification link to your email address. Please
              check your inbox and click the link to verify your account.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground text-center">
              Didn&apos;t receive the email? Check your spam folder or click
              below to resend.
            </div>

            <Button
              variant="outline"
              className="w-full bg-transparent"
              onClick={() => {
                // Add resend logic here
                console.log("Resending verification email...");
              }}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Resend Verification Email
            </Button>

            <div className="text-xs text-muted-foreground text-center">
              Need help? Contact our support team for assistance.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
