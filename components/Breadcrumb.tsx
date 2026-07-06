import Link from "next/link";

type BreadcrumbProps = {
  current: string;
};

export default function Breadcrumb({ current }: BreadcrumbProps) {
  return (
    <nav className="mb-8 text-sm text-slate-500">
      <Link href="/" className="hover:text-blue-600">
        Home
      </Link>

      <span className="mx-2">/</span>

      <a href="/#diensten" className="hover:text-blue-600">
        Diensten
      </a>

      <span className="mx-2">/</span>

      <span className="font-semibold text-slate-900">
        {current}
      </span>
    </nav>
  );
}
