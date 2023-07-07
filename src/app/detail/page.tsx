export default async function Page() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js');
    const data = await res.json();
    return (
        <div>
            <h1>Hello, Details!</h1>
            <p>{data.id}</p>
        </div>
    )
}