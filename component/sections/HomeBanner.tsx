export default function HomeBanner() {
    return (
        <section className="fixed left-0 top-0 right-0 bottom-0 bg-[#000000]">
            <iframe
                className="absolute"
                src="https://app.spline.design/file/2134e00c-4e07-4bad-984d-11f6387857f8?view=preview"
                width="100%"
                height="100%">
            </iframe>

            <div className="absolute left-0 top-0 right-0 bottom-0 py-60">
                <div className="max-w-[1400px] mx-auto px-4">
                    <h4>Transforming Healthcare Through</h4>
                    <h1>AI-Powered  Technology & Intelligent Billing Automation</h1>
                </div>
            </div>
        </section>
    )
}