"use client";
import { useEffect, useState } from "react";
import { Atom } from "react-loading-indicators";
import { 
  IoCheckmarkCircle, 
  IoCloseCircle, 
  IoClose, 
  IoTime,
  IoSpeedometer,
  IoRefresh
} from "react-icons/io5";
import { MdMonitor } from "react-icons/md";

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

  const allOnline = data?.checks.every(c => c.ok) ?? false;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Toggle status monitor"
      >
        <div className="relative">
          {/* Pulse animation ring */}
          {allOnline && (
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
          )}
          
          {/* Main button */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-[#DC1B36] to-red-700 hover:from-red-600 hover:to-red-800 rounded-2xl shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-xl">
            <MdMonitor className="w-7 h-7 text-white" />
            
            {/* Status indicator dot */}
            <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
              allOnline ? 'bg-green-500' : 'bg-yellow-500'
            } animate-pulse`} />
          </div>
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <div
            role="dialog"
            aria-label="Website Status Monitor"
            className="fixed bottom-24 right-6 z-50 w-[90%] sm:w-[420px] max-h-[650px] rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#DC1B36] to-red-700 p-6 text-white relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <IoClose className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3 mb-2">
                <MdMonitor className="w-8 h-8" />
                <h2 className="text-2xl font-bold">System Status</h2>
              </div>
              
              <div className="flex items-center gap-2 text-red-100 text-sm">
                <IoTime className="w-4 h-4" />
                <span>Updated {data ? new Date(data.timestamp).toLocaleTimeString() : '...'}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    fetchStatus();
                  }}
                  className="ml-auto p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Refresh status"
                >
                  <IoRefresh className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[480px] overflow-y-auto">
              {loading || !data ? (
                <div aria-live="polite" className="text-center py-12">
                  <Atom color={["#DC1B36", "#686B6F"]} size="medium" />
                  <p className="text-gray-500 dark:text-gray-400 mt-4">Loading status...</p>
                </div>
              ) : (
                <>
                  {/* Overall Status Banner */}
                  <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                    allOnline 
                      ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                      : 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800'
                  }`}>
                    {allOnline ? (
                      <>
                        <IoCheckmarkCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-green-900 dark:text-green-100">All Systems Operational</p>
                          <p className="text-xs text-green-700 dark:text-green-300">Everything is running smoothly</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <IoCloseCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-yellow-900 dark:text-yellow-100">Partial Outage Detected</p>
                          <p className="text-xs text-yellow-700 dark:text-yellow-300">Some services are unavailable</p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Status Cards */}
                  <div className="space-y-4">
                    {data.checks.map((c) => (
                      <div
                        key={c.id}
                        className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4 hover:shadow-md transition-all duration-200"
                      >
                        {/* Status indicator stripe */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                          c.ok ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                        
                        <div className="pl-3">
                          {/* URL and Status */}
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-gray-900 dark:text-white text-sm break-all">
                                {c.url}
                              </p>
                            </div>
                            
                            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                              c.ok 
                                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                                : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                            }`}>
                              {c.ok ? (
                                <>
                                  <IoCheckmarkCircle className="w-3.5 h-3.5" />
                                  Online
                                </>
                              ) : (
                                <>
                                  <IoCloseCircle className="w-3.5 h-3.5" />
                                  Offline
                                </>
                              )}
                            </div>
                          </div>

                          {/* Metrics */}
                          <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                            {c.status !== null && (
                              <div className="flex items-center gap-1">
                                <span className="font-medium">Status:</span>
                                <span className={`px-2 py-0.5 rounded ${
                                  c.status >= 200 && c.status < 300 
                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                                }`}>
                                  {c.status}
                                </span>
                              </div>
                            )}
                            
                            {c.responseTimeMs && (
                              <div className="flex items-center gap-1.5">
                                <IoSpeedometer className="w-3.5 h-3.5" />
                                <span>{c.responseTimeMs}ms</span>
                              </div>
                            )}
                          </div>

                          {/* Error Message */}
                          {c.error && (
                            <div className="mt-3 p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                              <p className="text-xs text-red-600 dark:text-red-400 flex items-start gap-2">
                                <IoCloseCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span className="break-all">{c.error}</span>
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer Note */}
                  <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
                    Auto-refreshes every 15 seconds
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}