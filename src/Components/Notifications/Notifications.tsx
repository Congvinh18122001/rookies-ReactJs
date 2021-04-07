import "./Notifications.css";
import { useState } from "react";
import React from 'react';
export interface IItemControlProps {
  id: number;
  typeControl: string;
}

export const ItemControl = ({ typeControl }: IItemControlProps) => {
  // const [checked, setChecked] = useState(false);
  // const handleClick = () => setChecked(!checked);
  //onClick={handleClick} checked={checked}
  return (
    <div className="row">
      <div className="col-sm-8 ">
        <b>{typeControl}</b>
        <p>Commits data and history</p>
      </div>
      <div className="col-sm-4">
        <label className="switch">
          <input type="checkbox"  />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};
const listItem: IItemControlProps[] = [
  {
    id: 1,
    typeControl: "Email Notification",
  },
  {
    id: 2,
    typeControl: "Push Notification",
  },
  {
    id: 3,
    typeControl: "Monthly Reports",
  },
  {
    id: 4,
    typeControl: "Quarter Reports",
  },
];
export const Notification = () => {
  return (
    <>
      <div className="notification-box">
        <h4>NOTIFICATIONS</h4>
        <div className="control-box">
          <p>Control your notification and auto-follow settings.</p>
          {listItem.map((item) => (
            <ItemControl key={item.id} {...item}></ItemControl>
          ))}
        </div>
      </div>
    </>
  );
};
