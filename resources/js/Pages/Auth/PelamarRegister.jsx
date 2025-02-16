import FormTitle from '@/Components/FormTitle';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import OptionInput from '@/Components/OptionInput';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function PelamarRegister() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        gender: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });

    const optionItems = [
        { label: 'Pilih jenis kelamin Anda', value: '', disabled: true },
        { label: 'Laki-Laki', value: 'laki-laki', disabled: false },
        { label: 'Perempuan', value: 'perempuan', disabled: false },
    ];

    const submit = (e) => {
        e.preventDefault();

        post(route('register-pelamar.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <div className="mb-14 mt-14 w-full overflow-hidden border-2 border-slate-300 bg-white px-6 py-4 shadow-xl sm:max-w-lg sm:rounded-lg">
                <Head title="Daftar Pelamar" />

                <FormTitle title="DAFTAR" />

                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Nama Lengkap" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            placeholder="Isi nama lengkap Anda di sini"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="email"
                            placeholder="Isi email Anda di sini"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="gender" value="Jenis Kelamin" />

                        <OptionInput
                            name="gender"
                            id="gender"
                            value={data.gender}
                            optionItems={optionItems}
                            onChange={(e) => setData('gender', e.target.value)}
                            required
                        />

                        <InputError message={errors.gender} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="phone" value="Nomor Telepon" />

                        <TextInput
                            id="phone"
                            type="text"
                            name="phone"
                            value={data.phone}
                            className="mt-1 block w-full"
                            autoComplete="phone"
                            placeholder="Isi kata sandi Anda di sini"
                            onChange={(e) => setData('phone', e.target.value)}
                            required
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Kata Sandi" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            placeholder="Isi kata sandi Anda di sini"
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Konfirmasi Kata Sandi"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            placeholder="Isi ulang kata sandi yang sama di sini"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4 flex flex-col items-center justify-center text-center">
                        <PrimaryButton
                            className="w-full py-3"
                            disabled={processing}
                        >
                            DAFTAR
                        </PrimaryButton>

                        <Link
                            href={route('login')}
                            className="my-7 rounded-md text-sm text-[#1673DE] hover:text-[#6FACF1] focus:outline-none focus:ring-2 focus:ring-[#6FACF1] focus:ring-offset-2"
                        >
                            SUDAH PUNYA AKUN?
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
