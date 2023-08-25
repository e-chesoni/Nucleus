"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

import React, { Suspense } from 'react';

import { Canvas } from "@react-three/fiber";
import MagikarpLight from "../../../components/detail/MagikarpLight";
import BEM01Light from "../../../components/detail/BEM-01Light";
import { extend } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, TransformControls, useGLTF } from '@react-three/drei';
extend({ OrbitControls, TransformControls })

import { DetailNavBar } from '../../../components/detail/DetailNavBar';
import { DetailFooter } from '../../../components/detail/DetailFooter';
import { projects } from "../../projects";
import { StickyHeader } from '../../../components/detail/StickyHeader';
import { How } from '../../../components/detail/How';
import { BuildElement } from '../../../components/detail/BuildElement';
import { Conclusion } from "../../../components/detail/Conclusion";
import { ProjectCarousel } from "../../../components/detail/ProjectCarousel";

import FadeInOnScrollDefault from '@/components/detail/FadeInOnScrollDefault';

export default function Page({ params } : { params: { project: string }}) {
    return (
        <div>
            {
                projects.map((project, index) => {
                    if( params.project === project.title )
                    {
                        return (
                            <div>
                                <Head>Project Detail Page</Head>
                                <main className='bg-detail'>
                                    <DetailNavBar/>
                                    <div className='detail-intro-container'>
                                    <FadeInOnScrollDefault elementName='Canvas' fadeInThreshold={1} setFadeIn={false} visibleOnLoad={true} visibilityThreshold={0.2} titleRank={5}>
                                        <div className='detail-canvas'>
                                        {
                                            project.how.map((how, index) => {
                                                if (index === 0 && project.title === 'magikarp')
                                                {
                                                    return (
                                                        <Canvas>
                                                            <OrbitControls enableZoom={false} />
                                                            <ambientLight intensity={0.7}/>
                                                            <pointLight color={'#FFA500'} position={[0, -5, 3]} intensity={500} distance={0}/>
                                                            <pointLight color={'#FFA500'} position={[0, 0, 0]} intensity={2500} distance={0}/>
                                                            <pointLight color={'#FFA500'} position={[0, 2, 0]} intensity={250} distance={0}/>
                                                            <Suspense fallback={null}>
                                                                <MagikarpLight/>
                                                            </Suspense>
                                                        </Canvas>
                                                    )
                                                } else if (index === 0 && project.title === 'Bem-0')
                                                {
                                                    return (
                                                        <Canvas>
                                                            <OrbitControls enableZoom={false} />
                                                            <ambientLight intensity={0.7}/>
                                                            <pointLight color={'#FFA500'} position={[-2, 5, 2]} intensity={1000} distance={0}/>
                                                            <pointLight color={'#FFA500'} position={[5, 0, 2]} intensity={5000} distance={0}/>
                                                            <pointLight color={'#FFA500'} position={[-5, 0, 0]} intensity={5000} distance={0}/>
                                                            <pointLight color={'#FFA500'} position={[0, -5, 3]} intensity={5000} distance={0}/>
                                                            <pointLight color={'#FFA500'} position={[0, 0, 0]} intensity={5000} distance={0}/>
                                                            <pointLight color={'#FFA500'} position={[0, 2, 0]} intensity={5000} distance={0}/>
                                                            <Suspense fallback={null}>
                                                                <BEM01Light/>
                                                            </Suspense>
                                                        </Canvas>
                                                    )
                                                }
                                            })
                                        }
                                        </div>
                                        </FadeInOnScrollDefault>
                                        <div className="detail-title-container detail-header">
                                            <FadeInOnScrollDefault elementName='Project Title' fadeInThreshold={1} setFadeIn={false} visibleOnLoad={true} visibilityThreshold={0.2} titleRank={1}>
                                                <h1 className=''>{project.title}</h1>
                                                <div className="detail-title-divider"></div>
                                            </FadeInOnScrollDefault>
                                        </div>
                                        <div className="detail-tldr-container">
                                            {/* TLDR */}
                                            <FadeInOnScrollDefault elementName="Paragraph" fadeInThreshold={1} setFadeIn={false} visibleOnLoad={true} visibilityThreshold={0.1} titleRank={0}>
                                                <p>{project.what}</p>
                                            </FadeInOnScrollDefault>
                                        </div>
                                        
                                    </div>
                                    <div className="detail-how-container">
                                        {/* How */}
                                        <div className='detail-sticky-header detail-how-intro'>
                                            <FadeInOnScrollDefault elementName='How Title' fadeInThreshold={0.35} setFadeIn={true} visibleOnLoad={false} visibilityThreshold={0.01} titleRank={2}>
                                                {/* className moved to FadeInOnScrollDefault File */}
                                                <h2>How?</h2>
                                            </FadeInOnScrollDefault>
                                            {
                                                project.how.map((how, index) => {
                                                    if (how.section === 'obstacles')
                                                    {
                                                        return (
                                                            <StickyHeader
                                                                key={index}
                                                                summary={how.summary}
                                                            />
                                                        )
                                                    } 
                                                })
                                            } 
                                        </div>

                                        <FadeInOnScrollDefault elementName='ProjectCarousel' fadeInThreshold={0.55} setFadeIn={true} visibleOnLoad={false} visibilityThreshold={0.2} titleRank={0}>
                                            <div className='detail-carousel-container'>
                                                <div className='detail-sticky-carousel'>
                                                {
                                                    project.carousel.map((carousel, index) => {
                                                        return (
                                                            <ProjectCarousel
                                                                key={index}
                                                                imgs={carousel.imgs}
                                                            />
                                                        )
                                                    })
                                                }
                                                </div>

                                            </div>
                                        </FadeInOnScrollDefault>
                                        
                                        <div className="detail-obstacles-container detail-text">
                                        
                                        <FadeInOnScrollDefault elementName='Challenges' fadeInThreshold={0.4} setFadeIn={true} visibleOnLoad={false} visibilityThreshold={0.2} titleRank={3}>
                                            {/* className moved to FadeInOnScrollDefault File */}
                                            <h3>Challenges</h3>
                                        </FadeInOnScrollDefault>
                                            {
                                                project.how.map((how, index) => {
                                                    if (how.section === 'obstacles')
                                                    {
                                                        return (
                                                            <How
                                                                key={index}
                                                                obstacles={how.obstacles}
                                                            />
                                                        )
                                                    } 
                                                })
                                            }
                                        </div>
                                        
                                        <div className="detail-build-container detail-text">
                                            {/* Build */}
                                            <FadeInOnScrollDefault elementName='Challenges' fadeInThreshold={0.5} setFadeIn={true} visibleOnLoad={false} visibilityThreshold={0.2} titleRank={3}>
                                                {/* className moved to FadeInOnScrollDefault File */}
                                                <h3 className='detail-h3'>Build</h3>
                                            </FadeInOnScrollDefault>
                                            <div className="detail-build-mechanical-container">
                                                {/* Mechanical */}
                                                {
                                                    project.how.map((how, index) => {
                                                        if (how.section === 'mechanical')
                                                        {
                                                            return (
                                                                <div>
                                                                    <BuildElement
                                                                        key={index}
                                                                        section={how.section}
                                                                        modules={how.modules}
                                                                        paragraphs={how.paragraphs}
                                                                    />
                                                                </div>
                                                            )
                                                        } 
                                                    })
                                                }
                                            </div>
                                            <div className="detail-build-elecrical-container">
                                                {/* Electrical */}
                                                {
                                                    project.how.map((how, index) => {
                                                        if (how.section === 'electrical')
                                                        {
                                                            return (
                                                                <div>
                                                                    <BuildElement
                                                                        key={index}
                                                                        section={how.section}
                                                                        modules={how.modules}
                                                                        paragraphs={how.paragraphs}
                                                                    />
                                                                </div>
                                                            )
                                                        } 
                                                    })
                                                }
                                            </div>
                                            <div className="detail-build-code-container">
                                                {/* Code */}
                                                {
                                                    project.how.map((how, index) => {
                                                        if (how.section === 'code')
                                                        {
                                                            return (
                                                                <div>
                                                                    <BuildElement
                                                                        key={index}
                                                                        section={how.section}
                                                                        modules={how.modules}
                                                                        paragraphs={how.paragraphs}
                                                                    />
                                                                </div>
                                                            )
                                                        } 
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail-conclusion detail-text">
                                        <div className='conclusion-header'>
                                        <FadeInOnScrollDefault elementName='Conclusion Title' fadeInThreshold={0.25} setFadeIn={true} visibleOnLoad={false} visibilityThreshold={0.01} titleRank={6}>
                                            {/* Conclusion */}
                                            <h2>Conclusion</h2>
                                        </FadeInOnScrollDefault>
                                        </div>
                                        {
                                                    project.how.map((how, index) => {
                                                        if (how.section === 'conclusion')
                                                        {
                                                            return (
                                                                <div>
                                                                    <Conclusion
                                                                        key={index}
                                                                        paragraphs={how.paragraphs}
                                                                    />
                                                                </div>
                                                            )
                                                        } 
                                                    })
                                                }
                                    </div>
                                    <DetailFooter
                                        key={index}
                                        {...project}
                                    />
                                </main>
                                
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}