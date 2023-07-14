"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Image from 'next/image';

import { Canvas } from "@react-three/fiber";
import Box from "../../../components/detail/Box";
import Sphere from "../../../components/detail/AnimatedSphere";
import Iphone from "../../../components/detail/Iphone";
import { extend } from '@react-three/fiber'
import { OrbitControls, TransformControls, useGLTF } from '@react-three/drei';
extend({ OrbitControls, TransformControls })

import React, { Suspense } from "react";

import { DetailNavBar } from '../../../components/detail/DetailNavBar';
import { DetailFooter } from '../../../components/detail/DetailFooter';
import { projects } from "../../projects";
import { StickyHeader } from '../../../components/detail/StickyHeader';
import { How } from '../../../components/detail/How';
import { BuildElement } from '../../../components/detail/BuildElement';
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
                                <main className='bg-detail'>
                                    <DetailNavBar/>
                                    <div className='detail-intro-container'>
                                        <Canvas className='canvas'>
                                            <OrbitControls enableZoom={false} />
                                            <ambientLight intensity={0.5}/>
                                            <directionalLight position={[-2, 5, 2]} intensity={1} />
                                            <Suspense fallback={null}>
                                                <Sphere />
                                            </Suspense>
                                        </Canvas>
                                        <Canvas className='canvas'>
                                            <OrbitControls enableZoom={false} />
                                            <ambientLight intensity={0.5}/>
                                            <directionalLight position={[-2, 5, 2]} intensity={1} />
                                            <Suspense fallback={null}>
                                                <Iphone/>
                                            </Suspense>
                                        </Canvas>
                                        <div className="detail-title-container detail-header">
                                            <h1 className='detail-header-text'>{project.title}</h1>
                                            <div className="detail-title-divider"></div>
                                        </div>
                                        <div className="detail-tldr-container detail-text">
                                            {/* TLDR */}
                                            <p>{project.what}</p>
                                        </div>
                                        
                                    </div>
                                    <div className="detail-how-container">
                                        {/* How */}
                                        <div className='detail-sticky-header detail-how-intro'>
                                            <h2 className="detail-header-text detail-how-title">How?</h2>
                                            {
                                                project.how.map((how, index) => {
                                                    if (how.section === 'obstacles')
                                                    {
                                                        return (
                                                            <StickyHeader
                                                                key={index}
                                                                {...how}
                                                            />
                                                        )
                                                    } 
                                                })
                                            }
                                        </div>
                                        <div className="detail-obstacles-container detail-text">
                                            <h3 className="detail-how-sub-header">Challenges</h3>
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
                                        <div className="detail-build-container detail-text">
                                            {/* Build */}
                                            <h3 className="detail-how-sub-header">Build</h3>
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
                                    <div className="detail-conclusion detail-text">
                                        {/* Conclusion */}
                                        <h2 className='conclusion-header'>Conclusion</h2>
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