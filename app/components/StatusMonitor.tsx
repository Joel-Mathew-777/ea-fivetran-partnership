"use client";
import { useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";

type Check = {
  id: string;
  url: string;
  ok: boolean;
  status: number | null;
  responseTimeMs: number | null;
  error?: string;
};

export default function StatusMonitor() {
  const [data, setData] = useState<{ timestamp: string; checks: Check[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const fetchStatus = async () => {
    try {
      const res = await fetch("/api/status", { cache: "no-store" });
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Failed to fetch website statuses:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary_red hover:bg-red-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
        aria-label="Toggle status monitor"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      {/* Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-opacity-30 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <div
            role="dialog"
            aria-label="Website Status Monitor"
            className="fixed bottom-24 right-6 z-50 w-96 max-h-[600px] overflow-y-auto p-5 border border-primary_red dark:border-accent_gray rounded-xl bg-white dark:bg-primary-dark-gray shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {loading || !data ? (
              <div aria-live="polite" className="text-gray-600 dark:text-gray-300 text-center py-8">
                <Atom color={["#dc1b2f", "#306bea"]} />
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-primary_red dark:text-white mb-3">
                  Website Statuses
                </h2>
                <p className="text-xs mb-4 text-gray-700 dark:text-gray-300">
                  Last checked: <strong>{new Date(data.timestamp).toLocaleString()}</strong>
                </p>
                <ul className="space-y-3">
                  {data.checks.map((c) => (
                    <li
                      key={c.id}
                      className="flex flex-col border border-primary_red dark:border-accent_gray p-3 rounded-lg bg-gray-50 dark:bg-gray-900"
                    >
                      <div>
                        <strong className="text-accent_gray dark:text-white text-sm break-all">
                          {c.url}
                        </strong>
                      </div>
                      <div className="text-xs mt-2">
                        <span
                          className={`font-medium ${
                            c.ok
                              ? "text-green-600 dark:text-green-400"
                              : "text-red-600 dark:text-red-400"
                          }`}
                        >
                          {c.ok ? "✓ Online" : "✗ Offline"}
                        </span>
                        {c.status !== null && (
                          <span className="ml-2 text-gray-600 dark:text-gray-400">
                            ({c.status})
                          </span>
                        )}
                        {c.responseTimeMs && (
                          <span className="ml-2 text-gray-600 dark:text-gray-400">
                            • {c.responseTimeMs}ms
                          </span>
                        )}
                        {c.error && (
                          <span className="block mt-1 text-red-500 dark:text-red-400 text-xs">
                            Error: {c.error}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}