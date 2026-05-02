"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const formData = new FormData(e.currentTarget);

      const name = formData.get("name");
      const image = formData.get("image");
      const email = formData.get("email");
      const password = formData.get("password");

      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
      });

      if (error) {
        setErrorMsg(error.message || "Signup failed");
        return;
      }

      // success হলে redirect
      router.push("/");
    } catch (err) {
      setErrorMsg("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border mx-auto w-[400px] py-10 mt-10 border-gray-200 shadow-lg rounded-2xl">
      <h1 className="text-center text-2xl font-bold mb-5">Sign Up</h1>

      <Form className="flex flex-col gap-4 px-6" onSubmit={onSubmit}>
        {/* Name */}
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        {/* Image */}
        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="https://example.com/photo.jpg" />
          <FieldError />
        </TextField>

        {/* Email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Enter a valid email";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        {/* Password */}
        <TextField
          isRequired
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) return "Minimum 8 characters";
            if (!/[A-Z]/.test(value)) return "Add 1 uppercase letter";
            if (!/[0-9]/.test(value)) return "Add 1 number";
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter password" />
          <Description>
            At least 8 characters, 1 uppercase, 1 number
          </Description>
          <FieldError />
        </TextField>

        {/* Error Message */}
        {errorMsg && (
          <p className="text-red-500 text-sm text-center">{errorMsg}</p>
        )}

        {/* Buttons */}
        <div className="flex gap-3 mt-2">
          <Button type="submit" disabled={loading} className="w-full">
            <Check />
            {loading ? "Creating..." : "Sign Up"}
          </Button>

          <Button type="reset" variant="secondary" className="w-full">
            Reset
          </Button>
        </div>
      </Form>

      <p className="text-center mt-4 text-gray-500">Or continue with</p>
    </Card>
  );
}