"use client";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { teamMembers } from "@/app/data/teamMembers";

const TeamSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center gap-2 mb-12">
        <h5 className="text-xl text-orange-500 font-bold">You can count on!</h5>
        <h6 className="text-4xl text-navy-900 font-bold">Meet Our Team</h6>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

const TeamMemberCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="relative overflow-hidden h-[500px] group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
      />

      {/* Initial content - name and role */}
      <div
        className={`absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent
          transform transition-transform duration-500 ease-in-out ${
            isHovered ? "-translate-y-full" : "translate-y-0"
          }`}
      >
        <h3 className="text-2xl font-bold text-white text-center">
          {member.name}
        </h3>
      </div>

      {/* Overlay content - bio */}
      <div
        className={`absolute inset-0 flex flex-col justify-center text-center p-6 bg-navy/90
          transform transition-transform duration-500 ease-in-out ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
      >
        <h3 className="text-2xl font-bold text-orange mb-2">{member.name}</h3>
        <p className="text-gray-200 leading-relaxed">{member.bio}</p>
      </div>
    </Card>
  );
};

export default TeamSection;
