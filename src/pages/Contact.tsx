import React from 'react';
import { FaEnvelope, FaLinkedin, FaDiscord, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <h2>Me contacter</h2>
        <div className="contact__icons">
          <a
            href="mailto:letessier.joshua.pro@gmail.com"
            className="contact__icon"
            title="Envoyer un email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/joshua-letessier"
            className="contact__icon"
            title="Mon LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://discordapp.com/users/Faolline"
            className="contact__icon"
            title="Mon Discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>
          <a
            href="https://github.com/JoshuaLetessier"
            className="contact__icon"
            title="Mon GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
