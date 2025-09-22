function SkillsSection(){
    const skills = ["javascript", "PHP", "HTML", "CSS", "Node.js", "MySQL", "Phyton"]
    return(
        <section>
            <div>
                <h2>Skills</h2>
                <div>
                    {skills.map(skill => (
                        <span>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default SkillsSection