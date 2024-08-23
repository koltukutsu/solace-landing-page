'use client';
import React, { useState } from "react";
import { Label } from "../New-Main-Base/label";
import { Input } from "../New-Main-Base/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export function NewContactForm() {
  const t = useTranslations();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form gönderildi");

    const res = await fetch('/api/form', { // Adjusted to contact API
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    if (data.success) {
      setResponse('Your message has been sent successfully!');
    } else {
      setResponse('Failed to send your message. Please try again.');
    }
  };
  return (
    <div className="smin-h-screen container mx-auto w-full max-w-md rounded-none bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8">
      <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">
        {t("Bize Ulaşın")}
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        {t("Solace ile iletişime geçin, ekiplerimiz en kısa sürede sizinle iletişime geçecektir.")}
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">{t("İsim")}</Label>
          <Input 
            id="name" 
            placeholder={t("Adınız")} 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">{t("Email Adresi")}</Label>
          <Input 
            id="email" 
            placeholder={t("email@ornek.com")} 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">{t("Mesajınız")}</Label>
          <Input 
            id="message" 
            placeholder={t("Mesajınızı buraya yazın")} 
            type="text" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            required 
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {t("Gönder &rarr;")}
          <BottomGradient />
        </button>

        {response && (
          <p className="mt-4 text-center text-sm text-green-500">
            {response}
          </p>
        )}

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
