import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

const teamMembers = [
  {
    id: 1,
    name: 'Name 1',
    role: 'Role 1',
    image: '/images/team/placeholder.png',
    description:
      'Description 1',
  },
  {
    id: 2,
    name: 'Name 2',
    role: 'Role 2',
    image: '/images/team/placeholder.png',
    description:
      'Description 2',
  },
  {
    id: 3,
    name: 'Name 3',
    role: 'Role 3',
    image: '/images/team/placeholder.png',
    description:
      'Wirtschaftsingenieur mit zwei Jahren Erfahrung als Webentwickler. Er sorgt für unsere digitale Infrastruktur.',
  },
  {
    id: 4,
    name: 'Name 4',
    role: 'Role 4',
    image: '/images/team/placeholder.png',
    description:
      'Description 4',
  },
];

export default function Team() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4">
            Unser Team
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Menschen hinter Green Valley Club
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`reveal stagger-${index + 1} group`}
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative bg-card rounded-3xl overflow-hidden border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-0 text-xs mb-2"
                  >
                    {member.role}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  
                  {/* Description - shows on hover */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      hoveredId === member.id ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="w-8 h-0.5 bg-primary mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
