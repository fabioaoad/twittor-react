import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import ConfigModal from "../../Modal/ConfigModal";
import EditUserForm from "../../User/EditUserForm";
import AvatarNoFound from "../../../assets/png/avatar-no-found.png";
import { API_HOST } from "../../../utils/constant";
import { checkFollowApi, followUserApi, unfollowUserApi } from "../../../api/follow";
import "./BannerAvatar.scss";

export default function BannerAvatar(props){
  const { user,loggedUser } = props;
  const [showModal, setShowModal] = useState(false);
  //console.log(user);

  const [following, setFollowing] = useState(null);
  console.log(following);
  const [reloadFollow, setReloadFollow] = useState(false);

  const bannerUrl = user?.banner ?  `${API_HOST}/obtenerBanner?id=${user.id}` : null;
 // console.log(bannerUrl);
  const avatarUrl = user?.avatar ? `${API_HOST}/obtenerAvatar?id=${user.id}` : AvatarNoFound;

  useEffect(() => {
    if(user){
      checkFollowApi(user?.id).then(response => {
        if (response?.status){
          setFollowing(true);
        } else {
          setFollowing(false);
        }
      });
    }
    setReloadFollow(false);
  }, [user, reloadFollow]);


  const onFollow = () => {
    followUserApi(user.id).then(() => {
      setReloadFollow(true);
    })
  }

  const onUnFollow = () => {
    unfollowUserApi(user.id).then(() => {
      setReloadFollow(true);
    })
  }


  // console.log(loggedUser);
 // console.log(user);

  return(
    <div className="banner-avatar"
         style={{ backgroundImage:  `url('${bannerUrl}')`}}
    >
    <div className="avatar"
         style={{ backgroundImage:  `url('${avatarUrl}')`}}
    />
      {user && (
        <div className="options">
          { loggedUser._id === user.id && ( <Button onClick={() => setShowModal(true)}>Editar perfil</Button> ) }

          { loggedUser._id !== user.id && (following ? ( <Button onClick={onUnFollow} className="unfollow"><span>Siguiendo</span></Button> ) : ( <Button onClick={onFollow}>Seguir</Button>)) }
        </div>
      )}
      <ConfigModal show={showModal} setShow={setShowModal} title="Edita el perfil">
        <EditUserForm user={user} setShowModal={setShowModal} />
      </ConfigModal>
    </div>
  );

}
