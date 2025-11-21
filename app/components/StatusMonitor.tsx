"use client";
import { useEffect, useState } from "react";

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
    const interval = setInterval(fetchStatus, 15000); // refresh every 15 secs
    return () => clearInterval(interval);
  }, []);

  if (loading || !data) {
    return (
      <div aria-live="polite" className="text-gray-600 dark:text-gray-300">
        Checking website statuses...
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-label="Website Status Monitor"
      className="fixed bottom-6 right-6 z-50
             p-5 border border-accent_gray/50 rounded-xl bg-white dark:bg-primary-dark-gray shadow-xl
             w-80 md:w-96"
    >
      <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">
        Last checked: <strong>{new Date(data.timestamp).toLocaleString()}</strong>
      </p>

      <ul className="space-y-3">
        {data.checks.map((c) => (
          <li
            key={c.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between border border-accent_gray/50 p-3 rounded-lg 
            bg-gray-50 dark:bg-gray-900"
          >
            <div>
              <strong className="text-blue-600 dark:text-blue-400">{c.url} : </strong>
            </div>

            <div className="text-sm pl-2 mt-1 md:mt-0">
              <span
                className={`font-medium ${
                  c.ok ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}
              >
                {c.ok ? "Online" : "Offline"}
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
                <span className="ml-2 text-red-500 dark:text-red-400">
                  • Error: {c.error}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
