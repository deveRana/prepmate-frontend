import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
        <div>
          <h4 className="font-bold text-gray-900 mb-2">PrepMate AI</h4>
          <p>Your smart interview preparation partner.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:text-purple-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/auth/login" className="hover:text-purple-600">
                Login
              </Link>
            </li>
            <li>
              <Link href="/auth/register" className="hover:text-purple-600">
                Register
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <ul className="space-y-1">
            <li>
              <a
                href="mailto:support@prepmate.ai"
                className="hover:text-purple-600"
              >
                Email Us
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-purple-600"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                className="hover:text-purple-600"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-4">
        © {new Date().getFullYear()} PrepMate AI. All rights reserved.
      </div>
    </footer>
  );
}
