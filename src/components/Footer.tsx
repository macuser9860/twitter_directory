import React from 'react'
import { Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-600 to-blue-800 pb-6 text-white py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">X Influencer</h2>
            <p className="text-white-400 text-sm">
              Transform your social media presence with expert guidance and proven strategies for growth and engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-pink-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-red-500">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Partner Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://housedesigninnepal.com" className="hover:text-blue-400">
                  House Design Nepal
                </a>
              </li>
              <li>
                <a href="https://www.interiordesignernp.com" className="hover:text-blue-400">
                  Interior Designer NP
                </a>
              </li>
              <li>
                <a href="https://www.kathmandutechnician.com" className="hover:text-blue-400">
                  Kathmandu Technician
                </a>
              </li>
              <li>
                <a href="https://aenishshrestha.com" className="hover:text-blue-400">
                  Aenish Shrestha
                </a>
              </li>
              <li>
                <a href="https://uradagency.com" className="hover:text-blue-400">
                  URAD Agency
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-white-400">
          <p>© {new Date().getFullYear()} X Influencer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}