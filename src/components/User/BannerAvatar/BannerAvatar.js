import React from "react";
import AvatarNoFound from "../../../assets/png/avatar-no-found.png";
import { API_HOST } from "../../../utils/constant";
import "./BannerAvatar.scss";

export default function BannerAvatar(props){
  const { user } = props;
  //console.log(user);
  const bannerUrl = user?.banner ?  `${API_HOST}/obtenerBanner?id=${user.id}` : null;
 // console.log(bannerUrl);
  const avatarUrl = user?.avatar ? `${API_HOST}/obtenerAvatar?id=${user.id}` : AvatarNoFound;
  return(
    <div className="banner-avatar"
         style={{ backgroundImage:  `url('${bannerUrl}')`}}
    >
    <div className="avatar"
         style={{ backgroundImage:  `url('${avatarUrl}')`}}
    />
    </div>
  );

}
