"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { projects } from "../../projects";
import Head from 'next/head'
import { ProjectCard } from '@/components/ProjectCard';
import { How } from '../../../components/detail/How';
import { BuildElement } from '../../../components/detail/BuildElement';
import { Obstacle } from "../../../components/detail/Obstacle";
import { Conclusion } from "../../../components/detail/Conclusion";

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
                                                            <How
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
                                                {
                                                    project.how.map((how, index) => {
                                                        if (how.section === 'mechanical')
                                                        {
                                                            return (
                                                                <div>
                                                                    <BuildElement
                                                                        key={index}
                                                                        {...how}
                                                                    />
                                                                </div>
                                                            )
                                                        } 
                                                    })
                                                }
                                            </div>
                                            <div className="detail-build-elecrical-container">
                                                {/* Electrical */}
                                                <h4>Electrical</h4>
                                                {
                                                    project.how.map((how, index) => {
                                                        if (how.section === 'electrical')
                                                        {
                                                            return (
                                                                <div>
                                                                    <BuildElement
                                                                        key={index}
                                                                        {...how}
                                                                    />
                                                                </div>
                                                            )
                                                        } 
                                                    })
                                                }
                                            </div>
                                            <div className="detail-build-code-container">
                                                {/* Code */}
                                                <h4>Code</h4>
                                                {
                                                    project.how.map((how, index) => {
                                                        if (how.section === 'code')
                                                        {
                                                            return (
                                                                <div>
                                                                    <BuildElement
                                                                        key={index}
                                                                        {...how}
                                                                    />
                                                                </div>
                                                            )
                                                        } 
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail-conclusion">
                                        {/* Conclusion */}
                                        <h2>Conclusion</h2>
                                        {
                                                    project.how.map((how, index) => {
                                                        if (how.section === 'conclusion')
                                                        {
                                                            return (
                                                                <div>
                                                                    <Conclusion
                                                                        key={index}
                                                                        {...how}
                                                                    />
                                                                </div>
                                                            )
                                                        } 
                                                    })
                                                }
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