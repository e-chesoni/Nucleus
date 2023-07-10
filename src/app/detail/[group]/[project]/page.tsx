import { Projects } from "@/components/Projects";
import { projectGroups } from "../../../api/projects/projectGroups";
import { group } from "console";


export default function Page({ params } : { params: { group: string, project: string }}) {
    // method to get all projects in a group

    console.log(params.group);
    console.log(params.project);

    const getprojects = () => {
        projectGroups.map((group, index) => {
            if (params.group != group.name) {
                return group.projects;
            }
        })
    }

    const projs = getprojects();
    
    return (
        <div>
            {
                projectGroups.map((group, index) => {
                    group.projects.map((project, index) => {
                        if (params.project === project.title) {
                            console.log(project.title);
                            return (
                                <div> a {group.name} </div>
                            )
                        }
                    })
                    return (
                        <div> c {group.name} </div>
                    )
                })
            }
        </div>
    )

}