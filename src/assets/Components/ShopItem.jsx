import {motion} from "framer-motion";
import {useState, useEffect} from "react";

function ShopItem({ seed, discount }){
    const value = Math.floor(Math.random() * 100)
    let discountedValue = null

    const [word, setWord] = useState("Item Name")
    useEffect(() => {
        fetch('https://random-word-api.herokuapp.com/word?number=1')
            .then(res => res.json())
            .then(data => setWord(data[0]))
            .catch(() => setWord("Item Name"))
    }, [])
    if (discount) {
        discountedValue = (value * discount).toFixed(1)
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={"h-fit w-48 shadow-md border border-black/20 flex flex-col rounded-lg overflow-hidden"}>
            <div className="size-48 overflow-hidden relative">
                <img
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={`https://picsum.photos/seed/${seed}/400/600`}
                    alt="Item"
                />
                {discountedValue && <div className={"py- 1 px-2 absolute top-2 left-2 size-fit bg-neutral-100 rounded border border-black shadow text-black font-bold"}>
                    {discount * 100}%
                </div>}
            </div>
            <div className="h-fit py-1 flex flex-col pl-3 items-start justify-center">
                <p className={"text-neutral-600"}>{word}</p>
                <div className="flex items-center gap-2">
                    <p className={"text-neutral-900 font-bold"}>$ {discountedValue ? discountedValue : value}</p>
                    {discountedValue && (
                        <p className="text-neutral-500 text-sm line-through">$ {value}</p>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default ShopItem