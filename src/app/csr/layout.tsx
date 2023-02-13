import Link from "next/link";

export default function CSRLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Link href="/" legacyBehavior>
        <a>Back</a>
      </Link>

      {children}
    </section>
  );
}
