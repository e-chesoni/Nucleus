// Backgrounds
import magneto from "../assets/img/background/magneto/magneto.jpeg";
import magneto1 from "../assets/img/background/magneto/magneto1.svg";
import magneto_printing_original from "../assets/img/background/magneto/magneto-printing.jpg";
import magneto_printing from "../assets/img/background/magneto/magneto-printing-gradient.png";

import bemo from "../assets/img/background/bemo/bemo.jpeg";
import bemo_side from "../assets/img/background/bemo/bem01-side.jpeg";
import bemo_desk_original from "../assets/img/background/bemo/chris-obrist-9X1VJKrz1lU-unsplash.jpg";
import bemo_components_original from "../assets/img/background/bemo/robin-glauser-aSvBypuXGkc-unsplash.jpg";
import bemo_testing_original from "../assets/img/background/bemo/tim-kabel-FCrYdP8gohg-unsplash.jpg";
import bemo_desk from "../assets/img/background/bemo/desk-gradient.png";
import bemo_components from "../assets/img/background/bemo/components-gradient.png";
import bemo_testing from "../assets/img/background/bemo/bemo-testing-gradient.png";

import pcb_original from "../assets/img/background/pcb/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg";
import pcb from "../assets/img/background/pcb/pcb-gradient.png";

import code_original from "../assets/img/background/other/christopher-gower-m_HRfLhgABo-unsplash.jpg";
import code from "../assets/img/background/other/code-gradient.png";

// Icons
import car from "../assets/img/icon/car.svg";
import car_white from "../assets/img/icon/car-white.svg";
import magneto_helment from "../assets/img/icon/magneto_helment.svg";
import magneto_helment_white from "../assets/img/icon/magneto-helment-white.svg";
import bike_white from "../assets/img/icon/bike-white.svg";
import fish_white from "../assets/img/icon/fish-white.svg";
import cloud_white from "../assets/img/icon/cloud-white.svg";

// Skills
import altium from "../assets/img/skill/altium-skill.svg";
import aws from "../assets/img/skill/aws-skill.svg";
import c from "../assets/img/skill/c-skill.svg";
import circuit from "../assets/img/skill/circuit-skill.svg";
import cpp from "../assets/img/skill/cpp-skill.svg";
import csharp from "../assets/img/skill/c-sharp-skill.svg";
import fusion from "../assets/img/icon/fusion-360-tile.svg";
import java from "../assets/img/skill/java-skill.svg";
import javascript from "../assets/img/skill/javascript-skill.svg";
import python from "../assets/img/skill/python-skill.svg";
import solder from "../assets/img/skill/solder-skill.svg";
import solidworks from "../assets/img/skill/solidworks-skill.svg";
import typescript from "../assets/img/skill/typescript-skill.svg";
import vscode from "../assets/img/skill/vs-code-skill.svg";
import vs from "../assets/img/skill/vs-skill.svg";


export const projects = [
    {
        id:1,
        group: "embed",
        title: "bemo",
        tagline: "first tagline",
        imgUrl: bemo_desk,
        iconUrl: car_white,
        skills: [ 
            {
                skillUrl: cpp,
                skillAlt: "cpp tile"
            },
            {
                skillUrl: circuit,
                skillAlt: "circuitry tile"
            },
            {
                skillUrl: solder,
                skillAlt: "solder tile"
            },
        ],
        summary: "Pokem ipsum dolor sit amet Deino Tympole Palpitoad Earthquake Regice Croconaw. Rock the enemy Pokemon fainted Goldeen Growl Earth Badge Magby Nincada. Fire Regigigas Luvdisc what kind of Pokemon are you Walrein Bibarel Teddiursa.",
        what:"As part of a team of three, I designed and built a quad rover that competed in a two-day robotics competition. My contributions included designing and soldering the location module in our final circuit, as well as writing the accompanying position tracking communication code. Despite numerous challenges, we placed sixth in the competition, and our robot was praised for its robust driving algorithm, visual graphics, and overall sturdiness.",
        how: [
            {
                section: "obstacles",
                summary: "Throughout the project, we encountered numerous obstacles and overcame a multitude of challenges in order to successfully construct BEM-0.",
                obstacles: [
                    {
                        title:"Reverse Engineering the HTC Vive Circuit",
                        paragraphs: [
                            {
                                order:  1,
                                text: "As an additional layer of complexity, we were tasked with integrating a reverse-engineered HTC Vive circuit to receive and the location of other rovers, and project our own position. ",
                            },
                            {
                                order:  2,
                                text: "We encountered challenges with the accuracy of the Vive circuit, which varied depending on the setup, such as distance from the competition board and proximity to the Wi-Fi router. To improve the accuracy of our rover, I conducted research and discovered that changing a critical resistor in the Vive circuit would be effective. I then implemented a final design that allowed us to hot-swap the resistor as needed, resulting in significantly improved accuracy.",
                            },
                            {
                                order:  3,
                                text: "As part of the team of three, I was responsible for designing, soldering, and integrating the location module in our final circuit. Additionally, I wrote the accompanying position tracking communication code, which required the use of two different protocols, ESP-Now and UDP.",
                            }
                        ]
                    },
                    {
                        title: "Axel Damage",
                        paragraphs: [
                            {
                                order: 1,
                                text: "Bem-0's axels took on significant damage throughout repeated test drives. With limited time, we had to strike a balance between the optimal design of the axels (infill density and layer height) and print time. With ingenuity and perseverance, we were able to create a design that reduced breakdown of the plastic material and ultimately only had to replace one axel during the two-day competition.",
                            }
                        ],
                    }
                ]
            },
            {
                section: "electrical",
                modules: [
                    {
                        name: "Motor Circuit"
                    },
                    {
                        name: "IR Detection Circuit"
                    },
                    {
                        name: "HTC Vive Circuit"
                    },
                    {
                        name: "Time-of-Flight Sensor Array"
                    },
                ],
                paragraphs: [
                    {
                        order:  1,
                        text: "BEM-01 was designed to work with one MCU. The electrical design required 5 pins for eachmotor (4 without the encoder), 2 pins for each ToF sensor, 1 pin for each IR sensor, and 1 pinfor each Vive circuit. Using the ESP32 S3, we had just enough pins to accommodate our needs.BEM-01’s intended design leaned heavily on Vive coordinates. Initially, we assumed we wouldbe able to get relatively accurate and clean data from Vive (assuming we could create a suitablefilter). Our intention of mapping the field required the use of several time of flight sensors. We arranged them in an array such that the cones of their fields of view were tangential to each other. i.e. since the FoV was approximately 27◦, we 3d printed a mount so that eight sensors could beattached pointing 27◦ apart from one another.",
                    },
                    {
                        order:  2,
                        text: "BEM-01 was designed to operate with a single MCU. Our design required 5 pins for each motor (4 without the encoder), 2 pins for each ToF sensor, 1 pin for each IR sensor, and 1 pin for each Vive circuit. We selected the ESP32 S3 to accommodate our needs, since it had just enough pins.",
                    },
                    {
                        order:  3,
                        text: "We used an array of time-of-flight sensors to generate a virtual map of the field. We arranged them in an array such that the cones of their fields of view were tangential to each other. Since the FoV was approximately 27 degrees, we 3D printed a mount so that eight sensors could be attached, pointing 27 degrees apart from one another.",
                    },
                    {
                        order: 4,
                        text: "Finally, we utilized an IR detection circuit to find and track the real and fake trophies."
                    },
                ]
            },
            {
                section: "mechanical",
                modules: [
                    {
                        name: "Passive Claw"
                    },
                    {
                        name: "Modular Body"
                    },
                    {
                        name: "Mecanuum Wheels"
                    },
                ],
                paragraphs: [
                    {
                        order:  1,
                        text: "We wanted the ability to more easily remove most parts. Since 3d prints tend to shear between layers rather than break across layers, we printed the axles such that the layers were parallel to the axis of rotation, to provide more strength. We developed a final axle solution that not only improved durability, but also facilitated easier replacement when necessary.",
                    },
                ]
            },
            {
                section: "code",
                modules: [
                    {
                        name: "Mobility Classes"
                    },
                    {
                        name: "Location Classes"
                    },
                    {
                        name: "Vision Classes"
                    },
                    {
                        name: "Networking and Communication Classes"
                    },
                ],
                paragraphs: [
                    {
                        order:  1,
                        text: "One of our initial concerns was the computational capacity required for the mapping algorithm, which heavily relied on floating-point vector math and trigonometry calculations. We selected the ESP32 S3 for our development board due to its high clock speed, floating point unit, and numerous GPIO pins. Thanks to the appropriately sized MCU, we were able to produce a 60x144 map based on real data in just 50 milliseconds."
                    },
                    {
                        order:  2,
                        text: "As the robotics lead for the project, I was responsible for writing the code for the Mobility, Vive, and Comms classes. Additionally, I worked closely with the software lead to integrate the communication classes with the rest of the networking infrastructure."
                    },
                    {
                        order: 3,
                        text: "I faced an exciting challenge in designing Bem-0's mobility system as we opted to use mecanum wheels. This required me to apply principles of linear algebra and geometry to calculate the driving speed of each wheel relative to the desired velocity."
                    }
                ]
            },
            {
                section: "conclusion",
                paragraphs: [
                    {
                        order:  1,
                        text: "Bem-0 recieved accolades for our creative design, and original apporach to problem solving.",
                    },
                    {
                        order:  2,
                        text: "The Bem-0 project serves as a testament to my skills as an embedded engineer. Through designing and building a complex robotics project, I was able to demonstrate my strong understanding of microcontrollers, embedded software development, and low-level hardware interfaces. Additionally, the project highlighted the importance of problem-solving skills, as my team encountered numerous obstacles and had to employ creative solutions to overcome them. I was also able to showcase my specific programming skills in C++, knowledge of real-time operating systems, and experience with hardware design and schematic capture tools. Finally, the project demonstrates my ability to communicate technical concepts effectively, a crucial skill for any engineer.",
                    }
                ]
            },
        ]
    },
    {
        id:2,
        group: "embed",
        title: "magikarp",
        tagline: "second tagline",
        imgUrl: bemo_components,
        iconUrl: fish_white,
        skills: [ 
            {
                skillUrl: cpp,
                skillAlt: "cpp tile"
            },
            {
                skillUrl: circuit,
                skillAlt: "circuit tile"
            },
            {
                skillUrl: fusion,
                skillAlt: "fusion 360 tile"
            },
        ],
        summary: "Dig Venomoth Rising Badge Rhydon Hoenn Combusken Solosis. Pokemon like no one ever was Slowpoke Meloetta Druddigon Phanpy Hoppip. Pokemon Rhyhorn Carracosta Aron Terrakion Fire Stunky. Venusaur Blastoise Unfezant Nidoking Emboar Galvantula Earthquake. Flying Accelgor Lopunny Furret Purugly Kecleon consectetur adipisicing elit",
        what:"this is what magikarp is all about",
        how: [
            {
                section: "obstacles",
                summary: "",
                obstacles: [
                    {
                        title:"",
                        paragraphs: [],
                    },
                ]
            },
            {
                section: "electrical",
                modules: [
                    {
                        name: ""
                    },
                ],
                paragraphs: [
                    {
                        order:  1,
                        text: "",
                    }
                ]
            },
            {
                section: "mechanical",
                modules: [
                    {
                        name: ""
                    },
                ],
                paragraphs: [
                    {
                        order:  1,
                        text: "",
                    }
                ]
            },
            {
                section: "code",
                modules: [
                    {
                        name: ""
                    },
                ],
                paragraphs: [
                    {
                        order:  1,
                        text: "",
                    }
                ]
            },
            {
                section: "conclusion",
                paragraphs: [
                    {
                        order:  1,
                        text: "",
                    }
                ]
            },
        ]
    },
    {
        id:3,
        group: "embed",
        title: "skyblue",
        tagline: "fourth tagline",
        imgUrl: code,
        iconUrl: cloud_white,
        skills: [ 
            {
                skillUrl: csharp,
                skillAlt: "c-sharp tile"
            },
            {
                skillUrl: aws,
                skillAlt: "aws tile"
            },
            {
                skillUrl: vs,
                skillAlt: "visual studio tile"
            },
        ],
        summary: "Blastoise Mareep Slowpoke Tyrogue incididunt ut labore Magikarp used Splash bicycle. Ut enim ad minim veniam Golem Hypno Purugly Slakoth Darmanitan Mint Berry. Velit esse cillum dolore eu fugiat nulla pariatur Mareep Pachirisu Cerulean City Fire Red Rotom Grumpig.",
        what:"this is what skyblue is about",
        how: [
            {
                section: "obstacles",
                summary: "",
                obstacles: [
                    {
                        title:"",
                        paragraphs: [],
                    },
                ]
            },
            {
                section: "electrical",
                modules: [
                    {
                        name: ""
                    },
                ],
                paragraphs: [
                    {
                        order:  1,
                        text: "",
                    }
                ]
            },
            {
                section: "mechanical",
                modules: [
                    {
                        name: ""
                    },
                ],
                paragraphs: [
                    {
                        order:  1,
                        text: "",
                    }
                ]
            },
            {
                section: "code",
                modules: [
                    {
                        name: ""
                    },
                ],
                paragraphs: [
                    {
                        order:  1,
                        text: "",
                    }
                ]
            },
            {
                section: "conclusion",
                paragraphs: [
                    {
                        order:  1,
                        text: "",
                    }
                ]
            },
        ]
    },
    {
        id:4,
        group: "control",
        title: "magneto",
        tagline: "third tagline",
        imgUrl: magneto_printing,
        iconUrl: magneto_helment_white,
        skills: [ 
            {
                skillUrl: csharp,
                skillAlt: "c-sharp tile"
            },
            {
                skillUrl: vs,
                skillAlt: "vs tile"
            },
            {
                skillUrl: solidworks,
                skillAlt: "solidworks tile"
            }
        ],
        summary: "Strength Musharna Sonic Boom Swoobat Duskull Shaymin Deino. Fire Stoutland Giovanni Gothorita Tranquill deserunt mollit Normal. Ut aliquip ex ea commodo consequat Blitzle Totodile Stunky Typhlosion Sewaddle Goldeen. Fuchsia City Graveler Fighting in a world we must defend Chikorita.",
        what:"the secret sauce for magneto...",
        how: [
            {
                section: "obstacles",
                summary: "",
                obstacles: [
                    {
                        title:"",
                        paragraphs: [],
                    },
                ]
            },
            {
                section: "electrical",
                modules: [
                    {
                        name: ""
                    },
                ],
                paragraphs: [
                    {
                        order:  1,
                        text: "",
                    }
                ]
            },
            {
                section: "mechanical",
                modules: [
                    {
                        name: ""
                    },
                ],
                paragraphs: [
                    {
                        order:  1,
                        text: "",
                    }
                ]
            },
            {
                section: "code",
                modules: [
                    {
                        name: ""
                    },
                ],
                paragraphs: [
                    {
                        order:  1,
                        text: "",
                    }
                ]
            },
            {
                section: "conclusion",
                paragraphs: [
                    {
                        order:  1,
                        text: "",
                    }
                ]
            },
        ]
    },
    {
        id:5,
        group: "pcb",
        title: "Persistance of Vision Bike Display",
        tagline: "third tagline",
        imgUrl: pcb,
        iconUrl: bike_white,
        skills: [ 
            {
                skillUrl: c,
                skillAlt: "c tile"
            },
            {
                skillUrl: circuit,
                skillAlt: "circuit tile"
            },
            {
                skillUrl: altium,
                skillAlt: "altium tile"
            },
        ],
        summary: "Rainbow Badge Numel Strength Tranquill Registeel Herdier Seel. Poison Nincada Simisage Delibird Chimecho Ninetales Oshawott. Strength Rapidash Plain Badge Gliscor Oshawott Surskit Magikarp. Electric Pewter City Electabuzz Clamperl Electrike.",
        what:"heres the tea about pcb",
        how: [
            {
                section: "obstacles",
                summary: "",
                obstacles: [
                    {
                        title:"",
                        paragraphs: [],
                    },
                ]
            },
            {
                section: "electrical",
                modules: [
                    {
                        name: ""
                    },
                ],
                paragraphs: [
                    {
                        order:  1,
                        text: "",
                    }
                ]
            },
            {
                section: "mechanical",
                modules: [
                    {
                        name: ""
                    },
                ],
                paragraphs: [
                    {
                        order:  1,
                        text: "",
                    }
                ]
            },
            {
                section: "code",
                modules: [
                    {
                        name: ""
                    },
                ],
                paragraphs: [
                    {
                        order:  1,
                        text: "",
                    }
                ]
            },
            {
                section: "conclusion",
                paragraphs: [
                    {
                        order:  1,
                        text: "",
                    }
                ]
            },
        ]
    },
]