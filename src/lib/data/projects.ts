import MarbleScene from '$lib/assets/images/MarbleScene.png';
import KaleidoscopeDemo from '$lib/assets/videos/KaliedoscopeDemo.mp4';
import RiskModel from '$lib/assets/images/RiskModel.jpg';
import ScubaDB from '$lib/assets/images/ScubaDB.png';

export interface Project {
    title: string;
    href?: string;
    description: string;
    technologies: string[];
    image?: string;
    imageAlt?: string;
    video?: string;
}

export const projects: Project[] = [
    {
        title: 'Financial Risk Platform Capstone',
        image: RiskModel,
        imageAlt: 'Simulated portfolio risk distribution produced by the financial risk model',
        description:
            'Built a tool for simulating financial assets and portfolios using Monte Carlo methods and stochastic models. Allows different assumptions about asset behavior to be explored through simulated portfolio outcomes.',
        technologies: ['Python']
    },
    {
        title: 'Ray Tracer',
        href: 'https://github.com/Caderthewiz/Ray-Tracer',
        image: MarbleScene,
        imageAlt: 'Rendered marble scene produced by the ray-tracing engine',
        description:
            'Built a C++ ray-tracing engine for rendering 3D scenes. Uses bounding-volume hierarchies to reduce ray/object intersection costs and Monte Carlo importance sampling to improve rendering efficiency.',
        technologies: ['C++', 'CMake']
    },
    {
        title: 'Kaleidoscope',
        href: 'https://github.com/samgido/simple_webgl_engine',
        video: KaleidoscopeDemo,
        description:
            'Built a real-time image renderer that produces kaleidoscope effects using custom GLSL shaders. The project performs image transformations on the GPU through a WebGL2 rendering pipeline.',
        technologies: ['TypeScript', 'WebGL2', 'Go']
    },
    {
        title: 'ScubaDB',
        href: 'https://github.com/Caderthewiz/560-Scuba-Project',
        image: ScubaDB,
        imageAlt: 'ScubaDB web application for managing divers, certifications, and dive logs',
        description:
            'Built a web application for managing scuba divers, certifications, instructors, and historical dive logs. Uses a relational database to model relationships between divers, certifications, and dives.',
        technologies: ['Python', 'T-SQL']
    }
]