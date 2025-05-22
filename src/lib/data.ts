import type { LucideIcon } from 'lucide-react';
import { Code, Palette, Video, Briefcase, Lightbulb, Star, Film, Layers, Brain } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  type: '3d' | 'video' | 'image' | 'interactive_graphic';
  mediaUrl: string; // URL for main image/video thumbnail
  placeholderHint?: string;
  details?: {
    // For 'video' type
    embedUrl?: string; 
    // For 'image' type with hotspots
    hotspots?: Array<{ x: string; y: string; text: string }>;
    // For '3d' type
    modelViewerHint?: string; // e.g., "Interactive 3D model of a sci-fi drone"
    // For 'interactive_graphic'
    interactiveHint?: string;
  };
}

export const portfolioProjects: Project[] = [
  {
    id: 'project-1',
    title: 'Whispers of the Void',
    shortDescription: 'An interactive VR narrative exploring cosmic loneliness.',
    longDescription: 'Whispers of the Void is a deeply immersive VR experience that combines stunning visuals with an emotionally resonant storyline. Players navigate a surreal, alien landscape, piecing together fragments of a lost civilization. The project pushed boundaries in real-time rendering and environmental storytelling, utilizing custom shaders and particle systems to create a truly otherworldly atmosphere. Key technical challenges involved optimizing complex scenes for smooth VR performance and developing an intuitive gaze-based interaction system.',
    type: 'interactive_graphic',
    mediaUrl: 'https://placehold.co/600x400.png',
    placeholderHint: 'vr cosmic landscape',
    details: {
      interactiveHint: 'Subtly animated star map that reacts to mouse movement.',
    },
  },
  {
    id: 'project-2',
    title: 'Chrono Weaver',
    shortDescription: 'A short animated film about time manipulation.',
    longDescription: 'Chrono Weaver is an award-winning animated short that tells the story of a young inventor who discovers a device to control time. The film blends traditional 2D animation techniques with 3D environments to create a unique visual style. Emphasis was placed on character animation and expressive storytelling. The narrative explores themes of consequence and the desire to alter the past. The project involved a meticulous storyboarding process, custom rigging for complex character movements, and a dynamic orchestral score.',
    type: 'video',
    mediaUrl: 'https://placehold.co/600x400.png',
    placeholderHint: 'animated film time travel',
    details: {
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
    },
  },
  {
    id: 'project-3',
    title: 'Cybernetic Organisms',
    shortDescription: 'Concept art series for a sci-fi game.',
    longDescription: 'This series of concept art pieces explores the fusion of organic life and advanced technology for an unannounced sci-fi game project. Each design focuses on creating believable and visually striking characters and creatures that fit within a dystopian future. The process involved extensive research into biomechanics and cybernetics, iterating through numerous sketches before arriving at the final digital paintings. Techniques included photobashing, 3D sculpting for base meshes, and detailed texture work.',
    type: 'image',
    mediaUrl: 'https://placehold.co/600x400.png',
    placeholderHint: 'cyberpunk concept art',
    details: {
      hotspots: [
        { x: '20%', y: '30%', text: 'Neural interface detail inspired by deep-sea bioluminescence.' },
        { x: '70%', y: '60%', text: 'Exoskeleton plating designed for rapid movement.' },
      ],
    },
  },
  {
    id: 'project-4',
    title: 'Architectural Echoes',
    shortDescription: 'Interactive 3D model of a futuristic habitat.',
    longDescription: 'Architectural Echoes presents a detailed 3D model of a self-sustaining habitat designed for an extraterrestrial colony. Users can explore the structure interactively, examining its innovative design features and material choices. The model was created using Blender and optimized for real-time web viewing. Special attention was paid to realistic lighting and texturing to enhance the sense of immersion. This project showcases skills in 3D modeling, texturing, and an understanding of speculative architectural design.',
    type: '3d',
    mediaUrl: 'https://placehold.co/600x400.png',
    placeholderHint: 'futuristic architecture 3d',
    details: {
      modelViewerHint: 'Interactive 3D model of a futuristic habitat. Rotate and zoom to explore.',
    },
  },
];

export interface ProcessUpdate {
  id: string;
  type: 'code' | 'art' | 'video_log' | 'thought';
  Icon: LucideIcon;
  title: string;
  content: string;
  timestamp: string; // Or Date object
  imageUrl?: string; // For art updates
  videoUrl?: string; // For video log updates
}

export const processUpdates: ProcessUpdate[] = [
  {
    id: 'update-1',
    type: 'code',
    Icon: Code,
    title: 'Optimizing Shader Logic',
    content: "```glsl\n// Refactoring bloom effect for better performance\nuniform sampler2D uPreviousPass;\nvec3 bloom(vec2 uv) {\n  vec3 color = texture(uPreviousPass, uv).rgb;\n  // ... more complex logic here\n  return color * intensity;\n}\n```",
    timestamp: '2 hours ago',
  },
  {
    id: 'update-2',
    type: 'art',
    Icon: Palette,
    title: 'New Character Sketch',
    content: 'Exploring a more ethereal design for the protagonist. Trying out some new brush techniques in Krita.',
    timestamp: 'Yesterday',
    imageUrl: 'https://placehold.co/300x200.png',
    placeholderHint: 'character sketch fantasy'
  },
  {
    id: 'update-3',
    type: 'video_log',
    Icon: Video,
    title: 'Devlog #5: Overcoming a Creative Block',
    content: 'Quick update on the current project. Was stuck on a narrative beat, but had a breakthrough today!',
    timestamp: '3 days ago',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
  },
  {
    id: 'update-4',
    type: 'thought',
    Icon: Brain,
    title: 'The Role of Ambiguity in Storytelling',
    content: 'Pondering how leaving certain elements unexplained can enhance audience engagement and create a more lasting impact. It is a delicate balance between providing enough context and fostering a sense of mystery.',
    timestamp: '5 days ago',
  },
];

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'event-1',
    year: '2015',
    title: 'First Steps into Digital Art',
    description: 'Began exploring digital painting and 3D modeling, discovering a passion for visual storytelling.',
    Icon: Lightbulb,
  },
  {
    id: 'event-2',
    year: '2018',
    title: 'Graduated with Honors in Media Arts',
    description: 'Completed studies focusing on interactive media and animation, culminating in an award-winning thesis project.',
    Icon: Star,
  },
  {
    id: 'event-3',
    year: '2020',
    title: 'Launched "Aetherium Chronicles"',
    description: 'Released my first independent interactive narrative, receiving critical acclaim for its innovative gameplay and story.',
    Icon: Film,
  },
  {
    id: 'event-4',
    year: '2022',
    title: 'Lead Artist at Nova Studios',
    description: 'Joined Nova Studios to lead the artistic vision for their flagship VR title, managing a team of talented artists.',
    Icon: Briefcase,
  },
  {
    id: 'event-5',
    year: 'Present',
    title: 'Pushing Creative Boundaries',
    description: 'Continuously exploring new technologies and narrative techniques to create unforgettable immersive experiences.',
    Icon: Layers,
  },
];

export const visitorInterestsOptions: string[] = [
  "technical implementation details",
  "creative process and inspiration",
  "narrative structure and storytelling techniques",
  "visual design and aesthetics",
  "innovative use of technology",
  "emotional impact and themes",
  "sound design and music"
];

export type ProfessionType = "Videographer" | "Choreographer" | "Game Developer" | "Innovative Architect" | "Immersive Storyteller";
export const currentProfession: ProfessionType = "Immersive Storyteller";

export const heroTexts = {
  "Videographer": {
    title: "Capturing Moments, Crafting Stories.",
    subtitle: "A passionate videographer dedicated to bringing visions to life through the art of motion pictures."
  },
  "Choreographer": {
    title: "Movement as Language, Body as Canvas.",
    subtitle: "Transforming ideas into breathtaking performances through innovative choreography and expressive dance."
  },
  "Game Developer": {
    title: "Building Worlds, One Line of Code at a Time.",
    subtitle: "Creating interactive experiences that challenge, entertain, and inspire players worldwide."
  },
  "Innovative Architect": {
    title: "Designing Spaces, Shaping Futures.",
    subtitle: "Reimagining the built environment with sustainable, human-centric, and technologically advanced architectural solutions."
  },
  "Immersive Storyteller": {
    title: "Weaving Narratives, Crafting Realities.",
    subtitle: "An immersive storyteller creating unforgettable experiences at the intersection of art, technology, and narrative."
  }
}
