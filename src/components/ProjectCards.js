export const ProjectCard = ({title, description, imgUrl}) => {
    return (
    <div className="col-sm-6 col-md-4">
        <div className="project-image-box">
        <img src={''} />
        <div className="project-text">
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
        </div>
    </div>

    )
}