import { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import Link from 'next/link';

const NavbarComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {  
    setIsDropdownOpen(false);
    setHoveredItem(null);
  };

  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">CC IT SERVICES</Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Dropdown isOpen={isDropdownOpen} onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
          <NavbarItem className="relative" onMouseEnter={() => handleMouseEnter('features')} onMouseLeave={handleMouseLeave}>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white relative" // Added text-white class and relative position
                radius="sm"
                variant="light"
              >
                Features
                {hoveredItem === 'features' && (
                  <div className="bg-blue-500 h-1 w-full absolute bottom-0 left-0 transition-transform duration-300 origin-left transform"></div> // Added progress bar with transition
                )}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={handleMouseLeave}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              className="text-black" 
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              className="text-black" 
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              className="text-black" 
              description="ACME runs on ACME, join us and others serving requests at web scale."
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              className="text-black" 
              description="Applications stay on the grid with high availability and high uptime guarantees."
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              className="text-black" 
              description="Overcome any challenge with a supporting team ready to respond."
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* <NavbarItem isActive>
          <Link href="/services" aria-current="page" className="text-white">
            Services
          </Link>
        </NavbarItem> */}
        <Dropdown isOpen={isDropdownOpen} onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
          <NavbarItem className="relative" onMouseEnter={() => handleMouseEnter('features')} onMouseLeave={handleMouseLeave}>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white relative" // Added text-white class and relative position
                radius="sm"
                variant="light"
              >
                Services
                {hoveredItem === 'features' && (
                  <div className="bg-blue-500 h-1 w-full absolute bottom-0 left-0 transition-transform duration-300 origin-left transform"></div> // Added progress bar with transition
                )}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={handleMouseLeave}
          >
            <DropdownItem key="website-development">
              <Link href="/website-development">Website Development Services</Link>
            </DropdownItem>
            <DropdownItem key="wordpress-development">
              <Link href="/wordpress-development">WordPress Development Services</Link>
            </DropdownItem>
            <DropdownItem key="e-commerce-development">
              <Link href="/e-commerce-development">E-commerce Development Services</Link>
            </DropdownItem>
            <DropdownItem key="content-management">
              <Link href="/content-management">Content Management Solutions</Link>
            </DropdownItem>
            <DropdownItem key="custom-web-app">
              <Link href="/custom-web-app">Custom Web App Development</Link>
            </DropdownItem>
            <DropdownItem key="website-maintenance">
              <Link href="/website-maintenance">Website Maintenance Services</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;




