import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Youtube } from "lucide-react";
import { Mail } from "lucide-react";
import ThemeToggleButton from "../Header/ThemeToggleButton";
import { useAuth } from "../../auth";

const Footer = () => {
  const { userIsAuthenticated } = useAuth();

  return (
    <footer className="bg-teal-800 text-white">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="font-bold text-lg mb-2">About Us</h2>
          <p>
            Discover a world of culinary delights with us! Dive into our diverse
            collection of recipes, tips, and kitchen wisdom.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-bold text-lg mb-2">Quick Links</h2>
          <ul>
            <li>
              <Link
                to={Routes.RECIPE}
                className="hover:border-b-2 hover:border-teal-200 border-b-0 border-transparent"
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                to={Routes.ABOUT}
                className="hover:border-b-2 hover:border-teal-200 border-b-0 border-transparent"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to={Routes.CONTACT}
                className="hover:border-b-2 hover:border-teal-200 border-b-0 border-transparent"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                to={Routes.CONTACT}
                className="hover:border-b-2 hover:border-teal-200 border-b-0 border-transparent"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h2 className="font-bold text-lg mb-2">
            Subscribe to Our Newsletter
          </h2>
          <p>Get the latest recipes, tips, and more, straight to your inbox.</p>
          <form className="mt-4 flex">
            <Input
              type="email"
              className="w-full rounded-r-none"
              placeholder="Enter your email"
            />
            <Button
              type="submit"
              variant="secondary"
              className="py-2 px-4 ml-2 border border-gray-500 hover:border-teal-50 hover:bg-teal-900 dark:text-teal-900 dark:hover:text-white bg-teal-100 rounded-l-none"
            >
              Subscribe
            </Button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col gap-8  lg:justify-between lg:items-center ">
          <div className="lg:h-full">
            <h2 className="font-bold text-lg mb-2">Follow Us</h2>
            <div className="flex">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 hover:text-black"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 hover:text-black"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 hover:text-black"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 hover:text-black"
              >
                {/* <FaPinterest size={24} /> */}
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 hover:text-black"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 hover:text-black"
              >
                <Youtube size={24} />
              </a>
              <a
                href="mailto:info@yourrecipesite.com"
                className="mr-2 hover:text-black"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          {!userIsAuthenticated() && <ThemeToggleButton />}
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-6 border-t border-white-700">
        &copy; {new Date().getFullYear()} YumMe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
