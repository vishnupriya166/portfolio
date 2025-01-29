import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 800,
  once: true
});

// Handle mobile menu
function setupMobileMenu() {
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Handle form submission
function setupContactForm() {
  const form = document.querySelector('#contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // Here you would typically send the form data to a server
    alert('Thanks for your message! I\'ll get back to you soon.');
    form.reset();
  });
}

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg fixed w-full z-50 top-0">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Vishnu Priya
          </h1>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-8">
            <a href="#about" class="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" class="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" class="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" class="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <!-- Mobile Menu Button -->
          <button id="menu-button" class="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden pb-4">
          <a href="#about" class="block py-2 text-gray-600 hover:text-blue-600">About</a>
          <a href="#projects" class="block py-2 text-gray-600 hover:text-blue-600">Projects</a>
          <a href="#skills" class="block py-2 text-gray-600 hover:text-blue-600">Skills</a>
          <a href="#contact" class="block py-2 text-gray-600 hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div class="max-w-6xl mx-auto px-4 text-center" data-aos="fade-up">
        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 inline-block">
          <h2 class="text-5xl font-bold text-white mb-6">Frontend Developer</h2>
          <p class="text-xl text-white opacity-90 mb-8">Crafting beautiful and functional web experiences</p>
          <a href="#contact" class="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-up">About Me</h2>
        <div class="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up" data-aos-delay="100">
          <p class="text-gray-600 leading-relaxed text-lg">
            I'm a passionate frontend developer with a keen eye for design and a love for creating 
            intuitive user experiences. With expertise in modern web technologies, I bring ideas to 
            life through clean, efficient code and thoughtful user interfaces.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <div class="flex items-center text-gray-600">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
              <span>5+ Years Experience</span>
            </div>
            <div class="flex items-center text-gray-600">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <span>50+ Projects Completed</span>
            </div>
            <div class="flex items-center text-gray-600">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <span>30+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center" data-aos="fade-up">Featured Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project Card 1 -->
          <div class="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300" 
               data-aos="fade-up" data-aos-delay="100">
            <div class="relative">
              <img src="https://via.placeholder.com/400x300" alt="Project 1" class="w-full h-48 object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div class="absolute bottom-4 left-4">
                  <p class="text-white text-sm">React • TypeScript • Tailwind</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Project One</h3>
              <p class="text-gray-600 mb-4">A responsive web application built with modern technologies.</p>
              <a href="#" class="inline-flex items-center text-blue-500 hover:text-blue-600">
                View Project
                <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Project Card 2 -->
          <div class="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
               data-aos="fade-up" data-aos-delay="200">
            <div class="relative">
              <img src="https://via.placeholder.com/400x300" alt="Project 2" class="w-full h-48 object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div class="absolute bottom-4 left-4">
                  <p class="text-white text-sm">Next.js • Prisma • PostgreSQL</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Project Two</h3>
              <p class="text-gray-600 mb-4">An e-commerce platform with seamless user experience.</p>
              <a href="#" class="inline-flex items-center text-blue-500 hover:text-blue-600">
                View Project
                <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Project Card 3 -->
          <div class="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
               data-aos="fade-up" data-aos-delay="300">
            <div class="relative">
              <img src="https://via.placeholder.com/400x300" alt="Project 3" class="w-full h-48 object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div class="absolute bottom-4 left-4">
                  <p class="text-white text-sm">Vue.js • Firebase • TailwindCSS</p>
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Project Three</h3>
              <p class="text-gray-600 mb-4">A real-time dashboard for data visualization.</p>
              <a href="#" class="inline-flex items-center text-blue-500 hover:text-blue-600">
                View Project
                <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-12 text-center" data-aos="fade-up">Skills & Expertise</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="group" data-aos="fade-up" data-aos-delay="100">
            <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div class="text-center space-y-3">
                <div class="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <svg class="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-800">HTML/CSS</h3>
                <div class="w-full bg-gray-200 rounded-full h-1.5">
                  <div class="bg-blue-600 h-1.5 rounded-full" style="width: 95%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="group" data-aos="fade-up" data-aos-delay="200">
            <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div class="text-center space-y-3">
                <div class="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <svg class="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-800">JavaScript</h3>
                <div class="w-full bg-gray-200 rounded-full h-1.5">
                  <div class="bg-blue-600 h-1.5 rounded-full" style="width: 90%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="group" data-aos="fade-up" data-aos-delay="300">
            <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div class="text-center space-y-3">
                <div class="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <svg class="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-800">React</h3>
                <div class="w-full bg-gray-200 rounded-full h-1.5">
                  <div class="bg-blue-600 h-1.5 rounded-full" style="width: 85%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="group" data-aos="fade-up" data-aos-delay="400">
            <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div class="text-center space-y-3">
                <div class="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <svg class="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
                  </svg>
                </div>
                <h3 class="font-semibold text-gray-800">Tailwind CSS</h3>
                <div class="w-full bg-gray-200 rounded-full h-1.5">
                  <div class="bg-blue-600 h-1.5 rounded-full" style="width: 80%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-up">Get In Touch</h2>
        <div class="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up" data-aos-delay="100">
          <form id="contact-form" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-700 mb-2" for="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  required
                >
              </div>
              <div>
                <label class="block text-gray-700 mb-2" for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  required
                >
              </div>
            </div>
            <div>
              <label class="block text-gray-700 mb-2" for="message">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows="4" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-0.5 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">John Doe</h3>
            <p class="text-gray-400">Frontend Developer crafting beautiful web experiences</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#about" class="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" class="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" class="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#contact" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Connect</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-700 text-center">
          <p class="text-gray-400">© 2024 John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
`

// Initialize mobile menu and contact form after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setupContactForm();
});