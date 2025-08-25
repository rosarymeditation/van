import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/default.jpg";
import userTwoImg from "../public/img/default.jpg";
import userThreeImg from "../public/img/default.jpg";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {/* Testimonial 1 */}
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
              TyneMove made my house move completely stress-free. The team was
              on time, friendly, and took great care of all my belongings.
            </p>
            <Avatar
              image={userOneImg}
              name="James R."
              title="Homeowner, Newcastle"
            />
          </div>
        </div>

        {/* Testimonial 2 */}
        <div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
              Excellent service! TyneMove helped relocate my office smoothly.
              Everything was handled quickly and at a very fair price.
            </p>
            <Avatar
              image={userTwoImg}
              name="Emma W."
              title="Business Owner, Sunderland"
            />
          </div>
        </div>

        {/* Testimonial 3 */}
        <div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
              Booking was simple, and the team kept me updated throughout the
              process. Moving day was stress-free thanks to TyneMove!
            </p>
            <Avatar
              image={userThreeImg}
              name="Michael P."
              title="Durham Resident"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}
