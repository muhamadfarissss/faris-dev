function SkillsSection(){
    const skills = ["Javascript", "PHP", "HTML", "CSS", "Node.js", "MySQL", "Phyton"]
    return(
        <section id="skills" className="py-20">
            <div className="max-w-4xl mx-auto px-6 text-center" >
                <h2 className="text-3xl font-bold mb-8">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map(skill => (
                        <span key ={skill} className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full shadow">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default SkillsSection