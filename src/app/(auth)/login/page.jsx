"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    console.log({ data, error });

    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className="border mx-auto w-[400px] py-10 mt-5 border-gray-200">
      <h1 className="text-center text-2xl font-bold">Log In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField isRequired name="password" type="password">
          <Label>Password</Label>
          <Input placeholder="Enter password" />
          <Description>Min 8 characters</Description>
          <FieldError />
        </TextField>

        <Button type="submit" disabled={loading}>
          <Check />
          {loading ? "Logging in..." : "Login"}
        </Button>
      </Form>

      <Button
        onClick={handleGoogleSignIn}
        className="w-full mt-4 border"
      >
        <GrGoogle /> Sign In with Google
      </Button>
    </Card>
  );
}