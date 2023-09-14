import React from "react";
import Link from "next/link";

interface LinkInterface {
  text: string;
  href?: string;
}

interface Menu {
  heading: string;
  links: LinkInterface[];
}

const data: Menu[] = [
  {
    heading: "Company",
    links: [
      { text: "About" },
      { text: "Careers" },
      { text: "Logistic" },
      { text: "Privacy & Policy", href: "/privacy" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { text: "Help/FAQ", href: "/help" },
      { text: "Press" },
      { text: "Affiliates" },
    ],
  },
  {
    heading: "More",
    links: [
      { text: "Press Centre", href: "/press" },
      { text: "Our Blog", href: "/blogs" },
      { text: "Low fare tips", href: "/tips" },
    ],
  },
];

const ButtonComponent = (props: LinkInterface) => {
  return <Link href={props.href as string}>{props.text}</Link>;
};

const ListComponent = (props: Menu) => {
  return (
    <div>
      <div>{props.heading}</div>
      {props.links.map((item, index) => {
        const href = item.href || `/${item.text.toLowerCase()}`;
        return (
          <div className="flex flex-col">
            <ButtonComponent text={item.text} key={index} href={href} />
          </div>
        );
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="select-none">
      <div className="flex">
        {data.map((item, index) => {
          return (
            <ListComponent
              key={index}
              heading={item.heading}
              links={item.links}
            />
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
