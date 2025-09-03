export function CardHome({ img, title, text }) {
    return (
        <div id="SPL" class="w-[100%] flex flex-col items-center px-[2rem] mb-[5rem]">
            <img src={img} alt="" />
            <h2 class="text-neutral-950/75 font-bold text-[1.5rem] mb-[.5rem] dark:text-white">{title}</h2>
            <p class="text-[0.9rem] font-inter text-[#0C0C0C] flex text-center dark:text-[#A3A3A3]">{text}</p>
        </div>
    )
}