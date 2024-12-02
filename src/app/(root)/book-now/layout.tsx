import Link from "next/link";
import Links from './booknow'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-red-500 h-56">
        <div className="w-full flex justify-between">
            {Links.map(l => <Link href={l.link} key={l.id}>{l.name}</Link>)}
        </div>
        {children}
    </div>
  );
}
