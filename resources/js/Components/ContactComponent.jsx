export default function ContactComponent({ properties, svg, ...props }) {
    return (
        <li
            className="flex flex-row items-center gap-2 fill-[#727272] text-[#727272]"
            {...props}
        >
            {svg}
            <span>{properties}</span>
        </li>
    );
}
