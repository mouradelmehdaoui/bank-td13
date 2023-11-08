import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginMiddleware } from "../middlewares/loginMiddleware";
import { useNavigate } from "react-router-dom";
import { setUserInfos } from "../treatments/services/authentication.service";
import { usernameCheck } from "../treatments/services/signIn.service";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const rememberMe = useSelector((state: any) => state.auth.rememberMe);
  const error = useSelector((state: any) => state.auth.error);

  const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    if ((event.target as HTMLInputElement).checked) {
      dispatch(setUserInfos({ rememberMe: true }));
    } else {
      dispatch(setUserInfos({ rememberMe: false }));
    }
  };

  // Fonction fléché pour soumettre formulaire pour se loguer
  const handleClick = (event: any) => {
    event.preventDefault();

    const username = (
      document.getElementById("username") as HTMLInputElement
    ).value.trim();
    const password = (
      document.getElementById("password") as HTMLInputElement
    ).value.trim();

	// création Div Error pour affichier message en cas de mauvaise type de saissie
    const zoneEmailErrorMsg = document.querySelector(
      "#emailError"
    ) as HTMLElement;
    const zoneConnectErrorMsg = document.querySelector(
      "#connectError"
    ) as HTMLElement;

    if (!usernameCheck(username)) {
      zoneEmailErrorMsg.innerHTML =
        "Merci de renseigner une adresse email valide";
      return;
    } else {
      zoneEmailErrorMsg.innerHTML = "";
      zoneConnectErrorMsg.innerHTML = "";
      loginMiddleware(
        dispatch,
        username,
        password,
        isLoggedIn,
        rememberMe,
        // Je passe ma fonction navigate vers la page profile en paramètre
        () => navigate("/profile/"),
        () => navigate("/profile/")
      )();
    }
  };

  // J'utilise le hook useEffect pour envoyer le message d'erreur si l'utilisateur ou le mot de passe est invalide
  useEffect(() => {
    const zoneConnectErrorMsg = document.querySelector(
      "#connectError"
    ) as HTMLElement;
    if (error !== null) {
      zoneConnectErrorMsg.innerHTML = "Utilisateur ou mot de passe invalide";
    } else {
      zoneConnectErrorMsg.innerHTML = "";
    }
  }, [error]);

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="email" id="username" autoComplete="off" />
              <span id="emailError"></span>
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
              <span id="connectError"></span>
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                onChange={handleCheckBox}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" onClick={handleClick}>
              Sign In
            </button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2023 Argent Bank</p>
      </footer>
    </>
  );
}

export default SignIn;
