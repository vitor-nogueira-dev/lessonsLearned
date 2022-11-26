import PropTypes from "prop-types"
import React from "react";
import './css/Licoes.css'

class LicoesNaoAprendidas extends React.Component {
  render() {
    const { licoesNaoAprendidas } = this.props;
    return (
      <>
      <ul>
      <h2 className="titulo-licoes" >Lições Não Aprendidas</h2>
      {licoesNaoAprendidas.map((licao) => (
          <li key={licao}>{licao}</li>
        ))}
      </ul>
    </>
    );
  }
}

LicoesNaoAprendidas.propTypes = {
  licoesNaoAprendidas: PropTypes.shape({
    map: PropTypes.func
  }).isRequired,
}.isRequired;

export default LicoesNaoAprendidas