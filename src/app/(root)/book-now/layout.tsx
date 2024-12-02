import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const Links = [
        {
            id: 1,
            name: "Area",
            link: "/book-now/area",
        },
        {
            id: 2,
            name:"City",
            link:"/book-now/city"
        },
        {
            id: 3,
            name:"Duration",
            link:"/book-now/duration"
        },
        {
            id: 4,
            name:"Gender",
            link:"/book-now/gender"
        },
        {
            id: 5,
            name:"Time",
            link:"/book-now/time"
        },
    ]
  return (
    <div className="bg-red-500 h-56">
        <div className="w-full flex justify-between">
            {Links.map(l => <Link href={l.link} key={l.id}>{l.name}</Link>)}
        </div>
        {children}
    </div>
  );
}
