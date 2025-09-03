export function CardHomeS({ img, tittle, text }) {
    return (
        <div id='fdu' class="flex flex-col items-center mb-[3rem]">
            <img src={img} alt="" />
            <h2 class="text-black dark:text-[#F0F0F0] mt-[1.5rem] mb-[.5rem] text-[1.5rem] font-bold">{tittle}</h2>
            <p class="text-black dark:text-[#F0F0F0] text-[0.9rem] flex text-center w-[19.5rem]">{text}</p>
        </div>
    )
}
