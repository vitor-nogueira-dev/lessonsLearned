import PropTypes from "prop-types";
import React from "react";
import LogoInstagram from "../imagem/instagram.png";
import LogoLinkedin from "../imagem/linkedin.png";
import LogoGitHub from "../imagem/github.png";

class RedesSociais extends React.Component {
  render() {
    const { instagram, linkedin, email, gitHub } = this.props.redesSociais;
    return (
      <section className="section-redesSociais">
        <section className="redesSociais">
          <a href={linkedin} target="_blank" rel="noreferrer">
            <img src={LogoLinkedin} alt="Logo instagram" />
          </a>

          <a href={instagram} target="_blank" rel="noreferrer">
            <img src={LogoInstagram} alt="Logo instagram" className="logo" />
          </a>

          <a href={gitHub} target="_blank" rel="noreferrer">
            <img src={LogoGitHub} alt="Logo instagram" />
          </a>

          <p className="contato">📧 {email}</p>
        </section>
      </section>
    );
  }
}

RedesSociais.propTypes = {
  redesSociais: PropTypes.shape({
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
    email: PropTypes.string,
    gitHub: PropTypes.string,
  }).isRequired,
}.isRequired;

export default RedesSociais;
