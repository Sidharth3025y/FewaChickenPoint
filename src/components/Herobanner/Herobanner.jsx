import React from 'react';
import { motion } from 'framer-motion';
import { GiChickenLeg } from 'react-icons/gi';

const HeroBanner = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0   ">
        <img 
          src="https://www.eatthis.com/wp-content/uploads/sites/4//media/images/ext/966368714/kfc-original-chicken-recipe.jpg?quality=82&strip=1&w=800" 
          alt="Delicious chicken dishes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-red-450"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        {/* Animated Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif"
        >
          Fewa Chicken Point
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-amber-300 mb-8 max-w-2xl"
        >
          Taste the authentic flavors of our secret recipe chicken
        </motion.p>

        {/* 15% off Wednesday Badge with animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.6
          }}
          whileHover={{ scale: 1.05 }}
          className="bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg mb-8 flex items-center"
        >
          <GiChickenLeg className="mr-2 text-xl" />
          <span className="font-bold">15% OFF EVERY WEDNESDAY!</span>
        </motion.div>

        {/* CTA Button with animation */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="bg-white text-amber-700 hover:bg-amber-100 px-8 py-3 rounded-full font-bold text-lg shadow-lg"
        >
          Order Now
        </motion.button>

        {/* Floating chicken animation */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-10 hidden md:block"
        >
          <GiChickenLeg className="text-4xl text-amber-300" />
        </motion.div>

        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-20 right-10 hidden md:block"
        >
          <GiChickenLeg className="text-5xl text-amber-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;