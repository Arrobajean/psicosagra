import React from "react";
import { X, GraduationCap, Briefcase, Target, Award } from "lucide-react";
import { TeamMember } from "@/data/teamData";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMemberModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({
  member,
  isOpen,
  onClose,
}) => {
  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 pt-24 pb-6 md:pt-20 md:pb-6"
            onClick={onClose}
          >
            <div
              className="bg-white rounded-xl md:rounded-2xl shadow-2xl max-w-3xl w-full max-h-[calc(100vh-120px)] md:max-h-[calc(100vh-160px)] overflow-y-auto my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 md:p-6 rounded-t-xl md:rounded-t-2xl flex justify-between items-start">
                <div className="flex items-start gap-3 md:gap-6">
                  <div className="relative">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <svg
                          className="w-7 h-7 md:w-10 md:h-10 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-black">
                      {member.name}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                {/* Description */}
                <div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Specialties */}
                {member.specialties && member.specialties.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                      <Award className="w-4 h-4 md:w-5 md:h-5 text-black" />
                      <h4 className="text-base md:text-lg font-semibold text-black">
                        Especialidades
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {member.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 md:px-3 md:py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education */}
                {member.education && member.education.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                      <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-black" />
                      <h4 className="text-base md:text-lg font-semibold text-black">
                        Formación Académica
                      </h4>
                    </div>
                    <ul className="space-y-1.5 md:space-y-2">
                      {member.education.map((edu, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm md:text-base text-gray-700"
                        >
                          <span className="text-black mt-1">•</span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Experience */}
                {member.experience && (
                  <div>
                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                      <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-black" />
                      <h4 className="text-base md:text-lg font-semibold text-black">
                        Experiencia
                      </h4>
                    </div>
                    <p className="text-sm md:text-base text-gray-700">
                      {member.experience}
                    </p>
                  </div>
                )}

                {/* Approach */}
                {member.approach && (
                  <div>
                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                      <Target className="w-4 h-4 md:w-5 md:h-5 text-black" />
                      <h4 className="text-base md:text-lg font-semibold text-black">
                        Mi Enfoque
                      </h4>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed italic">
                      "{member.approach}"
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 p-4 md:p-6 bg-gray-50 rounded-b-xl md:rounded-b-2xl">
                <p className="text-xs md:text-sm text-gray-600 text-center">
                  ¿Te gustaría trabajar con {member.name.split(" ")[0]}?{" "}
                  <a
                    href="#contacto"
                    onClick={onClose}
                    className="text-black font-semibold hover:underline"
                  >
                    Solicita tu primera consulta
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TeamMemberModal;
