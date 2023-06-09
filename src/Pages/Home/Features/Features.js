import React from "react";

const Features = () => {
return (
    <div className="bg-gray-100 py-10 px-5">
        <h1 className="text-3xl font-semibold text-center mb-5">Our Features</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 text-center">
            <div className="border bg-white">
                <h3 className="pt-4 text-xl font-medium">1. Re-sale Mobile Phone</h3>
                <p className="px-5">Basically there are so many people whose are want to sell their old mobile phone and the smilar way some people want to buy second hand product for some reason. That's why we make this website so that they can connect each other.</p>
            </div>
            <div className="border bg-white">
                <h3 className="pt-4 text-xl font-medium">2. Swap Mobile Phone</h3>
                <p className="px-5">That means you can exchange your mobile phone with other person mobile. If your mobile hight quality than other person with whom you gonna exchange you will get some money plus mobile phone</p>
            </div>
            <div className="border bg-white">
            <h3 className="pt-4 text-xl font-medium">3. Payment Getway</h3>
                <p className="px-5">First of all you need to book which product you want to buy after successfully booked you will go to the dashboard. where you will see your order history. Then you can payment by stripe by clicking buy now button. </p>
            </div>
        </div>
    </div>
)
}
export default Features;