import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaReact, FaGithub, FaTwitter } from "react-icons/fa"; // import icons from react-icons library
// import './slider.scss';

const icons = [FaReact, FaGithub, FaTwitter]; // array of icon components

interface IconProps {
  iconComponent: React.FunctionComponent<{ size?: number, color?: string }>; // define props for Icon component
  x: number;
  y: number;
}

const Icon: React.FC<IconProps> = ({ iconComponent, x, y }) => {
  const IconComponent = iconComponent; // Capitalize the component name to use as a JSX element

  return (
    <motion.span
      style={{ x, y }}
      animate={{ x: x + 2000 }} // adjust this value to control speed
      transition={{ duration: 5, loop: Infinity, ease: "linear" }}
    >
      <IconComponent size={32} color="gray" /> {/* render the icon component */}
    </motion.span>
  );
};

const IconContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        controls.start({
          opacity: 1,
          transition: { duration: 1 },
        });
      } else {
        controls.start({
          opacity: 0,
          transition: { duration: 1 },
        });
      }
    });

    observer.observe(containerRef.current!);

    return () => {
      observer.unobserve(containerRef.current!);
    };
  }, []);

  return (
    <motion.div
      id="slider"
      ref={containerRef}
      style={{ position: "relative", height: 100, width: "100%" }}
      animate={controls}
    >
      {icons.map((IconComponent, index) => (
        <Icon key={index} iconComponent={IconComponent} x={index * 100} y={0} />
      ))}
    </motion.div>
  );
};

export default IconContainer;
