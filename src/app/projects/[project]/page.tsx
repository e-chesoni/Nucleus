import { projects } from "../../projects";

export default function Page({ params } : { params: { project: string }}) {
    console.log(params.project);
    return (
        <div>
            {
                projects.map((project, index) => {
                    if( params.project === project.title )
                    {
                        return (
                            <div>
                               {project.title}
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}