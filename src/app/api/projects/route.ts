import { projectGroups } from "./projectGroups";

export async function GET() {
    return new Response(JSON.stringify(projectGroups))
}