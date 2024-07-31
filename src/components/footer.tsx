import Link from "next/link"
const routes = [
    {
        name: "Terms & Conditions",
        path: "/terms-conditions"
    },
    {
        name: "Privacy Policy",
        path: "/privacy"
    }
]

export default function Footer() {
  return (
    <footer className="flex justify-between border-t border-white/10 text-sm text-white/50 items-center sm:px-9 px-3 mt-auto">
        <small className="text-xs">&copy; 2050 Mack Octavian. All rights reserved.</small>
        <div className="flex gap-x-3 sm:gap-x-8 py-5 text-xs">
        {
            routes.map(route => (
                <Link href={route.path} key={route.path}>{route.name}</Link>
            ))
        }
        </div>
    </footer>
  )
}
