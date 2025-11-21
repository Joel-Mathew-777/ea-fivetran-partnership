"use client";

import React from "react";
import Link from "next/link";
import { FiTool } from "react-icons/fi";

type Props = {
  title?: string;
  message?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function UnderDevelopment({
  title = "Under Development",
  message = "We're working on something awesome. Check back soon!",
  ctaLabel = "Go Home",
  ctaHref = "/",
}: Props) {
  return (
    <main className="min-h-[93vh] flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-xl w-full bg-white dark:bg-slate-900 backdrop-blur-md border border-slate-300 dark:border-slate-700 rounded-2xl shadow-lg p-8 text-center transition-colors">
        <div className="mx-auto w-28 h-28 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 shadow-inner">
          <FiTool className="w-14 h-14 animate-bounce text-slate-600 dark:text-slate-400" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold mb-3 text-slate-800 dark:text-white transition-colors">{title}</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6 transition-colors">{message}</p>

        <div className="flex gap-3 justify-center">
          <Link href={ctaHref} className="inline-flex items-center gap-2 px-4 py-2 rounded-md border font-medium hover:shadow-md text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            {ctaLabel}
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center cursor-pointer gap-2 px-4 py-2 rounded-md border bg-slate-50 dark:bg-transparent hover:opacity-90 text-slate-800 dark:text-slate-200 transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>
    </main>
  );
}
