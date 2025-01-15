import React from "react";

const About = () => {
  return (
    <div className="container flex flex-wrap p-10 items-center justify-center mx-auto">
      <div className="border border-black p-4 rounded-md flex flex-col gap-5 w-[600px] bg-white">
        <h1 className="text-xl font-bold items-start pb-3">About Us</h1>
        <p className="text-sm leading-6 text-gray-500">
          Welcome to <strong>Amazing Credit Cards</strong>, your go-to directory
          for all things credit cards. In today’s fast-paced world, finding the
          right credit card can be overwhelming. With so many options, benefits,
          and hidden terms, it’s easy to get lost in the process. That’s where
          we come in.
        </p>
        <p className="text-sm leading-6 text-gray-500">
          At Amazing Credit Cards, we simplify the credit card selection
          process, making it easier for you to compare, research, and choose the
          card that best suits your needs. Whether you’re looking for travel
          rewards, cashback offers, or cards with no annual fees, we’ve got you
          covered.
        </p>
        <p className="text-sm leading-6 text-gray-500">
          Our website features a comprehensive directory of credit cards along
          with in-depth <strong> blog posts</strong>, comparisons, and reviews
          to help you make an informed decision. With unbiased reviews and
          easy-to-read information, you can navigate through the clutter and
          find the card that’s perfect for your financial goals.
        </p>

        <p className="text-sm leading-6 text-gray-500">
          Based in <strong>Goa, India</strong>, our mission is to offer a
          hassle-free, user-friendly platform for individuals looking to enhance
          their financial journeys. From lounge access to dining offers, from
          reward points to low-interest rates, we cover it all, ensuring that
          you have all the details you need before applying for a card.
        </p>

        <p className="text-sm leading-6 text-gray-500">
          We also understand the importance of making quick yet informed
          decisions. That’s why we provide side-by-side{" "}
          <strong>comparisons</strong> of key features of different credit
          cards, helping you weigh the pros and cons effortlessly. Our team
          works hard to ensure that the information presented is{" "}
          <strong>accurate</strong>, up-to-date, and reliable.
        </p>

        <p className="text-sm leading-6 text-gray-500">
          Whether you’re new to credit cards or an experienced user looking for
          an upgrade,{" "}
          <strong className="text-black">Amazing Credit Cards </strong>is your
          personal credit card advisor. Let us help you find the best deals,
          offers, and perks that fit your lifestyle.
        </p>

        <p className="text-sm leading-6 text-gray-500">
          Got a question or need assistance? Feel free to reach out to us at
          <a href="/" className="font-semibold underline text-black px-1">
            contact@amazingcreditcards.in.
          </a>{" "}
          We’re here to help you make the smart choice when it comes to credit
          cards!{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
