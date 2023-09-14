"use client";

import React from "react";
import Section from "@/components/Section";
import Image from "next/image";
import background from "public/background.jpeg";
import FeatureCard from "@/components/home/FeatureCard";
import JoinCard from "@/components/home/JoinCard";
import Heading from "@/components/home/Heading";
import ImageCoroutine from "@/components/ImageCoroutines";
import Button from "@/components/Button";

const features = [
  {
    heading: "Sign Up",
    body: "Completes all the work associated with planning and processing",
  },
  {
    heading: "Worth Of Money",
    body: "After successful access then book from exclusive deals & pricing",
  },
  {
    heading: "Exiting Travel",
    body: "Start and explore a wide range of exciting travel experience.",
  },
];

const Home = () => {
  return (
    <main>
      <Image alt="background image" src={background} className="-z-10" fill />
      <Section className="text-white flex flex-col justify-center" size="LARGE">
        <div className="px-7">
          <div className="flex flex-col">
            <Heading level="MEDIUM" className="p-3">OUR VISION</Heading>
            <Heading level="LARGE" className="p-2">MOTION</Heading>
          </div>
          <div className=" w-1/4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.
          </div>
          <div>
            <Button onClick={() => {}} className="my-3">Enroll Now</Button>
          </div>
        </div>
      </Section>
      <Section>
        <Heading>Why Join With Us?</Heading>
        <div>
          We ensure that you’ll embark on a perfectly planned, safe vacation at
          a price you can afford.
        </div>
        <div className="grid grid-cols-3 gap-3">
          {features.map((item, index) => (
            <FeatureCard key={index} heading={item.heading} body={item.body} />
          ))}
        </div>
      </Section>
      <Section>
        <Heading level="MEDIUM">OUR EVENTS</Heading>
        <Heading level="LARGE">OUR EVENT RESULT</Heading>
        <div>
          PageTraffic offers top-notch SEO and digital marketing solutions.
        </div>
      </Section>
      <Section>
        <Heading>Membership</Heading>
        <div className="grid grid-cols-2">
          <JoinCard heading="JOIN GNX" />
          <JoinCard heading="JOIN GNX CORE" />
        </div>
      </Section>
      <Section>
        <Heading>What People say about us.</Heading>
        <div>
          Our Clients send us bunch of smilies with our services and we love
          them.
        </div>
      </Section>
      <Section>
        <Heading>Get update with latest image</Heading>
        <div className="flex">
          <ImageCoroutine
            src={background}
            alt="uhgivdf"
            heading="Heading"
            body="Body"
          />
          <ImageCoroutine
            src={background}
            alt="uhgivdf"
            heading="Heading"
            body="Body"
          />
          <ImageCoroutine
            src={background}
            alt="uhgivdf"
            heading="Heading"
            body="Body"
          />
        </div>
      </Section>
      <Section>
        <Heading>Subscribe and get exclusive deals & offer</Heading>
      </Section>
    </main>
  );
};

export default Home;
