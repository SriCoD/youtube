import React from "react";
import Button from "./Button";

const list = ["All", "live"];
const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Audiobooks" />
      <Button name="Horoscopes" />
      <Button name="Podcasts" />
      <Button name="Healing Music" />
      <Button name="News" />
      <Button name="Mountains" />
      <Button name="Health" />
    </div>
  );
};

export default ButtonList;


//hardcoded api or real world api