import {Linkedin, Mail, Github, X } from 'lucide-react';
import 'primeicons/primeicons.css';


export interface ContactItem {
  label: string;
  href: string;
  icon: JSX.Element;
  external?: boolean;
}

export const contact: ContactItem[] = [
  { label: "Email", href: "mailto:johndoe@email.com", icon: <Mail /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: <Linkedin />, external: true },
  { label: "GitHub", href: "https://github.com/yourusername", icon: <Github />, external: true },
  { label: "Twitter", href: "https://www.twitter.com/yourusername/", icon: <span className="pi pi-twitter"></span>, external: true }
];
