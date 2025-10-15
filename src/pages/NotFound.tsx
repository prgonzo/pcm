
import React from "react";
import { Link } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Header />
      
      <main className="flex-grow">
        <div className="min-h-[90vh] flex items-center justify-center bg-praise-bg py-32 md:py-40">
          <div className="text-center px-4 max-w-2xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-praise-title">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-praise-title">Page Not Found</h2>
            <p className="text-lg mb-10 text-praise-text">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/" 
                className="btn-primary inline-flex items-center justify-center"
              >
                <Home className="mr-2 h-4 w-4" /> Back to Home
              </Link>
              <Link 
                to="/contact-us" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default NotFound;
