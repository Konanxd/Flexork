import ApplyButton from '@/Components/ApplyButton';
import HeadDescription from '@/Components/HeadDescription';
import HeadTitle from '@/Components/HeadTitle';
import BackIcon from '@/Components/Icon/BackIcon';
import ModalSelectCV from '@/Components/ModalSelectCV';
import PrimaryButton from '@/Components/PrimaryButton';
import ReviewToUser from '@/Components/ReviewToUser';
import SecondaryButton from '@/Components/SecondaryButton';
import SubTitle from '@/Components/SubTitle';
import TagView from '@/Components/TagView';
import GuestLayout from '@/Layouts/GuestLayout';
import { router } from '@inertiajs/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Details = ({
    auth,
    works,
    vacancy,
    reviews: initialReviews,
    cvs,
    status: initialStatus,
}) => {
    const [applicationStatus, setApplicationStatus] = useState(
        initialStatus ?? null,
    );
    const [applied, setApplied] = useState(false);
    const [CVSelectOpen, setCVSelectOpen] = useState(false);
    const [reviews, setReviews] = useState(initialReviews);
    const [reviewed, setReviewed] = useState(false);
    const [reviewedWorkId, setReviewedWorkId] = useState(null);

    const fetchReviews = async () => {
        try {
            const response = await axios.get(
                `/api/reviews/${vacancy.id_vacancy}`,
            );
            setReviews(response.data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    useEffect(() => {
        if (vacancy && auth.user?.type_user === 'pelamar') {
            axios
                .get(`/api/apply-status/${vacancy.id_vacancy}`)
                .then((response) => {
                    if (response.data.vacancy) {
                        setApplied(response.data.vacancy.applied);
                        setApplicationStatus(response.data.vacancy.status);
                    }
                })
                .catch((error) => console.error(error));
        }
    }, [vacancy, auth.user]);

    useEffect(() => {
        if (reviewedWorkId) {
            axios
                .get(`/api/reviews/check/${reviewedWorkId}`)
                .then((response) => {
                    if (response.data.exists) {
                        fetchReviews();
                        setReviewedWorkId(null);
                    }
                })
                .catch((error) => {
                    console.error('Error checking review existence:', error);
                });
        }
    }, [reviewedWorkId]);

    const handleReviewSuccess = (workId) => {
        setReviewedWorkId(workId);
    };

    const handleCancel = () => {
        axios.delete(`/api/cancel/${vacancy.id_vacancy}`).catch((error) => {
            console.error(error);
            setApplicationStatus('pending');
            setApplied(true);
        });

        setApplicationStatus(null);
        setApplied(false);
        console.log(applicationStatus);
        console.log(vacancy.id_vacancy);
    };

    const handleEdit = () => {
        router.get(`/edit-lowongan/${vacancy.id_vacancy}`);
    };

    if (!vacancy)
        return (
            <GuestLayout>
                <div className="shadow-5xl my-14 flex w-full max-w-4xl flex-col gap-6 rounded-2xl bg-white px-8 py-10">
                    <h1>Lowongan tidak tersedia</h1>
                </div>
            </GuestLayout>
        );

    const [modalConfirm, setModalConfirm] = useState(false);
    const handleClose = () => {
        setModalConfirm(false);
    };
    return (
        <GuestLayout>
            {vacancy != undefined ? (
                <div className="shadow-5xl my-14 flex w-full max-w-4xl flex-col gap-6 rounded-2xl bg-white px-8 py-10">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center">
                                <BackIcon
                                    className="relative mx-4"
                                    onClick={() => router.visit('/dashboard')}
                                />
                                <HeadTitle
                                    className="text-2xl"
                                    title={vacancy.title_vacancy}
                                />
                            </div>
                            {auth.user.type_user == 'penyedia' ? (
                                <PrimaryButton
                                    onClick={handleEdit}
                                    className="h-fit w-fit rounded-md bg-zinc-400 px-1.5 py-1.5"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                        fill="#ffffff"
                                    >
                                        <path d="M16.7574 2.99678L14.7574 4.99678H5V18.9968H19V9.23943L21 7.23943V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99678C3 3.4445 3.44772 2.99678 4 2.99678H16.7574ZM20.4853 2.09729L21.8995 3.5115L12.7071 12.7039L11.2954 12.7064L11.2929 11.2897L20.4853 2.09729Z"></path>
                                    </svg>
                                </PrimaryButton>
                            ) : (
                                <></>
                            )}
                        </div>
                        <HeadDescription className="text-[#727272]">
                            {vacancy.description_vacancy}
                        </HeadDescription>
                    </div>

                    <div className="flex flex-row">
                        <div className="flex flex-row items-center gap-2">
                            <span>Status :</span>
                            <div className="rounded-md bg-green-400 px-4 py-2 font-semibold uppercase text-white">
                                {vacancy.is_active ? 'dibuka' : 'ditutup'}
                            </div>
                            {vacancy.is_active &&
                            auth.user.type_user === 'penyedia' ? (
                                <PrimaryButton className="text-red-500 hover:bg-transparent hover:text-red-300">
                                    berhentikan
                                </PrimaryButton>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>

                    <div className="flex flex-row">
                        <div>
                            {auth.user.type_user === 'pelamar' ? (
                                applicationStatus === 'pending' ? (
                                    <ApplyButton
                                        className="bg-[#1673DE] tracking-normal text-white hover:bg-zinc-400"
                                        status={applicationStatus}
                                        onClick={() => setModalConfirm(true)}
                                    />
                                ) : (
                                    <ApplyButton
                                        className="bg-[#1673DE] tracking-normal text-white hover:bg-zinc-400"
                                        onClick={() => setCVSelectOpen(true)}
                                        status={applicationStatus}
                                    />
                                )
                            ) : (
                                ''
                            )}
                        </div>
                    </div>

                    {modalConfirm && (
                        <div
                            className="fixed inset-0 flex h-full w-full items-center justify-center bg-black/60"
                            onClick={handleClose}
                        >
                            <div
                                className="relative flex flex-col gap-5 rounded-lg bg-white p-10"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <h1>
                                    apakah anda ingin membatalakn lamaran ini?
                                </h1>
                                <div className="flex flex-row gap-3">
                                    <SecondaryButton
                                        onClick={handleClose}
                                        className="w-full bg-zinc-500 text-white"
                                    >
                                        tidak
                                    </SecondaryButton>
                                    <PrimaryButton
                                        className="w-full bg-[#1673DE] text-white hover:bg-[#135bb0]"
                                        onClick={() => {
                                            handleCancel();
                                            handleClose();
                                        }}
                                    >
                                        Iya
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    )}

                    {CVSelectOpen && (
                        <ModalSelectCV
                            cvs={cvs}
                            vacancyId={vacancy.id_vacancy}
                            onSuccess={() => setApplicationStatus('pending')}
                            onClose={() => setCVSelectOpen(false)}
                        />
                    )}

                    <div className="flex flex-col gap-6">
                        <SubTitle>Keterangan</SubTitle>
                        <ul className="space-y-3 px-4 text-sm text-gray-600">
                            <li className="flex flex-row items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    fill="rgba(114,114,114,1)"
                                >
                                    <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
                                </svg>
                                {vacancy.company.address_company}
                            </li>
                            <li className="flex flex-row items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                >
                                    <path d="M21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM19 20V4H5V20H19ZM8 11H11V13H8V11ZM8 7H11V9H8V7ZM8 15H11V17H8V15ZM13 15H16V17H13V15ZM13 11H16V13H13V11ZM13 7H16V9H13V7Z"></path>
                                </svg>
                                <div className="flex w-full flex-row gap-2">
                                    {vacancy.tags.length > 0 ? (
                                        vacancy.tags.map((tag) => (
                                            <TagView
                                                key={tag.id_tag}
                                                tag={tag.name_tag}
                                                className="border-2 border-red-400 py-[3px] text-red-400"
                                            />
                                        ))
                                    ) : (
                                        <TagView
                                            tag={'Kosong'}
                                            className="border-2 border-red-400 py-[3px] text-red-400"
                                        />
                                    )}
                                </div>
                            </li>
                            <li className="flex flex-row items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    fill="rgba(114,114,114,1)"
                                >
                                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z"></path>
                                </svg>
                                {`${vacancy.minhour}-${vacancy.maxhour}`}
                            </li>
                            <li className="flex flex-row items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    fill="rgba(114,114,114,1)"
                                >
                                    <path d="M20 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H19ZM5 16.1707C5.31278 16.0602 5.64936 16 6 16H19V4H6C5.44772 4 5 4.44772 5 5V16.1707ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14H9Z"></path>
                                </svg>
                                {vacancy.experience_vacancy}
                            </li>
                            <li className="flex flex-row items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    fill="rgba(114,114,114,1)"
                                >
                                    <path d="M12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12 16.0004 9.79086 14.2095 8 12.0004 8 9.79123 8 8.00037 9.79086 8.00037 12 8.00037 14.2091 9.79123 16 12.0004 16ZM21.0049 4.00293H3.00488C2.4526 4.00293 2.00488 4.45064 2.00488 5.00293V19.0029C2.00488 19.5552 2.4526 20.0029 3.00488 20.0029H21.0049C21.5572 20.0029 22.0049 19.5552 22.0049 19.0029V5.00293C22.0049 4.45064 21.5572 4.00293 21.0049 4.00293ZM4.00488 15.6463V8.35371C5.13065 8.017 6.01836 7.12892 6.35455 6.00293H17.6462C17.9833 7.13193 18.8748 8.02175 20.0049 8.3564V15.6436C18.8729 15.9788 17.9802 16.8711 17.6444 18.0029H6.3563C6.02144 16.8742 5.13261 15.9836 4.00488 15.6463Z"></path>
                                </svg>
                                {vacancy.minsalary.toLocaleString('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR',
                                    maximumFractionDigits: 0,
                                })}
                                -
                                {vacancy.maxsalary.toLocaleString('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR',
                                    maximumFractionDigits: 0,
                                })}
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <SubTitle>Jobdesk</SubTitle>
                        <ul className="list-disc space-y-3 px-9 text-sm text-gray-600">
                            {JSON.parse(vacancy.jobdesk_vacancy).map(
                                (item, index) => (
                                    <li key={index}>{item}</li>
                                ),
                            )}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <SubTitle>Benefit</SubTitle>
                        <ul className="list-disc space-y-3 px-9 text-sm text-gray-600">
                            {JSON.parse(vacancy.benefit_vacancy).map(
                                (item, index) => (
                                    <li key={index}>{item}</li>
                                ),
                            )}
                        </ul>
                    </div>

                    {auth.user.type_user == 'pelamar' ? (
                        <div className="flex flex-col gap-6">
                            <SubTitle>
                                <div className="flex flex-row items-center gap-4">
                                    <img
                                        src="/assets/defaultPic.jpg"
                                        className="size-16 overflow-hidden rounded-full"
                                    />
                                    <div className="flex flex-col">
                                        <div className="poppins-semibold">
                                            {vacancy.company.name_company}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            IT Consultant
                                        </div>
                                        <div className="flex flex-row gap-2 py-2">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="18"
                                                    height="18"
                                                    fill="currentColor"
                                                >
                                                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SubTitle>
                        </div>
                    ) : (
                        ''
                    )}

                    {auth.user.type_user == 'penyedia' && (
                        <div className="flex flex-col gap-6">
                            <SubTitle>Ulasan</SubTitle>
                            {works.length > 0 ? (
                                works
                                    .filter(
                                        (work) =>
                                            !(
                                                Array.isArray(reviews) &&
                                                reviews.some(
                                                    (review) =>
                                                        review.id_work ===
                                                        work.id_work,
                                                )
                                            ),
                                    )
                                    .map((work) => (
                                        <ReviewToUser
                                            key={work.id_work}
                                            nama={work.name_seeker}
                                            work={work}
                                            user={auth}
                                            onReviewSuccess={
                                                handleReviewSuccess
                                            }
                                        />
                                    ))
                            ) : (
                                <h1>Belum ada pelamar</h1>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                <h1 className="items-center">Lowongan tidak teredia.</h1>
            )}
        </GuestLayout>
    );
};

export default Details;
