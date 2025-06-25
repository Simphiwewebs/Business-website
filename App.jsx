import React from "react";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-4 md:p-10">
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your Business</h1>
        <p className="text-lg md:text-xl text-gray-600">We help you grow with modern solutions.</p>
      </section>

      <section className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input type="text" placeholder="Your Name" required className="w-full p-2 border rounded" />
          <input type="email" placeholder="Your Email" required className="w-full p-2 border rounded" />
          <input type="text" placeholder="Your Message" required className="w-full p-2 border rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </section>

      <footer className="text-center mt-10 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Your Business Name. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
