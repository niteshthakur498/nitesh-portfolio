export default function ContentText({ children }: { children?: React.ReactNode }) {
    return (
        <p className="font-palanquin mt-2 text-lg">
            {children}
        </p>
    )
}