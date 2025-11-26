export function QuemSomosComp({ img, tittle }) {
    return (
        <div className="flex flex-col items-center">
            
            {/* FOTO */}
            <img 
                src={img} 
                alt={tittle}
                className="
                    w-[12.5rem] lg:w-[15rem]
                    h-[12rem] lg:h-[14rem]
                    rounded-full
                    drop-shadow-xl
                    transition-all duration-300
                " 
            />

            {/* NOME */}
            <p
                className="
                    text-[1.5rem]
                    font-semibold
                    mb-[2.5rem]
                    mt-[1.25rem]

                    /* LIGHT */
                    text-[#0A1A2F]

                    /* DARK */
                    dark:text-white

                    transition-colors duration-300
                "
            >
                {tittle}
            </p>
        </div>
    );
}
