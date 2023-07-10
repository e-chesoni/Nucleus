import { projectGroups } from "./projectGroups";
import { projects } from "../../projects";

export async function GET() {
    return new Response(JSON.stringify(projects))
}