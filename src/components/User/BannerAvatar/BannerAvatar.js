import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import ConfigModal from "../../Modal/ConfigModal";
import EditUserForm from "../../User/EditUserForm";
import AvatarNoFound from "../../../assets/png/avatar-no-found.png";
import { API_HOST } from "../../../utils/constant";
import { checkFollowApi } from "../../../api/follow";
import "./BannerAvatar.scss";

export default function BannerAvatar(props){
  const { user,loggedUser } = props;
  const [showModal, setShowModal] = useState(false);
  //console.log(user);

  const [following, setFollowing] = useState(null);

  const bannerUrl = user?.banner ?  `${API_HOST}/obtenerBanner?id=${user.id}` : null;
 // console.log(bannerUrl);
  const avatarUrl = user?.avatar ? `${API_HOST}/obtenerAvatar?id=${user.id}` : AvatarNoFound;

  useEffect(() => {
    checkFollowApi(user?.id).then(response => {
      if (response?.status){
        setFollowing(true);
      } else {
        setFollowing(false);
      }
    })
  }, [user])

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

          { loggedUser._id !== user.id && ((following ? <Button>Seguiendo</Button> : <Button>Seguir</Button>)) }
        </div>
      )}
      <ConfigModal show={showModal} setShow={setShowModal} title="Edita el perfil">
        <EditUserForm user={user} setShowModal={setShowModal} />
      </ConfigModal>
    </div>
  );

}
