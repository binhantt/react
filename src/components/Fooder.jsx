import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 shadow-lg text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* DEVELOP Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">DEVELOP</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Guides</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Components</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">APIs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Architecture</a></li>
          </ul>
        </div>

        {/* PARTICIPATE Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">PARTICIPATE</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Showcase</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contributing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Directory</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Stack Overflow</a></li>
          </ul>
        </div>

        {/* FIND US Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">FIND US</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">X</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">GitHub</a></li>
          </ul>
        </div>

        {/* EXPLORE MORE Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">EXPLORE MORE</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-white">ReactJS</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
        <p>&copy; 2024 Meta Platforms, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
