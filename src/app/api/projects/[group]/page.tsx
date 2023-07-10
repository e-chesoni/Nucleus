import { projectGroups } from "../projectGroups";

export default function Page({ params } : { params: { group: string }}) {
    return (
        <div>
            {
                projectGroups.map((group, index) => {
                    if( params.group == group.name )
                    {
                        return (
                            <div>
                               {group.name}
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}