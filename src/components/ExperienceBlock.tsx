import type { TExperienceBlockWithChildren } from "../lib/types"

const ExperienceBlock = ({ list }: TExperienceBlockWithChildren) => {
    return (
        <div className="experience-data">
            {list.map(block => {
                return (
                    <div key={block.id} id={`${block.id}`}>
                        <div className="data-box">
                            <div className="timeline">
                                <div className="line"></div>
                                <div className="point"></div>
                            </div>
                            <div className="data">
                                <div className="role">
                                    {block.link ?
                                        (
                                            <h4><a rel="noreferrer" target="_blank" href={block.link}>{block.title}</a></h4>
                                        ) : (
                                            <h4>{block.title}</h4>
                                        )
                                    }
                                </div>
                                <p className="time">{block.startDate} - {block.endDate}</p>
                                <p className="exp-desc">{block.role}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ExperienceBlock