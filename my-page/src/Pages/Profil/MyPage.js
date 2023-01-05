import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { NavLink } from "react-router-dom";

function MyPage() {
  const { user, AuthService } = useContext(AuthContext);
  console.log(user.emailVerified);
  const handleVericfication = async (e) => {
    e.preventDefault();
    await AuthService.verificationp();
  };
  const url = user.photoURL;
  console.log(typeof url);
  console.log(url);
  const defaultPhoto =
    "https://media.istockphoto.com/id/1209654046/tr/vekt%C3%B6r/kullan%C4%B1c%C4%B1-avatar-profil-simgesi-siyah-vekt%C3%B6r-ill%C3%BCstrasyon.jpg?s=1024x1024&w=is&k=20&c=P-2lSDoaJxl61tZcPheHqZL-H0jaa3afY3BZdskOCm8=";

  return (
    <div>
      {user.photoURL === undefined ? (
        <>
          <img className="profilPhoto" src={defaultPhoto} />
        </>
      ) : (
        <>
          <img src={url} />
        </>
      )}
      <p>{user.providerData[0].uid}</p>
      <p>{user.metadata.lastSignInTime}</p>
      <p>{user.auth.displayName}</p>
      <p>
        {user.emailVerified === false ? (
          <p>Doğrulanmayan Email var</p>
        ) : (
          <p>Email Doğrulandı</p>
        )}
      </p>
      {user.emailVerified === false ? (
        <button onClick={handleVericfication}>Doğrula</button>
      ) : (
        ""
      )}

      {user.displayName === undefined ? (
        <>
          <p>isminizi güncelleyin ya da ben müzaffer yapacam</p>
        </>
      ) : (
        <>
          <h1>{user.displayName}</h1>
        </>
      )}

      <button>
        <NavLink to="UpdateProfil">update profil</NavLink>
      </button>
    </div>
  );
}

export default MyPage;
