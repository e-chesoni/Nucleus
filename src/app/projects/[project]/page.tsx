"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { projects } from "../../projects";
import Head from 'next/head'
import { ProjectCard } from '@/components/ProjectCard';
import { Obstacle } from '../../../components/detail/Obstacle';
import { About } from '@/components/About';

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
                                <Head>Project Detail Page</Head>
                                <main className='bg-main-top'>
                                    {/* TODO: DetailNavBar */}
                                    <div className="detail-title-container">
                                        <h1>{project.title}</h1>
                                        <div className="detail-title-divider"></div>
                                    </div>
                                    <div className="detail-tldr-container">
                                        {/* TLDR */}
                                        <h2 className="detail-tldr">TLDR;</h2>
                                        <p>{project.what}</p>
                                    </div>
                                    <div className="detail-how-container">
                                        {/* How */}
                                        <h2>How?</h2>
                                        <div className="detail-obstacles-container">
                                            {
                                                project.how.map((how, index) => {
                                                    if (how.section === 'obstacles')
                                                    {
                                                        return (
                                                            <Obstacle
                                                                key={index}
                                                                {...how}
                                                            />
                                                        )
                                                    } 
                                                })
                                            }
                                        </div>
                                        <div className="detail-build-container">
                                            {/* Build */}
                                            <h3>Build</h3>
                                            <div className="detail-build-mechanical-container">
                                                {/* Mechanical */}
                                                <h4>Mechanical</h4>
                                            </div>
                                            <div className="detail-build-elecrical-container">
                                                {/* Electrical */}
                                                <h4>Electrical</h4>
                                            </div>
                                            <div className="detail-build-code-container">
                                                {/* Code */}
                                                <h4>Code</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail-conclusion">
                                        {/* Conclusion */}
                                        <h2>Conclusion</h2>
                                    </div>
                                    {/* TODO: DetailFooter */}
                                </main>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}