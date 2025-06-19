import React, { useEffect, useState } from "react";
import Strawberry from "../assets/Red_IceCream.png";
import Blueberry from "../assets/Blue_IceCream.png";
import Chocolate from "../assets/Chocolate_IceCream.png";
import Evergreen from "../assets/Green_IceCream.png";

const mainTitle = [
  "Strawberry cone",
  "Blueberry cone",
  "Chocolate cone",
  "Evergreen cone",
];

const imageArr = [
  {
    id: 0,
    img: Strawberry,
  },
  {
    id: 1,
    img: Blueberry,
  },
  {
    id: 2,
    img: Chocolate,
  },
  {
    id: 3,
    img: Evergreen,
  },
];

export default function Hero({ index, setIndex, handleChange }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(mainTitle[index]);
  const [imageAnimating, setImageAnimating] = useState(false);

  useEffect(() => {
    if (mainTitle[index] !== currentTitle) {
      setFadeOut(true);

      const timeout = setTimeout(() => {
        setCurrentTitle(mainTitle[index]);
        setFadeOut(false);
      }, 90);

      return () => clearTimeout(timeout);
    }
  }, [index, currentTitle]);

  const handleCategoryChange = (id) => {
    setImageAnimating(true);

    const tim1 = setTimeout(() => {
      handleChange(id);
    }, 100);

    const tim2 = setTimeout(() => {
      setImageAnimating(false);
    }, 300);
    return () => {
      clearTimeout(tim2);
      clearTimeout(tim1);
    };
  };

  return (
    <div className="flex w-full text-white overflow-hidden">
      <div className="ml-[126px]">
        <h1 className="text-[130px] leading-[100%] font-[Pacifico,cursive]">
          icecream
        </h1>

        <h2
          style={{ wordSpacing: "4px" }}
          className={`transition-all duration-90 transform mt-3 font-[700] ${
            fadeOut ? "opacity-0" : "opacity-100"
          } font-[Poppins,sans-serif] leading-[150%] text-[53px] `}
        >
          {currentTitle}
        </h2>

        <div
          style={{ wordSpacing: "3px" }}
          className="space-y-2 leading-[140%] font-[Poppins,sans-serif] mt-5 text-[16px] font-[600]"
        >
          <p>
            Embark on a culinary journey of delight as you immerse yourself in
            our <br /> artisan-crafted ice cream collection—each flavor a story,
            each scoop
            <br /> an unforgettable chapter in your sweet odyssey!
          </p>
          <p>
            Indulge in a world of imagination, where every scoop unveils <br />{" "}
            a new taste adventure! Choose your favorite.
          </p>
        </div>

        <div className="flex gap-[5rem] mt-[7rem]">
          {imageArr.map(({ id, img }) => (
            <div
              className="h-[45px] w-[45px] border-2 border-white rounded-[5px] relative cursor-pointer"
              onClick={() => handleCategoryChange(id)}
            >
              <img
                key={img}
                src={img}
                style={{
                  height: "300%",
                  width: "200%",
                }}
                alt=""
                className=" transition-all duration-300 ease-in-out h-[8rem] -top-10 -left-1 absolute rotate-[-8deg] hover:rotate-[10deg] hover:h-[10rem] hover:-top-13"
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <img
          src={imageArr[index].img}
          alt=""
          className="h-[98%] w-[25%] right-[10rem] absolute"
          style={{
            animationName: imageAnimating ? "goOut" : "comeIn",
            animationDuration: "0.8s",
          }}
        />
      </div>
    </div>
  );
}
