import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Dashboard() {
    return (
        <GuestLayout>
            <div className="flex w-full flex-row">
                <div className="flex flex-row items-center justify-center bg-[#9F9F9F] p-2 text-lg text-white">
                    FILTER
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="36"
                        height="36"
                        fill="rgba(255,255,255,1)"
                    >
                        <path d="M12 14L8 10H16L12 14Z"></path>
                    </svg>
                </div>
                <TextInput
                    className="w-full"
                    placeholder="Saya sedang mencari..."
                />
                <div className="flex flex-row items-center justify-center bg-[#9F9F9F] p-2 text-lg text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="rgba(255,255,255,1)"
                    >
                        <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                    </svg>
                    &nbsp; CARI
                </div>
            </div>
        </GuestLayout>
    );
}
