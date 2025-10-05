import {Menu, Search, Package, GraduationCap, Microchip} from "lucide-react";
import { motion } from "framer-motion";

function NavBar({ selectedIndex, setSelectedIndex, sidebarValue, sidebarFunction }){
    const icons = [
        { Icon: Microchip, index: 0 },
        { Icon: Package, index: 1 },
        { Icon: GraduationCap, index: 2 }
    ];

    return (
        <div className={"w-full h-28 bg-neutral-300 flex flex-row items-center justify-between px-6"}>
            <Menu className={"text-neutral-600 cursor-pointer"} onClick={() => {
                sidebarFunction(!sidebarValue)}
            }/>
            <div className={"flex flex-row items-center space-x-6 text-neutral-600"}>
                {icons.map(({ Icon, index }) => (
                    <motion.div
                        key={index}
                        animate={{
                            scale: selectedIndex === index ? 1 : 0.875,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                        }}
                        onClick={() => setSelectedIndex(index)}
                        className="cursor-pointer"
                    >
                        <Icon
                            className={
                                selectedIndex === index
                                    ? "size-8 text-blue-800"
                                    : "size-7 text-neutral-600"
                            }
                        />
                    </motion.div>
                ))}
            </div>
            <Search className={"text-neutral-600 cursor-pointer"} />
        </div>
    )
}
export default NavBar