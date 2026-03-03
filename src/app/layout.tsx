import "./globals.css"

export const metadata = {
  title: "Caio Castelhano – Portfolio v2",
  description: "Personal portfolio – version 2",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}