import NavBar from "./assets/Components/NavBar.jsx";
import SideBar from "./assets/Components/SideBar.jsx";
import ShopItem from "./assets/Components/ShopItem.jsx";
import {useEffect, useRef, useState} from "react";
import { motion, AnimatePresence } from 'framer-motion';


function App() {

    const [showSidebar, setShowSidebar] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const contentRef = useRef(null);

    const titleText = {
        0: "All Electronics",
        1: "Kits",
        2: "Tutorials"
    }

    useEffect(() => {
        contentRef.current.scrollTop = 0;
    }, [selectedIndex]);


    const sidebarVariants = {
        hidden: { x: '-100%'},
        visible: { x: 0},
        exit: { x: '-100%' }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };
    return (
        <div className="h-dvh w-dvw flex flex-col bg-neutral-100">
            <NavBar selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} sidebarValue={showSidebar} sidebarFunction={setShowSidebar}/>
            <div ref={contentRef} className={"h-full w-full overflow-y-hidden flex flex-col bg-neutral-100 relative"}>
                <AnimatePresence>
                    {showSidebar && (
                        <>
                            <motion.div className={"absolute inset-0 h-full w-full bg-neutral-600/80 z-20"}
                                        variants={overlayVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        onClick={() => setShowSidebar(false)}>

                            </motion.div>

                            <motion.div
                                className={"absolute h-full w-full z-30"}
                                variants={sidebarVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                            >
                                <SideBar />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={selectedIndex}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0
                        }}
                        transition={{
                            duration: 0.1
                        }}
                        className={"text-2xl font-bold text-neutral-800 mx-auto py-3"}>
                        {titleText[selectedIndex]}
                    </motion.p>
                </AnimatePresence>
                <div className={"overflow-y-scroll"}>
                    <div className={"w-full h-fit gap-4 px-4 grid grid-cols-2 mb-6 "}>
                        {Array.from({ length: 20 }, (_, index) => {
                            const hasDiscount = Math.random() > 0.8;
                            const discount = hasDiscount ? (Math.random() * 0.2 + 0.1).toFixed(1) : null;

                            return (
                                <ShopItem
                                    key={index}
                                    discount={discount}
                                    seed={`item-${index}`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;