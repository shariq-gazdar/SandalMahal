"use client";

import { Footer } from "flowbite-react";

import FullLogo from "../assets/Logo.png";
export function Foot() {
  return (
    <Footer container className="bg-black  text-white">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src={FullLogo}
            alt="SandalMahal Logo"
            name="SandalMahal"
          />

          <Footer.LinkGroup>
            <Footer.Link href="#" className="text-white">
              About
            </Footer.Link>
            <Footer.Link href="#" className="text-white">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#" className="text-white">
              Licensing
            </Footer.Link>
            <Footer.Link href="#" className="text-white">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href="#"
          by="SandalMahal™"
          year={2024}
          className="text-white"
        />
      </div>
    </Footer>
  );
}

export default Foot;
