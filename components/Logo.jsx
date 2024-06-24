import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <div className="lg:flex">
            <Link href="/">
                <Image
                    className="w-auto h-6"
                    src="/era.png"
                    alt="Logo"
                    width={100}
                    height={24}
                    priority
                />
            </Link>
        </div>
    );
};

export default Logo;
