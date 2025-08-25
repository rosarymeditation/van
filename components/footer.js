import Link from "next/link";
import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-center justify-between py-8 lg:flex-row lg:items-start lg:space-x-10">
          {/* Logo + Description */}
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <Link
              href="/"
              className="flex items-center justify-center lg:justify-start space-x-2 text-2xl font-medium text-blue-600 mb-2"
            >
              <img
                src="/img/logo.png"
                alt="TyneMove"
                width={32}
                height={32}
                className="w-8"
              />
              <span className={"text-blue-800"}>TyneMove</span>
            </Link>
            <p className="max-w-xs text-gray-500">
              TyneMove provides reliable van removals across Newcastle, Sunderland, Durham, and nearby towns. We make moving simple, affordable, and stress-free for homes and offices.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/quote"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Send a Quote
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} TyneMove. All rights reserved.
        </div>
      </Container>
    </div>
  );
}
