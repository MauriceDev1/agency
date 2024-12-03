import Link from "next/link";
import Links from './booknow'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-56">
        <div className="w-full flex justify-between bg-black rounded-md mb-10">
            {Links.map(l => (
                <Link href={l.link} key={l.id} className="h-20 flex w-full">
                    <p className="m-auto text-white">
                        {l.name}
                    </p>
                </Link>
            ))}
        </div>
        {children}
    </div>
  );
}
