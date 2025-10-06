import {motion} from "framer-motion";

function SideBar(){

    const sampleCategories = ["ICs", "Logic Gates", "Transistors", "Resistors", "Micro controllers"]
    // Sidebar list variant: delays/staggers children animations
    const listVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.02,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } }
    };

    const titleVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
    }

    function ListItem({ text = "Item" }) {
        return (
            <motion.li
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="text-lg pl-9"
            >
                {text}
            </motion.li>
        );
    }

    return (
        <div className="h-full w-80 bg-neutral-100 text-neutral-600 shadow-2xl flex flex-col justify-between shadow-neutral-900 py-6">
            <div>
            <motion.div
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-neutral-900 font-bold text-2xl pl-6 mb-6">CATEGORIES</motion.div>
            <motion.ul
                className="space-y-3"
                variants={listVariants}
                initial="hidden"
                animate="visible"
            >
                {Array.from(sampleCategories).map((category) => (
                    <ListItem key={category} text={category} />
                ))}
            </motion.ul>
            </div>
           <button className={"btn mx-4"}>VIEW CART</button>
        </div>
    );
}

export default SideBar