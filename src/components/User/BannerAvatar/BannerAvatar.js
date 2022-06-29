import React from "react";
import { API_HOST } from "../../../utils/constant";
import "./BannerAvatar.scss";

export default function BannerAvatar(props){
  const { user } = props;
  //console.log(user);
  const bannerUrl = user?.banner ?  `${API_HOST}/obtenerBanner?id=${user.id}` : null;
  console.log(bannerUrl);
  return(
    <div className="banner-avatar"
         style={{ backgroundImage:  `url('${bannerUrl}')`}}
    >
    <div className="avatar" />
    </div>
  );

}
