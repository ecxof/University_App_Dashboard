import { StatsCards } from "./components/StatsCards";
import { EnrollmentChart } from "./components/EnrollmentChart";
import { DepartmentBreakdown } from "./components/DepartmentBreakdown";
import { RecentActivities } from "./components/RecentActivities";
import { GradeDistribution } from "./components/GradeDistribution";
import { CourseTable } from "./components/CourseTable";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { QuickLinks } from "./components/QuickLinks";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Quick Links */}
        <QuickLinks />

        {/* Dashboard Section */}
        <section id="dashboard" className="mt-12">
          <div className="mb-8">
            <h2 className="text-slate-900">Analytics Dashboard</h2>
            <p className="text-slate-600 mt-2">
              Real-time insights and statistics for Academic Year 2024-2025
            </p>
          </div>

          {/* Stats Overview */}
          <StatsCards />

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <EnrollmentChart />
            <DepartmentBreakdown />
          </div>

          {/* Grade Distribution */}
          <div className="mt-6">
            <GradeDistribution />
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <CourseTable />
            </div>
            <div className="lg:col-span-1">
              <RecentActivities />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}