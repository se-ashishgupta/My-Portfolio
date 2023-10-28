export const AnimationData = {
  slideRight: {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
  slideRightDelay: {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 1,
    },
  },
  slideLeftDelay: {
    initial: { x: "100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 1,
    },
  },
  slideLeft: {
    initial: { x: "100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
  slideUp: {
    initial: { y: "100%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
  slideUpDelay: {
    initial: { y: "100%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 1,
    },
  },

  slidDown: {
    initial: { y: "-50%", opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
