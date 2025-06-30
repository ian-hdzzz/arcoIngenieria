
import { useEffect, useState } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    engineers: 0
  });

  const finalCounts = {
    years: 14,
    projects: 1000,
    clients: 200,
    engineers: 25
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounts({
          years: Math.floor(finalCounts.years * progress),
          projects: Math.floor(finalCounts.projects * progress),
          clients: Math.floor(finalCounts.clients * progress),
          engineers: Math.floor(finalCounts.engineers * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounts(finalCounts);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    { number: counts.years, label: "Años de Experiencia", suffix: "+" },
    { number: counts.projects, label: "Proyectos Completados", suffix: "+" },
    { number: counts.clients, label: "Clientes Satisfechos", suffix: "+" },
    { number: counts.engineers, label: "Profesionales", suffix: "" }
  ];

  return (
    <section 
      id="stats-section" 
      className=""
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-blue-100 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
