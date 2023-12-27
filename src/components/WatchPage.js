import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {closeMenu} from "../utils/appSlice";
import {useSearchParams} from "react-router-dom";
import  CommentsContainer  from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
   const [searchParams] =useSearchParams();
  const dispatch=useDispatch();
   
    useEffect(()=>{

    dispatch(closeMenu());
   },[]);
   
    return (
        <>
        <div className="flex flex-col w-full ">
        <div className="px-5 flex w-full">
            <div>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+ searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
        <div className="w-full col-span-3"><LiveChat/></div>
        <CommentsContainer/>

        </div>
        </>
    );
};

export default WatchPage;
