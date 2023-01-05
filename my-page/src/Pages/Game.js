import React, { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Paper from "../rockPaperScissors/Paper.png";
import Rock from "../rockPaperScissors/Rock.png";
import Scissors from "../rockPaperScissors/Scissors.png";

function Game() {
  const { theme, setTheme, gameState, setGameState } =
    useContext(GlobalContext);

  const { userChoose, userAlt, pcChoose } = gameState;

  const random = Math.floor(Math.random() * 3);
  const options = [Paper, Rock, Scissors];
  const optionsStr = ["Paper", "Rock", "Scissors"];
  const pc = useRef(0);
  const user = useRef(0);

  useEffect(() => {
    console.log(pc.current.alt);
    console.log(user.current.alt);
  }, [userChoose]);

  const handleChoose = (e) => {
    setGameState((prev) => ({ ...prev, userChoose: e.target.src }));

    setGameState((prev) => ({ ...prev, userAlt: e.target.alt }));
  };
  return (
    <div className="gameContainer">
      <div className="gameCanvas">
        <div className="imgs">
          <img
            className="gamePicture backGroundNone"
            src={Rock}
            alt="Rock"
            onClick={handleChoose}
          />
          <img
            className="gamePicture backGroundNone"
            src={Scissors}
            alt="Scissors"
            onClick={handleChoose}
          />
          <img
            className="gamePicture backGroundNone"
            src={Paper}
            alt="Paper"
            onClick={handleChoose}
          />
        </div>
        <hr />

        <div className=" backGroundNone gameNamesContainer">
          <h1 className="backGroundNone gameNames">Rock Paper Scissors</h1>
        </div>
        <hr />
        <div className="gameChooseContainmr">
          <h2 className="gameSkor choose backGroundNone">You</h2>
          {userChoose && (
            <div className="chooseContainer">
              <img
                className="gamePicture backGroundNone chooseImg"
                src={userChoose}
                ref={user}
                alt={userAlt}
              />
              <img
                className="gamePicture backGroundNone chooseImg"
                src={options[random]}
                alt={optionsStr[random]}
                ref={pc}
              />
            </div>
          )}

          <h2 className="gameSkor backGroundNone choose backGroundNone">Pc</h2>
        </div>
        <hr />
        <div className="skorContainer backGroundNone">
          <h2 className="gameSkor backGroundNone ">
            User <br /> <span className="skorNumber backGroundNone">1</span>
          </h2>
          <h1 className="skor">Skor</h1>
          <h2 className="gameSkor backGroundNone backGroundNone">
            Pc
            <br /> <span className="skorNumber backGroundNone ">1</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Game;

// function Game() {
//   const {
//     theme,
//     setTheme,
//     userChoose,
//     setUserChoose,
//     setPcChoose,
//     pcChoose,
//     setAltData,
//     altData,
//   } = useContext(GlobalContext);

//   const pc = useRef(0);
//   const user = useRef(0);

//   const random = Math.floor(Math.random() * 3);
//   const options = [paper, rock, scissors];

//   const handleChoose = (e) => {
//     setAltData(e.target.alt);
//     setUserChoose(e.target.src);
//   };
//   console.log(userChoose);
//   console.log(options[0] == userChoose);

//   useEffect(() => {
//     if (options[0] === pcChoose) {
//       if (setUserChoose === options[2]) {
//         console.log("kazandın");
//       } else if (setUserChoose == options[1]) {
//         console.log("kaybettin");
//       } else {
//         console.log("Berabere");
//       }
//     } else if (options[1] === pcChoose) {
//       if (setUserChoose === 2) {
//         console.log("kazandın");
//       } else if (setUserChoose == 0) {
//         console.log("kaybettin");
//       } else {
//         console.log("Berabere");
//       }
//     } else if (options[2] === pcChoose) {
//       if (setUserChoose === 0) {
//         console.log("kazandın");
//       } else if (setUserChoose == 1) {
//         console.log("kaybettin");
//       } else {
//         console.log("Berabere");
//       }
//     }
//   }, [userChoose]);

//   return (
//     <div>
//       <h2>Taş Makas Kağıt</h2>

//       <div>
//         <img onClick={handleChoose} className="gameImg" src={rock} alt="rock" />
//         <img
//           onClick={handleChoose}
//           className="gameImg"
//           src={paper}
//           alt="paper"
//         />
//         <img
//           onClick={handleChoose}
//           className="gameImg"
//           src={scissors}
//           alt="scissors"
//         />
//       </div>
//       <div>
//         <h5>
//           Skor: <strong>1</strong> - <strong>0</strong>
//         </h5>
//       </div>
//       <div>
//         <div>
//           <h1>User:</h1>
//           <img
//             className="gameImg userChoose"
//             ref={user}
//             src={userChoose}
//             alt={altData}
//           />
//         </div>
//         {userChoose && (
//           <div>
//             <h1>Pc:</h1>
//             <img
//               ref={pc}
//               className="gameImg"
//               src={options[random]}
//               alt={options[random]}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Game;
