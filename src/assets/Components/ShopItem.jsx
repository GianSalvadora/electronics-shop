function ShopItem({ seed }){
    return (
        <div className={"h-fit w-44 bg-neutral-300 flex flex-col"}>
            <div className="size-44 overflow-hidden relative">
                <img
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={`https://picsum.photos/seed/${seed}/400/600`}
                    alt="Item"
                />
            </div>
            <div className="h-fit py-1 flex flex-col pl-3 items-start justify-center">
                <p className={"text-neutral-800 font-bold"}>Item Name</p>
                <p className={"text-neutral-600"}>$ {Math.floor(Math.random() * 100)}</p>
            </div>
        </div>
    )
}

export default ShopItem