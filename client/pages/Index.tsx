import { useState } from "react";
import {
  MapPin,
  Home,
  Cake,
  School,
  Phone,
  Facebook,
  Mail,
  Briefcase,
  Code,
  Award,
  Instagram,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  const userInfo = {
    name: "Siam Hasan",
    title: "Digital Creator",
    bio: "Passionate digital creator focused on creating innovative solutions and engaging content",
    location: "Araihazar, Dhaka, Bangladesh",
    birthday: "16 September",
    school: "Govt. Safar Ali College",
    college: "Govt. Safar Ali College",
    highSchool: "Shinghadi M. A. Motalab Bhuiyan High School",
    phone: "01931091653",
    email: "siamhasan@email.com",
    facebook: "https://www.facebook.com/share/1BNTAyyknL/",
    instagram: "siamhasanrodro",
  };

  const skills = [
    "Digital Content Creation",
    "Photography",
    "Video Editing",
    "Social Media Management",
    "Creative Direction",
    "Graphic Design",
  ];

  const projects = [
    {
      id: 1,
      title: "Digital Content Campaign",
      description: "Created engaging digital content that reached 50K+ audience",
      category: "Content Creation",
    },
    {
      id: 2,
      title: "Brand Photography Series",
      description: "Professional photography portfolio for local brands",
      category: "Photography",
    },
    {
      id: 3,
      title: "Social Media Strategy",
      description: "Developed and executed comprehensive social media strategies",
      category: "Strategy",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Siam Hasan</h1>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">
              About
            </a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition">
              Skills
            </a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Cover Photo Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-48 md:h-72 bg-gradient-to-br from-orange-400 via-yellow-300 to-blue-500 overflow-hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F1db204990c154da4986e8ac44c495cbb%2F1f7253de29ee4dff86481d19fff2699f?format=webp&width=800&height=1200"
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Header */}
          <div className="px-4 md:px-8 pb-12">
            <div className="flex flex-col md:flex-row md:items-end gap-4 -mt-16 md:-mt-20 relative z-10">
              {/* Profile Picture */}
              <div className="flex-shrink-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1db204990c154da4986e8ac44c495cbb%2Fe5b9fed0b2474cb79c1d1cf98027584b?format=webp&width=800&height=1200"
                  alt={userInfo.name}
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>

              {/* Name and Title */}
              <div className="flex-grow pb-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {userInfo.name}
                </h2>
                <p className="text-lg md:text-xl text-blue-600 font-semibold mt-1">
                  {userInfo.title}
                </p>
                <p className="text-gray-600 mt-3 max-w-2xl">
                  {userInfo.bio}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 md:flex-col">
                <a href={`mailto:${userInfo.email}`}>
                  <Button className="flex-1 md:w-40 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Contact Me
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="flex-1 md:w-40 border-gray-300 hover:bg-gray-100 font-semibold"
                >
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* About Section */}
        <section id="about" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar - Contact & Info */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <a
                        href={`tel:${userInfo.phone}`}
                        className="text-gray-900 font-medium hover:text-blue-600 transition"
                      >
                        {userInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a
                        href={`mailto:${userInfo.email}`}
                        className="text-gray-900 font-medium hover:text-blue-600 transition truncate"
                      >
                        {userInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="text-gray-900 font-medium">
                        {userInfo.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Cake className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Birthday</p>
                      <p className="text-gray-900 font-medium">
                        {userInfo.birthday}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <School className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Education</p>
                      <p className="text-gray-900 font-medium">
                        {userInfo.college}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-900 mb-4">
                    Follow Me
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={userInfo.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                      title="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://instagram.com/${userInfo.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
                      title="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              {/* About Card */}
              <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  About Me
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm a passionate digital creator with a focus on creating engaging content
                  and innovative solutions. With expertise in photography, video editing, and
                  social media management, I help brands tell their stories in compelling ways.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  My approach combines creativity with strategic thinking to deliver content
                  that resonates with audiences and drives meaningful engagement.
                </p>
              </div>

              {/* Skills Section */}
              <div
                id="skills"
                className="bg-white rounded-lg shadow-sm p-6 md:p-8"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Code className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Skills</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-800 hover:bg-blue-100 transition"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <Briefcase className="w-16 h-16 text-white opacity-30" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-blue-600 mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="text-blue-600 font-semibold hover:text-blue-700 transition flex items-center gap-1"
                  >
                    Learn More <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 md:p-12 text-center text-white mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Collaborate?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Let's work together to create something amazing!
          </p>
          <a href={`mailto:${userInfo.email}`}>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8"
            >
              Get In Touch
            </Button>
          </a>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>
            © 2024 {userInfo.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
