import PropTypes from "prop-types"
import React from "react";
import './css/Licoes.css'

class LicoesAprendidas extends React.Component {
  render() {
    const { licoesAprendidas } = this.props;
    return (
      <>
        <ol>
          <h2 className="titulo-licoes">Lições Aprendidas</h2>
        {licoesAprendidas.map((licao) => (
            <li>{licao}</li>
          ))}
        </ol>
      </>
    );
  }
}

LicoesAprendidas.propTypes = {
  licoesAprendidas: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
}.isRequired;

export default LicoesAprendidas
