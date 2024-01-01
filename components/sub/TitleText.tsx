export default function TitleText({ text }: { text: string }) {
    return (
        <div className="font-montserrat font-bold uppercase mt-4 text-4xl text-primary">
            {text}
        </div>
    )
}