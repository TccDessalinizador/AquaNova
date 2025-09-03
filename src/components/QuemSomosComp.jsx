export function QuemSomosComp({ img, tittle }) {
    return (
        <div class="flex flex-col items-center">
            <img src={img} alt="menocci" class="w-[12.5rem] lg:w-[15rem] h-[12rem] lg:h-[14rem] rounded-[100%] drop-shadow-xl/50" />
            <p className="text-[1.5rem] text-[#0C0C0C] dark:text-white font-semibold mb-[2.5rem] mt-[1.25rem] font-inter">{tittle}</p>
        </div>
    )
}