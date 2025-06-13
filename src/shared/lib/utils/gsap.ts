import { Elastic, Power4, gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export { Elastic, Power4, gsap };
