import { Container, SocialAnchor, SocialTitle, SocialSection } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

function Footer(): JSX.Element {
  return (
    <Container>
      <SocialSection>
        <SocialTitle>Follow Us</SocialTitle>
        <SocialAnchor>
          <a
            target="_blank"
            rel="noreferrer noopenner"
            href="https://youtube.com.br"
          >
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} size="3x" />
              <FontAwesomeIcon
                icon={faYoutube}
                size="3x"
                transform="shrink-8 left-1"
              />
            </span>
          </a>
        </SocialAnchor>
        <SocialAnchor>
          <a
            target="_blank"
            rel="noreferrer noopenner"
            href="https://facebook.com.br"
          >
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} size="3x" />
              <FontAwesomeIcon
                icon={faFacebook}
                size="3x"
                transform="shrink-8"
              />
            </span>
          </a>
        </SocialAnchor>
        <SocialAnchor>
          <a
            target="_blank"
            rel="noreferrer noopenner"
            href="https://twitter.com.br"
          >
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} size="3x" />
              <FontAwesomeIcon
                icon={faTwitter}
                size="3x"
                transform="shrink-8"
              />
            </span>
          </a>
        </SocialAnchor>
      </SocialSection>

      <section>
        <h4>Contact</h4>
        <address>
          <p>2490 Leisure Lane</p>
          <p>San Luis Obispo</p>
          <p>Califórnia</p>
        </address>
      </section>
    </Container>
  );
}

export default Footer;
