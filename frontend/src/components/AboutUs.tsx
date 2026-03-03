import React from 'react';
import { CheckCircle, Globe, Award, Users } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  img: string;
}

const AboutPage: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { name: 'Dr. Anand Rao', role: 'Founder & CEO', img: '/api/placeholder/150/150' },
    { name: 'Priya Sharma', role: 'CTO', img: '/api/placeholder/150/150' },
    { name: 'Raj Kumar', role: 'Lead Developer', img: '/api/placeholder/150/150' },
    { name: 'Meera Patel', role: 'UX Designer', img: '/api/placeholder/150/150' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Vignan Lab Manager</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simplifying laboratory resource management for educational institutions and research facilities.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="grid md:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Vignan Lab Manager, we're committed to transforming how educational institutions and research 
                facilities manage their laboratory resources. Our mission is to provide an intuitive, efficient, 
                and comprehensive solution that streamlines lab operations, enhances resource utilization, and 
                improves the learning experience.
              </p>
              <p className="text-gray-600">
                We believe that when administrative tasks are simplified, educators and researchers can focus on 
                what truly matters: innovation, learning, and discovery. Our platform is built on a foundation of 
                accessibility, reliability, and cutting-edge technology to meet the evolving needs of modern 
                educational institutions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 lg:p-12 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Excellence in user experience and technical performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Continuous innovation driven by user feedback</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Commitment to data security and privacy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Responsiveness to educational challenges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Sustainability in resource management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Vignan Lab Manager</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Solution</h3>
              <p className="text-gray-600">
                From inventory management to equipment scheduling, our platform offers a complete solution for all 
                laboratory resource needs, eliminating the need for multiple disconnected tools.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enhanced Efficiency</h3>
              <p className="text-gray-600">
                Automate routine tasks, reduce manual paperwork, and streamline processes to save valuable time for 
                administrators, teachers, and students alike.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">User-Centric Design</h3>
              <p className="text-gray-600">
                Our intuitive interface ensures minimal learning curve for all users, from administrators to students, 
                making resource management accessible to everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-indigo-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Lab Management?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join educational institutions across the country that are already benefiting from Vignan Lab Manager.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition duration-300">
                Get in Touch
              </a>
              <a href="/signup" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition duration-300">
                Sign Up for Free Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;