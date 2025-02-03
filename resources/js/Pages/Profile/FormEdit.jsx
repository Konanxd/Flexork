import FormEditTitle from '@/Components/FormEditTitle';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextAreaPrim from '@/Components/TextAreaPrim';
import TextInputSecondary from '@/Components/TextInputSecondary';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function FormEdit() {
    return (
        <GuestLayout>
            <Head title="Edit Akun" />
            <form className="my-5 flex w-[80%] max-w-[1000px] flex-col gap-5 rounded-2xl bg-white px-24 py-8">
                <div className="flex flex-col gap-2.5">
                    <FormEditTitle title="Nama" />
                    <TextInputSecondary placeholder="Isi Nama Anda Disini" />
                </div>
                <div className="flex flex-col gap-2.5">
                    <FormEditTitle title="alamat" />
                    <TextAreaPrim placeholder="Isi Alamat Anda Disini" />
                </div>
                <div className="flex flex-col gap-2.5">
                    <FormEditTitle title="Tentang Saya" />
                    <TextAreaPrim placeholder="Isi Tentang Diri Anda Disini" />
                </div>
                <div className="flex flex-col gap-2.5">
                    <FormEditTitle title="Pendidikan" />
                    <div className="flex flex-col gap-2.5">
                        <TextInputSecondary placeholder="Isi Pendidikan Anda Disini" />
                    </div>
                </div>
                <div className="flex flex-col gap-2.5">
                    <FormEditTitle title="Sosial Media" />
                    <div className="flex flex-col gap-2.5">
                        <TextInputSecondary placeholder="Isi Sosial Media Anda Disini" />
                    </div>
                </div>
                <div className="flex flex-col gap-2.5">
                    <FormEditTitle title="Pengalaman Kerja" />
                    <TextAreaPrim placeholder="Isi Tentang Pengalaman Kerja Anda Disini" />
                </div>
                <div className="flex flex-col gap-2.5">
                    <FormEditTitle title="Pengalaman Kerja" />
                    <div>
                        <input
                            type="date"
                            name=""
                            id=""
                            className="border-2 border-zinc-300 fill-zinc-400 uppercase text-zinc-400"
                        />
                    </div>
                </div>
                <PrimaryButton>simpan</PrimaryButton>
                <SecondaryButton>batal</SecondaryButton>
            </form>
        </GuestLayout>
    );
}
