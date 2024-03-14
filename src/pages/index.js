import Layout from "../components/Layout";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Input,
  Button,
  Image,
} from "@nextui-org/react";



const Services = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <ServiceCard title="Website development">
        <p>
          We create high-performance, fully customizable, and future-proof websites. Our team's websites are coded and developed using industry best practices and cutting-edge technology.
        </p>
      </ServiceCard>
      <ServiceCard title="UI & UX services">
        <p>
          Solutions for user-centric UI and UX design that can increase user engagement and organic traffic to your website. Our UX/UI services include user experience consulting, responsive web design, and mobile app development.
        </p>
      </ServiceCard>
      <ServiceCard title="E-commerce development">
        <p>
          By building a feature-rich, user-friendly end-to-end e-commerce website, online retailers may boost online sales and client retention with the help of innovative, scalable, and robust e-commerce website solutions.
        </p>
      </ServiceCard>
      <ServiceCard title="WordPress development">
        <p>
          Depending on your company's demands, our skilled WordPress developers may assist you with creating bespoke functionality for your WordPress site, whether it be a customized template or plugin.
        </p>
      </ServiceCard>
      <ServiceCard title="Landing page development">
        <p>
          Our highly converting landing pages enhance conversion and ROI for your PPC marketing efforts.
        </p>
      </ServiceCard>
      <ServiceCard title="CMS development">
        <p>
          Our CMS development solution allows you to create unique plugins and templates, as well as ensure the website runs smoothly and quickly.
        </p>
      </ServiceCard>
      <ServiceCard title="Website maintenance">
        <p>
          Your website should be constantly refreshed, updated, healthy & secure with website maintenance services.
        </p>
      </ServiceCard>
      <ServiceCard title="Application development">
        <p>
          Our excellent app development services can help you streamline business processes. You can rely on us for streamlined, effective solutions that promote success.
        </p>
      </ServiceCard>
    </div>
  );
};

const ServiceCard = ({ title, children }) => {
  return (
    <Card shadow>
      <CardHeader>
        <h2 className="text-lg font-semibold">{title}</h2>
      </CardHeader>
      <CardBody>
        <div className="p-4">
          {children}
        </div>
      </CardBody>
    </Card>
  );
};

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="flex hero mx-auto px-4 min-h-screen sm:px-6 lg:px-8 ">
          <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg"
            alt="Technology"
            className="absolute inset-0 object-cover w-full h-full blur-md"
          />
          <div className="w-1/2 relative grid md:grid-cols-1 gap-4 md:gap-8 xl:gap-20 md:items-center">
            {/* <div className="absolute inset-0 flex justify-center items-center">
            <div className="text-white text-center mx-auto max-w-lg p-8  bg-opacity-40 rounded-md shadow-lg">
              <h1 className="text-4xl font-bold mb-4">Welcome to CC IT Services </h1>
              <p className="mb-6">We offer a wide range of IT services to help your business grow.</p>
            </div>
          </div> */}

            <div className="flex flex-col">
              <h1 className="text-8xl font-bold mb-10">
                Welcome to CC IT Services{" "}
              </h1>
              <p className="text-4xl font-bold mb-10">
                Cutting-Edge Web Solutions Agency in India, Crafting Superior
                Online Experiences
              </p>

              <p className="text-2xl font-bold mb-10">
                {" "}
                Empower your digital presence with our cutting-edge web
                solutions, meticulously designed to elevate user experiences and
                drive impactful SEO outcomes. Backed by our comprehensive suite
                of services, we specialize in website design & development,
                digital marketing, and innovative creative services, ensuring
                your online success reaches new heights.
              </p>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Card>
              <CardBody style={{ width: "600px", height: "400px" }}>
                <div className="text p-8 bg-white rounded-md shadow-lg">
                  <h1 className="text-2xl font-semibold mb-4">
                    Enhance your website's design to elevate your online
                    achievements!
                  </h1>
                  <h2 className="text-xl  mb-4">
                    Are you prepared to engage with a top-tier web development
                    firm in India?
                  </h2>
                  <form>
                    <div className="mb-4">
                      <Input placeholder="Your Email" type="email" />
                    </div>
                    <div className="mb-4">
                      <Input placeholder="Your Phone Number" type="tel" />
                    </div>
                    <Button color="primary" variant="flat">
                      Submit
                    </Button>
                  </form>
                </div>
              </CardBody>
              <CardFooter className=" flex justify-center items-center">
                <Button
                  className=" flex justify-center items-center"
                  color="success"
                  variant="flat"
                >
                  Want to know more about us
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <Divider />
        <div className="flex hero mx-auto px-4 min-h-screen sm:px-6 lg:px-8 ">
  <div className="w-1/2 relative grid md:grid-cols-1 gap-4 md:gap-8 xl:gap-20 md:items-center p-8">
    <Image
      style={{ width: "600px", height: "600px" }}
      alt="NextUI hero Image"
      src="https://drkathyobear.com/wp-content/uploads/2018/05/solutions-puzzle-300x169.jpg"
    />
    <div className="text p-8  rounded-md shadow-lg">
      <h1 className="text-4xl font-semibold mb-4">
        Craft, Create & Promote!
      </h1>
      <h2 className="text-2xl  mb-4">
        Our expertise lies in crafting, developing, and promoting
        products or services.
      </h2>
    </div>
  </div>
  <div className="w-1/2  p-8">
    <h3 className="text-2xl  box-border border-4 text-center  font-semibold mb-4">Who We Are?</h3>
    <p className="mb-4 text-6xl">Your trusted partner for website development in India</p>
    <p className="mb-4 text-4xl">Mastery in website design & development paired with SEO expertise from Mumbai</p>
    <p className="mb-4 text-2xl">Coding Chaska leads the way as a top-tier website development and SEO agency in Mumbai. Armed with extensive industry knowledge and a track record of delivering intricate technological solutions for globally renowned brands, we serve clients across diverse sectors, guiding them towards achieving their objectives in the ever-evolving digital landscape.</p>
    <p className="mb-4 text-2xl">Under the banner of Coding Chaska, we are dedicated to propelling the growth of individuals, brands, and startups by enhancing their online presence and facilitating connections with expansive target audiences. Our comprehensive range of technology and digital services includes website design & development, digital marketing, and holistic graphic design solutions.</p>
    <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
      Know More
    </Button>
  </div>
</div>
<div className="bg-blue-900  min-h-screen  sm:px-6 lg:px-8  ">
  <div className="mx-auto px-4 " >
    <h1 className="text-6xl font-semibold text-center mb-4">
      Strategic Website Development Services
    </h1>
    <p className="mb-4 text-center text-xl">
      We provide strategic and performance-driven website design services, such as corporate website design and development, e-commerce website design, custom website design, website maintenance, and so on.
    </p>
    <Services />
  </div>
</div>
      </div>
    </Layout>
  );
}
