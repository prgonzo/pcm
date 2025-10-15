import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
  email?: string;
  phone?: string;
  description?: string;
}

interface TeamSectionProps {
  members: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ members }) => {
  return (
    <section className="section-padding bg-white pt-0">
      <div className="container-praise">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div 
              key={index} 
              className="relative rounded-lg shadow-md overflow-hidden aspect-square sm:aspect-[4/5] md:aspect-[3/4] w-full group"
            >
              <div className="w-full h-full overflow-hidden">
                <img 
                  src={member.imageSrc} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-praise-dark/90 via-praise-dark/20 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">{member.name}</h3>
                <p className="text-white/80 text-sm sm:text-base mb-2 sm:mb-4">{member.role}</p>
                
                {member.description && (
                  <p className="text-white/90 text-sm leading-snug mb-3 line-clamp-3">
                    {member.description}
                  </p>
                )}
                
                <div className="space-y-1 sm:space-y-2">
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-white hover:underline block text-sm sm:text-base"
                    >
                      {member.email}
                    </a>
                  )}
                  
                  {member.phone && (
                    <a 
                      href={`tel:${member.phone?.replace(/[^0-9]/g, '')}`}
                      className="text-white hover:underline block text-sm sm:text-base"
                    >
                      {member.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
