import { Brain } from "lucide-react";

export default function HomeBanner() {
    return (
        <section className="left-0 top-0 right-0 bottom-0 bg-[#000000]">
            <iframe
                className="absolute h-full"
                src="https://app.spline.design/file/2134e00c-4e07-4bad-984d-11f6387857f8?view=preview"
                width="100%"
                height="100%">
            </iframe>

            <div className="absolute left-0 top-0 right-0 bottom-0 py-60">
                <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between gap-10">
                    <div className="flex flex-col">
                        <h5><Brain /> AI Innovation for</h5>
                        <h1 className="font-[700] text-[90px] text-[#fff] max-w-[700px] leading-[110px]">Healthcare & Billing Efficiency</h1>
                    </div>

                    <div></div>
                </div>
            </div>
        </section>
    )
}