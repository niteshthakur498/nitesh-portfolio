export default function CustomInput({ type, placeholder, label, }: { type: string, placeholder?: string, label?: string }) {
    return (
        <input type={type}/*value={title} onChange={ev => setTitle(ev.target.value)}*/ placeholder="Tags of the Note..."
            className="input font-montserrat font-medium focus:border-b-[1px] focus:border-white" />
    )
}