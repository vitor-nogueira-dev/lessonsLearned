import React from "react";
import LicoesAprendidas from "./LicoesAprendidas";
import LicoesNaoAprendidas from "./LicoesNaoAprendidas";
import Perfil from "./Perfil";
import PrimeirasImpressoes from "./PrimeirasImpressoes";

const licoesAprendidas = [
  'Unix', 
  'Bash', 
  'HTML', 
  'CSS', 
  'Git', 
  'GitHub', 
  'Live Server', 
  'Estruturar páginas com HTML e CSS', 
  'Internet, como ela funciona', 
  'HTML semântico'
];

const licoesNaoAprendidas = [
  'JavaScript', 
  'React', 
  'DOM', 
  'Redux', 
  'APIs', 
  'Docker', 
  'SQL', 
  'Node.js', 
  'TypeScript', 
  'MongoDB'
];

class Main extends React.Component {
  render() {
    return (
      <>
        <Perfil />
        <div className="licoes">
          <LicoesAprendidas licoesAprendidas={licoesAprendidas}/>
          <LicoesNaoAprendidas licoesNaoAprendidas={licoesNaoAprendidas}/>
        </div>
        <PrimeirasImpressoes />
      </>
    );
  }
}

export default Main