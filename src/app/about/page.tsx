"use client"

import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="flex flex-col items-center md:justify-center min-h-[90vh]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-100 my-4 p-6 rounded-lg shadow-md w-11/12 md:w-5/12"
            >
                <h1 className="text-2xl font-semibold mb-4">Who are we?</h1>
                <p className="text-gray-700 mb-4">
                    GNX is the official GNU/Linux User Group of Netaji Subhash Engineering College,
                    a community of Linux-loving & open-source enthusiastic people.
                </p>

                <h2 className="text-xl font-semibold mb-2">Why GNX&apos;s Not niXal&apos;?</h2>
                <p className="text-gray-700 mb-4">
                    Well, it has a pretty interesting story behind it! ;)
                </p>

                <h2 className="text-xl font-semibold mb-2">What made us form this group?</h2>
                <p className="text-gray-700 mb-4">
                    GNX was founded in 2018 with the aim of providing support to individuals for contributing
                    to open source and gaining knowledge about Linux. Our main motto is to promote the
                    adoption of Linux, encourage others to actively contribute to open source projects, and
                    build a helpful community of like-minded people.
                </p>

                <h2 className="text-xl font-semibold mb-2">What drives us?</h2>
                <p className="text-gray-700 mb-4">
                    Contributing to open source has a lot of benefits; it can really boost the learning and
                    programming experience of a developer very quickly. An open source developer always gets
                    an edge over other developers. So promoting the open source culture is what propels this
                    group.
                </p>

                <p className="text-gray-700">
                    GNX also offers guidance and support to developers for various paid Summer of Code programs.
                </p>
            </motion.div>
        </div>
    );
};

export default About;
