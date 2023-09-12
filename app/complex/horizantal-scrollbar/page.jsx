import React from "react";
import HorizontalScrollbar from "@/components/horizontal-scrollbar/HorizontalScrollbar";
import Image from "next/image";

const categories = [
  "Music",
  "Gaming",
  "Entertainment",
  "News & Politics",
  "Sports",
  "Comedy",
  "How-to & Style",
  "Science & Technology",
  "Education",
  "Travel & Events",
  "Autos & Vehicles",
  "Pets & Animals",
  "Film & Animation",
  "People & Blogs",
  "Nonprofits & Activism",
  "Shows & Movies",
  "Trailers",
  "Art & Music",
  "Beauty & Fashion",
  "Cooking & Food",
  "DIY & Crafts",
  "Family & Parenting",
  "Fitness",
  "Home & Garden",
  "Personal Finance",
  "Religion & Spirituality",
  "Health",
  "Science & Education",
  "Social Issues & Causes",
  "Vlogging",
];

// create 20 random fake users
const users = new Array(20).fill(0).map((item, index) => {
  return {
    id: index,
    username: `U#${index}`,
    image: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 50)}`,
  };
});

const HorizantalScrollbarPage = () => {
  //console.log(users);
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <h1>Horizontal Scrollbar Page</h1>
      <br />
      <br />
      <h1 className="text-blue-800 text-2xl">Youtube Categories</h1>
      <HorizontalScrollbar scrollbar={false}>
        {categories.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-200 p-2 m-2 shrink-0 rounded-lg cursor-pointer hover:border-gray-400"
          >
            <h1>{item}</h1>
          </div>
        ))}
      </HorizontalScrollbar>
      <br />
      <br />
      <h1 className="text-blue-800 text-2xl">Instagram Stories</h1>
      <HorizontalScrollbar>
        {users.map((item) => (
          <div key={item.id} className="shrink-0">
            <Image
              scr={item.image}
              alt={item.username}
              className="w-14 h-14 rounded-full cursor-pointer hover:scale-125 transition-all duration-100"
            />
          </div>
        ))}
      </HorizontalScrollbar>
    </div>
  );
};

export default HorizantalScrollbarPage;
