import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">GOAT</h3>
            <p className="text-sm text-muted-foreground">
              The Greatest of all Time - Cristiano Ronaldo: Career Statistics
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>+61 406072731</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <Link href="mailto:abishekrawat7@gmail.com" className="hover:underline">
                abishekrawat7@gmail.com
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>Campsie, NSW</span>
            </div>

            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-muted-foreground" />
              <Link href="https://www.linkedin.com/in/iamabishekrawat7" target="_blank" className="hover:underline">
                iamabishekrawat7
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-muted-foreground" />
              <Link href="https://www.instagram.com/abishek_rawat_7/" target="_blank" className="hover:underline">
                abishek_rawat_7
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Abishek Rawat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

