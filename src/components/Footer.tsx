import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-900 border-t border-slate-800 dark:border-slate-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-slate-200 dark:text-slate-200">
              Zainab <span className="text-emerald-400 dark:text-emerald-400">Ayaz</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">
              Cybersecurity Student & Intelligent Systems Developer
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/zainabqureshi09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/zainab-ayaz-3081482b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:zainab.cyber.dev@gmail.com"
              className="text-slate-400 dark:text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {currentYear} Zainab Ayaz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}