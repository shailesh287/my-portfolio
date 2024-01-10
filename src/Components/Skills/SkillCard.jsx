import "./skills.css"

const SkillCard = ({ title, icon }) => {
  return (
    <div >
      <img className='skill_image' src={`./icons/${icon}.svg`} alt={title} />
      <h3 className='skill_title' >{title}</h3 >
    </div>
  );
};

export default SkillCard;

