import React from "react";
import "./zommer.css";
import "./../assets/OnePlus.webp"





const zommer = [
{
    product_name:"OnePlus 12",
    company:"OnePlus",
    product_color:"Black",
    screen_size:6.82,
    screen_type:"LTPO AMOLED",
    storage:"256 GB",
    RAM:"12GB",
    camera:"50+64+48 MP",
    USB_port:"OTG, USB Type-C 3.2",
    band:"5G",
    Bluetooth:5.4



}
]
export const Zommer = () => {
return(
    <div className="product">
        {zommer.map(( zommer, index) => (
            <div className="">
            </div>
        )

    )}




















    </div>
)










}