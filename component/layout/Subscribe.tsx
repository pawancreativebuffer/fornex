export default function Subscribe() {
    return (
        <form className="space-y-4" method="post">
            <input
                type="email"
                placeholder="Email Address *"
                className="w-full bg-[#1a1d21] border border-gray-700 rounded-full px-4 py-3 text-sm focus:outline-none focus:border-[#64d2b1] transition-colors text-white placeholder:text-gray-600"
                required
            />
            <button
                type="submit"
                className="w-full bg-[#64d2b1] text-[#1a1d21] font-[500] py-3 rounded-full hover:bg-[#52b396] transition-colors cursor-pointer text-sm"
            >
                Submit
            </button>
        </form>
    )
}