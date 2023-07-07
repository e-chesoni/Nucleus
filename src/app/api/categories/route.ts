// Backgrounds
import magneto from "../../../../../../../../../assets/img/background/magneto/magneto.jpeg";
import magneto1 from "../../../assets/img/background/magneto/magneto1.svg";
import magneto_printing_original from "../../../assets/img/background/magneto/magneto-printing.jpg";
import magneto_printing from "../../../assets/img/background/magneto/magneto-printing-gradient.png";

import bemo from "../../../assets/img/background/bemo/bemo.jpeg";
import bemo_side from "../../../assets/img/background/bemo/bem01-side.jpeg";
import bemo_desk_original from "../../../assets/img/background/bemo/chris-obrist-9X1VJKrz1lU-unsplash.jpg";
import bemo_components_original from "../../../assets/img/background/bemo/robin-glauser-aSvBypuXGkc-unsplash.jpg";
import bemo_testing_original from "../../../assets/img/background/bemo/tim-kabel-FCrYdP8gohg-unsplash.jpg";
import bemo_desk from "../../../assets/img/background/bemo/desk-gradient.png";
import bemo_components from "../../../assets/img/background/bemo/components-gradient.png";
import bemo_testing from "../../../assets/img/background/bemo/bemo-testing-gradient.png";

import pcb_original from "../../../assets/img/background/pcb/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg";
import pcb from "../../../assets/img/background/pcb/pcb-gradient.png";

import code_original from "../../../assets/img/background/other/christopher-gower-m_HRfLhgABo-unsplash.jpg";
import code from "../../../assets/img/background/other/code-gradient.png";

// Icons
import car from "../../../assets/img/icon/car.svg";
import car_white from "../../../assets/img/icon/car-white.svg";
import magneto_helment from "../../../assets/img/icon/magneto_helment.svg";
import magneto_helment_white from "../../../assets/img/icon/magneto-helment-white.svg";
import bike_white from "../../../assets/img/icon/bike-white.svg";
import fish_white from "../../../assets/img/icon/fish-white.svg";
import cloud_white from "../../../assets/img/icon/cloud-white.svg";

// Skills
import altium from "../../../assets/img/skill/altium-skill.svg";
import aws from "../../../assets/img/skill/aws-skill.svg";
import c from "../../../assets/img/skill/c-skill.svg";
import circuit from "../../../assets/img/skill/circuit-skill.svg";
import cpp from "../../../assets/img/skill/cpp-skill.svg";
import csharp from "../../../assets/img/skill/c-sharp-skill.svg";
import fusion from "../../../assets/img/icon/fusion-360-tile.svg";
import java from "../../../assets/img/skill/java-skill.svg";
import javascript from "../../../assets/img/skill/javascript-skill.svg";
import python from "../../../assets/img/skill/python-skill.svg";
import solder from "../../../assets/img/skill/solder-skill.svg";
import solidworks from "../../../assets/img/skill/solidworks-skill.svg";
import typescript from "../../../assets/img/skill/typescript-skill.svg";
import vscode from "../../../assets/img/skill/vs-code-skill.svg";
import vs from "../../../assets/img/skill/vs-skill.svg";

const categories = [
    {
        group: "embed",
        projects: [
            {
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
                what:"",
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
                what:"",
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
                what:"",
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
    },
    {
        group: "control",
        projects: [
            {
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
                what:"",
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
    },
    {
        group: "pcb",
        projects: [
            {
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
                what:"",
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
    }
];

export async function GET() {
    return new Response(JSON.stringify(categories))
}