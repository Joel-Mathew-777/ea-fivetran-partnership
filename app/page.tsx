import StatusMonitor from "./components/StatusMonitor";
import Link from "next/link";

const buttons_links = [
  {title: 'Express Analytics', url: 'https://www.express-analytics.com/'},
  {title: 'Fivetran', url: 'https://www.fivetran.com/'},
  {title: 'EA Theme', url: '/pages/fivetran-partnership/ea-theme'},
  {title: 'Creative Theme', url: '/pages/fivetran-partnership/creative'},
]
export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
      
      {/* {buttons_links.map((button, index) => (
        <Link
          key={index}
          href={button.url}
          className="text-sm font-semibold leading-6 text-gray-900 dark:text-white mr-4 border-b-2 border-transparent hover:border-red-600 pb-1 mb-4"
        >
          {button.title}
        </Link>
      ))} */}
      
      <StatusMonitor />
    </div>

  );
}
