import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';
import "../App.css"

const Footer = () => {
  return (
    <div className='w-ful' >
      <div className='mainContainer'>


      <FooterWrapper>
        <Row>
          <Col>
            <ColTitle>Socials</ColTitle>

            <SiteLink href='https://github.com/shailesh287' target='_blank'>
              Github
            </SiteLink>
            <SiteLink
              href='https://www.linkedin.com/in/shaileshbind23'
              target='_blank'
            >
              LinkedIn
            </SiteLink>
            <SiteLink href='https://x.com/Shailesh280?t=nRN5WhJwKvgEz-EWS3Yh6Q&s=09' target='_blank'>
              Twitter
            </SiteLink>
          </Col>
          {/* col 2 */}
          <Col>
            <ColTitle>Quick Links</ColTitle>
            <SiteRouterLink to='/'>About</SiteRouterLink>
            <SiteRouterLink to='/projects'>Projects</SiteRouterLink>
            <SiteRouterLink to='/contact'>Contact</SiteRouterLink>
          </Col>
        </Row>
      </FooterWrapper>
      <Attribution>
        Made with <AiFillHeart color='red' /> by{' '}
        <a
          href='https://github.com/shailesh287'
          rel='noreferrer'
          target='_blank'
        >
          Shailesh Bind
        </a>
      </Attribution>
      </div>
    </div>
  );
};
export default Footer;

const FooterWrapper = styled.footer`
  border-top: 1px solid var(--line);
  padding: 2em 0;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const Col = styled.div`
  width: 100%;
`;

const ColTitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 0.5em;
`;

const SiteLink = styled.a`
  display: block;
  width: fit-content;
  text-decoration: none;
  margin: 0.5em 0;
  :hover {
    opacity: 0.8;
  }
`;

const SiteRouterLink = styled(Link)`
  display: block;
  width: fit-content;
  text-decoration: none;
  margin: 0.5em 0;
  :hover {
    opacity: 0.8;
  }
`;

const Attribution = styled.div`
  margin: 2em 0;
  margin-top: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;
