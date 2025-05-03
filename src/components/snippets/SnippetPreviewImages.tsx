import Image from 'next/image';


export function SnippetPreviewImages() {
    return (
        <div className="relative aspect-square overflow-hidden">
            <Image
                src="/images/stacked-1.png"
                alt=""
                width={300}
                height={200}
                className="absolute bottom-0 left-1 w-[90%] rounded-xl shadow-md rotate-[-3deg] origin-bottom z-0"
            />
            <Image
                src="/images/stacked-2.png"
                alt=""
                width={300}
                height={200}
                className="absolute bottom-0 left-[5%] w-[90%] rounded-xl shadow-md rotate-0 origin-bottom z-10"
            />
            <Image
                src="/images/stacked-3.png"
                alt=""
                width={300}
                height={200}
                className="absolute bottom-0 right-1 w-[90%] rounded-xl shadow-md rotate-[3deg] origin-bottom z-0"
            />
        </div>
    );
}
