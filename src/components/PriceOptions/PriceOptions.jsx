import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const gymOfferings = [
    {
      id: 1,
      name: "Basic Gym Membership",
      price: "$30",
      features: ["Equipment Access", "Locker Room", "Wi-Fi", "Towel Service"]
    },
    {
      id: 2,
      name: "Premium Gym Membership",
      price: "$50",
      features: ["Equipment Access", "Locker Room", "Fitness Classes", "Personal Trainer", "Swimming Pool", "Sauna"]
    },
    {
      id: 3,
      name: "10 PT Sessions",
      price: "$400",
      features: ["1-on-1 Training", "Custom Plan", "Progress Tracking"]
    },
    {
      id: 4,
      name: "Group Fitness Pass",
      price: "$80",
      features: ["Unlimited Classes", "Variety", "Experienced Instructors"]
    },
    {
      id: 5,
      name: "Sauna & Steam Access",
      price: "$20",
      features: ["Sauna & Steam", "Ambiance", "Towel Service"]
    },
    {
      id: 6,
      name: "Nutritional Counseling",
      price: "$75",
      features: ["1-hr Session", "Meal Plan", "Guidance"]
    }
  ];



  return (
    <div>
      <h2 className="text-3xl">Best price</h2>
      <div className='grid  md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {
          gymOfferings.map(option => <PriceOption key={option.id} option={option}></PriceOption>)

        }
      </div>

    </div>
  );
};

export default PriceOptions;