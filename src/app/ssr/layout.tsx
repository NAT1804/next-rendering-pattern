"use client";
import Button from "@/components/atoms/button";

export default function CSRLayout({ children }: { children: React.ReactNode }) {

  return (
    <section>
      <Button />

      {children}
    </section>
  );
}
