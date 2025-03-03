// icons
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoMediumOld } from "react-icons/bi";
import { AiOutlineTikTok } from "react-icons/ai";
import FooterMobileSection from "./FooterMobileSection";
import HubspotFooterImage from "../assets/logo/HubspotFooterImage.svg";
import appleLogoImg from "../assets/Images/apple-image-logo.webp";
import PlayStoreLogoImg from "../assets/Images/google-play-logo.webp";

const Footer = () => {
  return (
    <section className="bg-[#192733] py-10 lg:px-40">
      {/* mobile */}
      <main className="md:hidden block">
        <FooterMobileSection />
      </main>
      {/* large */}
      <main className="md:flex hidden items-start">
        <div className="w-[40%] ">
          <h3 className="font-bold text-white mb-5">Popular Features</h3>
          <div className="flex text-[#c4c4c4] items-start gap-5 justify-between">
            <div className="space-y-3">
              <p>
                <a className="hover:underline" href="##">
                  All Products and Features
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Free Meeting Schedular App
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Breeze AI Tools
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Email Tracking Software
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  AI Content Writer
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  AI Website Generator
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Email Marketing
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Software
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Lead Management Software
                </a>
              </p>
            </div>
            <div className="space-y-3">
              <p>
                <a className="hover:underline" href="##">
                  Free Website Builder
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Sales Email Templates
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Free Online Form Builder
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Free Chatbot Builder
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Free Live Chat Software
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Marketing Analytics
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Free Landing Page Builder
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Free Web Hosting
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className=" text-[#c4c4c4] flex justify-between lg:gap-10 gap-5 ml-10 w-[60%] pl-12 border-l border-gray-200 ">
          <div>
            <h3 className="font-bold text-white mb-5">Free Tools</h3>
            <div className="space-y-3">
              <p>
                <a className="hover:underline" href="##">
                  See All Free Business Tools
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  AI Search Grader
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Clip Creator
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Website Grader
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Make My Persona
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Email Signature
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Generator
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Brand Kit Generator
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Blog Ideas Generator
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Invoice Generator
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Free Business
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Templates
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Guide Creator
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Software
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Companies Library
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Templates Marketplace
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Campaign Assistant
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Landing Page Creator
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-5">Company</h3>
            <div>
              <p>
                <a className="hover:underline" href="##">
                  About Us
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Careers
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Management Team
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Board of Directors
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Investors Relations
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Blog
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Contact Us
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-5">Customers</h3>
            <div className="space-y-3">
              <p>
                <a className="hover:underline" href="##">
                  Customer Support
                </a>
              </p>
              <p>
                <a className="hover:underline" href="##">
                  Join a Local User Group
                </a>
              </p>
            </div>
            <div className="mt-64">
              <h3 className="font-bold text-white mb-5">Partners</h3>
              <div className="space-y-3">
                <p>
                  <a className="hover:underline" href="">
                    All Partner Programs
                  </a>
                </p>
                <p>
                  <a className="hover:underline" href="">
                    Solutions Partner Program
                  </a>
                </p>
                <p>
                  <a className="hover:underline" href="">
                    App Partner Program
                  </a>
                </p>
                <p>
                  <a className="hover:underline" href="">
                    HubSpot for Startups
                  </a>
                </p>
                <p>
                  <a className="hover:underline" href="">
                    Affiliate Program
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className=" py-10 flex gap-10 items-center">
        <div className="h-0.5 w-1/2 bg-[#c4c4c4] md:block hidden"></div>
        <div className="flex m-auto space-x-8">
          <FaFacebookF size={25} color="#c4c4c4" />
          <FiInstagram size={25} color="#c4c4c4" />
          <FaYoutube size={25} color="#c4c4c4" />
          <FaXTwitter size={25} color="#c4c4c4" />
          <FaLinkedinIn size={25} color="#c4c4c4" />
          <BiLogoMediumOld size={25} color="#c4c4c4" />
          <AiOutlineTikTok size={25} color="#c4c4c4" />
        </div>
        <div className="h-0.5 w-1/2 bg-[#c4c4c4] md:block hidden"></div>
      </main>

      <main className=" my-8">
        <div className="flex justify-center gap-3 my-12">
          <img src={appleLogoImg} alt="appleLogoImg" />
          <img src={PlayStoreLogoImg} alt="PlayStoreLogoImg" />
        </div>
        <div className="space-y-2">
          <img
            className="w-[100px] m-auto"
            src={HubspotFooterImage}
            alt="HubspotFooterImage"
          />

          <p className="text-center text-sm text-[#c4c4c4] font-semibold">
            Copyright © 2025 HubSpot, Inc.
          </p>
        </div>
        <div className=" flex w-[90%] text-center m-auto mt-5">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 w-full">
            <div className="w-full border-r border-gray-200">
              <a
                className="text-white underline text-sm font-semibold"
                href="##"
              >
                Legal Stuff{" "}
              </a>
            </div>
            <div className="w-full border-r border-gray-200">
              <a
                className="text-white underline  text-sm font-semibold"
                href="##"
              >
                Privacy Policy{" "}
              </a>
            </div>
            <div className="w-full border-r border-gray-200">
              <a
                className="text-white underline  text-sm font-semibold"
                href="##"
              >
                Security{" "}
              </a>
            </div>
            <div className="w-full border-r border-gray-200">
              <a
                className="text-white underline  text-sm font-semibold"
                href="##"
              >
                Website Accessibility{" "}
              </a>
            </div>
            <div>
              <a
                className="text-white underline  text-sm font-semibold"
                href="##"
              >
                Manage Cookies
              </a>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Footer;
