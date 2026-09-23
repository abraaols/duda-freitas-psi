import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Maria Eduarda | Psicóloga", description: "Atendimento psicológico online com acolhimento, ética e responsabilidade. CRP 12/31479." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
