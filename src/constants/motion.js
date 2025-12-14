export const containersVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const cardVariants = {
  hidden: {
    opacity: 0.5,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
};
