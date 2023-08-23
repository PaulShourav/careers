import Link from "next/link";
import { FaRegSquarePlus, IconName } from "react-icons/fa6";

const Heading = ({title,hrefUrll}) => {
    return (
        <div className="flex items-center bg-yellow-300 px-3 py-3">
            <div className="flex-1">
            <p className="font-bold uppercase">{title}</p>
            </div>
            <div>
                <Link href={hrefUrll} className="btn btn-sm btn-primary uppercase"><FaRegSquarePlus/>ADD</Link>
            </div>
        </div>
    );
};

export default Heading;