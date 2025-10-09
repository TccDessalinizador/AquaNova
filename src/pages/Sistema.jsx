import { useState } from "react";
import { Header } from "../components/Header.jsx";

export function Sistema() {
    const [status, setStatus] = useState("Desligado");

    return (
        <div>
            <Header />

            <div
                id="btns"
                className="h-[90vh] mt-[5rem] flex justify-center items-center flex-col bg-white dark:bg-[#0C0C0C] gap-[1rem]"
            >
                <div className="flex gap-[1rem]">
                    <button
                        onClick={() => setStatus("Ligado")}
                        className="w-[30rem] h-[15rem] bg-[#0C0C0C] dark:bg-white text-white dark:text-[#0C0C0C] cursor-pointer mr-[1rem] rounded-md" 
                    >
                        LIGAR
                    </button>

                    <button
                        onClick={() => setStatus("Desligado")}
                        className="w-[30rem] h-[15rem] bg-[#0C0C0C] dark:bg-white text-white dark:text-[#0C0C0C] cursor-pointer rounded-md" 
                    >
                        DESLIGAR
                    </button>
                </div>

                <p className="dark:text-white text-[#0C0C0C] mt-[1rem] text-[1.5rem]">
                    Status: <span className="font-bold">{status}</span>
                </p>
            </div>
        </div>
    );
}
