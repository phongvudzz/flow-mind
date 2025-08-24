import { SignupForm } from "@/components/sign-up-form";

export default function Signup() {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  // const router = useRouter();

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");

  //   try {
  //     const { error } = await authClient.signUp.email(
  //       {
  //         email,
  //         password,
  //         name,
  //       },
  //       {
  //         onRequest: () => setLoading(true),
  //         onSuccess: async () => {
  //           await authClient.sendVerificationEmail({
  //             email,
  //             callbackURL: "/dashboard",
  //           });
  //           setError("Check your email for verification!");
  //         },
  //         onError: (ctx) => {
  //           if (ctx.error.status === 403) {
  //             setError("Please verify your email address");
  //           }
  //           setError(ctx.error.message || "Sign up failed");
  //         },
  //       }
  //     );

  //     if (error) {
  //       setError(error.message || "Sign up failed");
  //     }
  //   } catch {
  //     setError("An unexpected error occurred");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleGithubSignUp = async () => {
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
  //         onError: (ctx) => setError(ctx.error.message || "Sign up failed"),
  //       }
  //     );

  //     if (error) {
  //       setError(error.message || "Sign up failed");
  //     }
  //   } catch {
  //     setError("An unexpected error occurred");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleGoogleSignUp = async () => {
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
  //         onError: (ctx) => setError(ctx.error.message || "Sign up failed"),
  //       }
  //     );

  //     if (error) {
  //       setError(error.message || "Sign up failed");
  //     }
  //   } catch {
  //     setError("An unexpected error occurred");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleAnonymusSignUp = async () => {
  //   setLoading(true);
  //   setError("");

  //   const { error } = await authClient.signIn.anonymous({
  //     fetchOptions: {
  //       onSuccess: () => {
  //         setLoading(false);
  //         redirect("/dashboard");
  //       },
  //       onError: (ctx) => setError(ctx.error.message),
  //       onRequest: () => {
  //         setLoading(true);
  //       },
  //       onResponse: () => setLoading(true),
  //     },
  //   });
  //   console.log(error);
  //   if (error) setError(error.message || "Sign up failed");
  //   else redirect("/dashboard");
  //   setError("An unexpected error occurred");
  //   setLoading(false);
  // };

  return <SignupForm />;
}
