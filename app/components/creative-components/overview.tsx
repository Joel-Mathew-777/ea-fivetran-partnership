// Overview Section Component
const OverviewSection = () => {
  return (
    <section className="py-16 px-6 bg-white dark:bg-primary-dark-gray min-h-[50vh]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Simplifying Hybrid Data Integration
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-red-50 dark:bg-gray-800 p-8 rounded-lg border-l-4 border-red-600 dark:border-primary_red">
            <p className="text-6xl font-bold text-red-600 dark:text-white mb-2">73%</p>
            <p className="text-lg text-gray-700 dark:text-white">
              of enterprise data remains unused and untapped for insights
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-700 dark:text-white">
              By combining Fivetran's automated data movement with Express
              Analytics' expertise in data modeling, marketing analytics, and
              AI-driven insights, organizations can quickly build adaptive data
              pipelines that adjust to schema changes and activate previously
              unused data to power advanced models.
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-700 dark:text-white">
          This "better together" approach simplifies the traditionally complex
          process of connecting, transforming, and operationalizing data,
          accelerating time-to-insight and improving business agility.
        </p>
      </div>
    </section>
  );
};

export default OverviewSection;