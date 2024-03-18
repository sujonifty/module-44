import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const PriceOptions=[
        {
          "id": 1,
          "name": "Gym Membership - Basic",
          "price": "$30/month",
          "features": ["Access to gym equipment", "Locker room access"]
        },
        {
          "id": 2,
          "name": "Gym Membership - Premium",
          "price": "$50/month",
          "features": ["Access to gym equipment", "Locker room access", "Group fitness classes", "Personal trainer consultation"]
        },
        {
          "id": 3,
          "name": "Personal Training Package - 10 sessions",
          "price": "$400",
          "features": ["10 one-on-one personal training sessions with certified trainer"]
        },
        {
          "id": 4,
          "name": "Group Fitness Classes - Monthly Pass",
          "price": "$80/month",
          "features": ["Unlimited access to group fitness classes"]
        },
        {
          "id": 5,
          "name": "Sauna and Steam Room Access",
          "price": "$20/month",
          "features": ["Access to sauna and steam room facilities"]
        },
        {
          "id": 6,
          "name": "Nutritional Counseling Session",
          "price": "$75/session",
          "features": ["1-hour session with certified nutritionist"]
        }
      ]
    return (
        <div>
            <h2 className="text-3xl">Best price</h2>
            {
                PriceOptions.map(option=><PriceOption key={Option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;