import StatusMonitor from "./components/StatusMonitor";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
      <h1 className="text-gray-600 dark:text-white">Hello</h1>
      <StatusMonitor />
    </div>

  );
}
