/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eZb53zs5img
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Navbar from "./navbar";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Create an account
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-blue-600 hover:underline dark:text-blue-400"
              >
                Sign in
              </a>
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:border-blue-400 dark:focus:ring-blue-400"
              />
            </div>
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:border-blue-400 dark:focus:ring-blue-400"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:border-blue-400 dark:focus:ring-blue-400"
              />
            </div>
            <div>
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-50"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  terms and conditions
                </a>
              </Label>
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400"
            >
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
