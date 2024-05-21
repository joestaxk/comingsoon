
export default function CardComponent({svg,title,desc}) {
    return  (
        <div className="sm:w-[300px] w-full py-5 px-2 space-y-2 min-h-[200px] bg-[rgba(255,255,255,0.05)] rounded-[15px] flex flex-col font-[500] text-[18px] leading-22px items-center text-center text-white">
            <div className="">{svg}</div>
            <div className="w-full">{title}</div>
            <div className="text-gray-50/30 font-light text-[15px]">{desc}</div>
        </div>
    )
}