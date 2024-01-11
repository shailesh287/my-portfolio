import "../../App.css"
import "./work.css"

const contactIcons = [
  {
    url: './icons/gmail.svg',
    linkTo: 'mailto:shaileshbind28@gmail.com',
    altText: 'gmail',
  },
  {
    url: './icons/linkedin.svg',
    linkTo: 'https://www.linkedin.com/in/shaileshbind23',
    altText: 'linkedin',
  },
];

const Work = () => {
  return (
    <div className="mainContainer">
  <div className="w_cont">
    <div className="w_text_cont">
      <h1 className="w_heading">Need a talented Front-End Developer?</h1>
      <p className="w_text">
       I'm here to tackle projects and turn ideas into reality. Let's build something exceptional! 🚀
      </p>
      <div className="w_icon_cont">
        {contactIcons.map((icon, i) => (
          <a className="w_link" href={icon.linkTo} key={i}>
            <img src={icon.url} alt={icon.altText} />
          </a>
        ))}
      </div>
    </div>
    <img className="w_img" src="./images/freelance.svg" alt="" />
  </div>
</div>
  );
};



export default Work;
