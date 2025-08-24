import { SigninForm } from "@/components/sign-in-form";

export default function Signin() {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [showMagicLink, setShowMagicLink] = useState(false);
  // const router = useRouter();

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");

  //   try {
  //     if (showMagicLink) {
  //       await handleMagicLinkSignIn(email);
  //     } else {
  //       await handleEmailSignIn(email, password);
  //     }
  //   } catch {
  //     setError("An unexpected error occurred");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleEmailSignIn = async (email: string, password: string) => {
  //   const { error } = await authClient.signIn.email(
  //     {
  //       email,
  //       password,
  //       callbackURL: "/dashboard",
  //       rememberMe: true,
  //     },
  //     {
  //       onRequest: () => setLoading(true),
  //       onSuccess: () => setError("Check your email for verification!"),
  //       onError: (ctx) => setError(ctx.error.message || "Sign in failed"),
  //     }
  //   );

  //   if (error) {
  //     setError(error.message || "Sign in failed");
  //   }
  // };

  // const handleMagicLinkSignIn = async (email: string) => {
  //   const { error } = await authClient.signIn.magicLink(
  //     {
  //       email,
  //       callbackURL: "/dashboard",
  //     },
  //     {
  //       onRequest: () => setLoading(true),
  //       onSuccess: () => {
  //         // Show success message to user
  //         setError("Check your email for the magic link!");
  //       },
  //       onError: (ctx) =>
  //         setError(ctx.error.message || "Magic link sign in failed"),
  //     }
  //   );

  //   if (error) {
  //     setError(error.message || "Magic link sign in failed");
  //   }
  // };

  // const handleGithubSignIn = async () => {
  //   setLoading(true);
  //   setError("");

  //   try {
  //     const { error } = await authClient.signIn.social(
  //       {
  //         provider: "github",
  //         callbackURL: "/dashboard",
  //       },
  //       {
  //         onRequest: () => setLoading(true),
  //         onSuccess: () => router.push("/dashboard"),
  //         onError: (ctx) => setError(ctx.error.message || "Sign in failed"),
  //       }
  //     );

  //     if (error) {
  //       setError(error.message || "Sign in failed");
  //     }
  //   } catch {
  //     setError("An unexpected error occurred");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleGoogleSignIn = async () => {
  //   setLoading(true);
  //   setError("");

  //   try {
  //     const { error } = await authClient.signIn.social(
  //       {
  //         provider: "google",
  //         callbackURL: "/dashboard",
  //       },
  //       {
  //         onRequest: () => setLoading(true),
  //         onSuccess: () => router.push("/dashboard"),
  //         onError: (ctx) => setError(ctx.error.message || "Sign in failed"),
  //       }
  //     );

  //     if (error) {
  //       setError(error.message || "Sign in failed");
  //     }
  //   } catch {
  //     setError("An unexpected error occurred");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return <SigninForm />;
}
