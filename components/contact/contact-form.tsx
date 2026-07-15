"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { m, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/constants/services";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";

import { supabase } from "@/lib/supabase";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    clearErrors("root.serverError");
    
    try {
      const { data, error, status, statusText } = await supabase
        .from("contact_messages")
        .insert([
          {
            name: values.name,
            email: values.email,
            company: values.company || null,
            service: values.serviceInterest || null,
            message: values.message,
          },
        ]);

      console.log("Supabase Insert Response:", { data, error, status, statusText });

      if (error) {
        throw error;
      }

      reset(undefined, { keepIsSubmitSuccessful: true });

      setTimeout(() => {
        reset(undefined, { 
          keepValues: true, 
          keepIsSubmitSuccessful: false, 
          keepErrors: true, 
          keepDirty: true, 
          keepTouched: true 
        });
      }, 5000);
    } catch (error: any) {
      console.error("Caught Error:", error);
      setError("root.serverError", {
        type: "server",
        message: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            disabled={isSubmitting}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            disabled={isSubmitting}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company (optional)</Label>
          <Input
            id="company"
            autoComplete="organization"
            disabled={isSubmitting}
            {...register("company")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="serviceInterest">What are you interested in?</Label>
          <select
            id="serviceInterest"
            disabled={isSubmitting}
            className="flex h-9 w-full rounded-lg border border-border bg-background px-3 py-1 text-sm text-foreground shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30"
            {...register("serviceInterest")}
            defaultValue=""
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project, timeline, and goals."
          aria-invalid={Boolean(errors.message)}
          disabled={isSubmitting}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <AnimatePresence mode="wait">
        {isSubmitSuccessful && (
          <m.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-2 flex items-center gap-3 rounded-xl border border-[#ABEFC6] bg-[#ECFDF3] px-4 py-3 text-sm font-medium text-[#067647]">
              <CheckCircle2 className="size-5 shrink-0 text-[#067647]" />
              <p>Message sent successfully! We'll get back to you within 10 minutes.</p>
            </div>
          </m.div>
        )}
        {errors.root?.serverError && (
          <m.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-2 flex items-center gap-3 rounded-xl border border-[#FEE4E2] bg-[#FEF3F2] px-4 py-3 text-sm font-medium text-[#B42318]">
              <XCircle className="size-5 shrink-0 text-[#B42318]" />
              <p>Something went wrong. Please try again.</p>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        focusableWhenDisabled
        className="mt-2"
      >
        {isSubmitting && (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        )}
        {isSubmitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
