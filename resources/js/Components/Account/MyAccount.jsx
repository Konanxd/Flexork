import { router } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import FileStored from '../FileStored';
import FileUploadBtn from '../FileUploadBtn';
import PrimaryButton from '../PrimaryButton';
import UserVerified from '../UserVerified';
import MyAccountDesc from './MyAccountDesc';

const MyAccount = ({ auth }) => {
    const [cvs, setCvs] = useState([]);
    // console.log(auth.cvs[0].path);
    // console.log(cvs);
    // console.log(auth.user.cvs);

    useEffect(() => {
        const fetchCvs = async () => {
            try {
                const response = await axios.get('/api/list-cv');
                setCvs(response.data.cvs);
            } catch (error) {
                console.error('Failed to fetch CVs', error);
            }
        };
        fetchCvs();
    }, []);

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this CV?')) return;

        try {
            await axios.delete(`/api/delete-cv/${id}`);
            setCvs((prevCvs) => prevCvs.filter((cv) => cv.id_cv !== id));
        } catch (error) {
            alert('Gagal mengahpus CV.');
        }
    };

    return (
        <div className="h-full">
            <div className="m flex w-full flex-row items-center gap-6 rounded-t-lg bg-gray-400 p-8 sm:flex-col md:flex-row lg:flex-row">
                <img
                    alt="auth.user.name"
                    src={
                        auth.user.profile_picture
                            ? auth.user.profile_picture
                            : 'assets/defaultPic.jpg'
                    }
                    className="h-[100px] rounded-full"
                ></img>
                <div className="flex w-full flex-col gap-2 text-white sm:items-center md:items-start">
                    <div className="flex max-w-[70%] flex-row items-center gap-3 sm:flex-col md:flex-row">
                        <div className="flex flex-row gap-2 text-2xl font-semibold capitalize">
                            <div className="flex flex-row">
                                <span className="line-clamp-1">
                                    {auth.user.name}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="fill-amber-400"
                                >
                                    <path d="M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024 13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <UserVerified></UserVerified>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 capitalize">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="#FF3D00"
                        >
                            <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
                        </svg>
                        <span>{auth.seeker.address_seeker}</span>
                    </div>
                    <div className="flex flex-row items-center gap-2 capitalize">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            className="fill-amber-400"
                        >
                            <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                        </svg>
                        rating saya :
                        <span className="text-center">
                            <span className="font-semibold">
                                {auth.seeker.score_seeker}
                            </span>{' '}
                        </span>
                    </div>
                </div>
                <PrimaryButton
                    className="flex items-center gap-2 bg-[#1673DE] px-6 py-3 text-white hover:bg-blue-400"
                    onClick={() => router.get('/profil/edit')}
                >
                    <span>edit</span>
                </PrimaryButton>
            </div>
            <div className="flex w-full flex-col gap-6 p-8">
                {/* <MyAccountDesc title="Tentang Saya">
                    <span>Tentang saya</span>
                </MyAccountDesc>
                <MyAccountDesc
                    title="pendidikan"
                    className="flex flex-col gap-2"
                >
                    <li className="pl-2">Pendidikans</li>
                </MyAccountDesc> */}
                <MyAccountDesc title="kontak" className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="currentColor"
                        >
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                        </svg>
                        <span>{auth.seeker.phone_seeker}</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="currentColor"
                        >
                            <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                        </svg>
                        <span>{auth.user.email}</span>
                    </div>
                </MyAccountDesc>
                {/* <MyAccountDesc
                    title="sosial media"
                    className="flex flex-col gap-2"
                >
                    <div className="flex flex-row items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="currentColor"
                        >
                            <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                        </svg>
                        <span>instagram</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="currentColor"
                        >
                            <path d="M13.001 19.9381C16.9473 19.446 20.001 16.0796 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.0796 7.05467 19.446 11.001 19.9381V14H9.00098V12H11.001V10.3458C11.001 9.00855 11.1402 8.52362 11.4017 8.03473C11.6631 7.54584 12.0468 7.16216 12.5357 6.9007C12.9184 6.69604 13.3931 6.57252 14.2227 6.51954C14.5519 6.49851 14.9781 6.52533 15.501 6.6V8.5H15.001C14.0837 8.5 13.7052 8.54332 13.4789 8.66433C13.3386 8.73939 13.2404 8.83758 13.1653 8.97793C13.0443 9.20418 13.001 9.42853 13.001 10.3458V12H15.501L15.001 14H13.001V19.9381ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22Z"></path>
                        </svg>
                        <span>facebook</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="currentColor"
                        >
                            <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path>
                        </svg>
                        <span>twitter</span>
                    </div>
                </MyAccountDesc> */}
                <MyAccountDesc
                    title="pengalaman kerja"
                    className="flex flex-col gap-2"
                >
                    <li className="pl-2">Belum ada</li>
                    {/* <li className="pl-2">pengalaman kerja 1</li>
                    <li className="pl-2">pengalaman kerja 2</li>
                    <li className="pl-2">pengalaman kerja 3</li> */}
                </MyAccountDesc>
                <MyAccountDesc title="tanggal lahir">
                    <span>{auth.seeker.born_date}</span>
                </MyAccountDesc>
                <MyAccountDesc
                    title="resume"
                    className="flex w-full flex-row gap-6 overflow-x-scroll pb-3 scrollbar-thin"
                >
                    <FileUploadBtn onUpload={() => window.location.reload()} />
                    {auth.cvs.length > 0 ? (
                        auth.cvs.map((cv) => (
                            <FileStored
                                key={cv.id_cv}
                                filename={cv.original_cv_name}
                                size={'2MB'}
                                onDelete={() => handleDelete(cv.id_cv)}
                                fileUrl={`/storage/${cv.path}`}
                            />
                        ))
                    ) : (
                        <></>
                    )}
                </MyAccountDesc>
                {/* <MyAccountDesc
                    title="sertifikat"
                    className="scrollbar-thin flex w-full flex-row gap-6 overflow-x-scroll pb-3"
                >
                    <FileUploadBtn></FileUploadBtn>
                    <FileStored></FileStored>
                    <FileStored></FileStored>
                    <FileStored></FileStored>
                    <FileStored></FileStored>
                    <FileStored></FileStored>
                    <FileStored></FileStored>
                </MyAccountDesc> */}
            </div>
        </div>
    );
};

export default MyAccount;
