
interface FadeInProps {
    direction: string;
    type?: string;
    delay: number;
    duration: number;
}

interface ZoomInProps {
    delay?: number;
    duration?: number;
}

export const fadeIn = ({ direction, type, delay, duration }: FadeInProps) => {
    return {
        hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
        opacity: 0,
        },
        show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type: type,
            delay: delay,
            duration: duration,
            ease: "easeOut",
        },
        },
    };
};

export const zoomIn = ({ delay, duration }: ZoomInProps) => {
    return {
        hidden: {
        scale: 1,
        opacity: 1,
        },
        show: {
        scale: 1.5,
        opacity: 3,
        transition: {
            type: "tween",
            delay: delay,
            duration: duration,
            ease: "easeOut",
        },
        },
    };
};