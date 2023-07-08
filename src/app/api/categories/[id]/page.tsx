import { categories } from "../categories";


export default function Page({ params } : { params: { id: string }}) {
return (
    <div>
        {
            categories.map((category, index) => {
                if( Number(params.id) === category.id )
                {
                    return (
                        <div>
                            {category.group}
                        </div>
                    )
                }
            })
        }
    </div>
)

}