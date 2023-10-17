/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div>
      <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
        <Link href="/product">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 flex p-3">
              <div>
                {/* <Image
                  src={
                    "https://res.cloudinary.com/arafatleo/image/upload/v1697476630/hero/pexels-photo-1797393_nfr5er.jpg"
                  }
                  alt="product anme"
                  height={600}
                  width={500}
                /> */}
                <img
                  className="h-full"
                  src="https://res.cloudinary.com/arafatleo/image/upload/v1697476630/hero/pexels-photo-1797393_nfr5er.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="md:w-2/4">
              <div className="p-4">
                <p>Test</p>

                <div className="flex flex-wrap items-center space-x-2 mb-2">
                  <div className="ratings">
                    <div className="my-1">
                      {/* <StarRatings
                      rating={product?.ratings}
                      starRatedColor="#ffb829"
                      numberOfStars={5}
                      starDimension="18px"
                      starSpacing="1px"
                      name="rating"
                    /> */}
                    </div>
                  </div>
                  <b className="text-gray-300">•</b>
                  <span className="ml-1 text-yellow-500">10</span>
                </div>
                <p className="text-gray-500 mb-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti natus excepturi molestiae repellat provident veniam!
                  Ad natus magnam consectetur esse error quod eligendi eveniet
                  veniam nobis possimus, minima incidunt neque animi optio
                  itaque iure dolore tempora! Placeat debitis et impedit totam
                  voluptatum magni molestias aspernatur enim nulla sed, fugit
                  suscipit!
                </p>
              </div>
            </div>
            <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
              <div className="p-5">
                <span className="text-xl font-semibold text-black">$1500</span>

                <p className="text-green-500">Free Shipping</p>
                <div className="my-3">
                  <a className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                    {" "}
                    Add to Cart{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
};

export default Card;
