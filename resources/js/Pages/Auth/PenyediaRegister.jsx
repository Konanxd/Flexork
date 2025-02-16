import FormTitle from '@/Components/FormTitle';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextAreaInput from '@/Components/TextAreaInput';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';

export default function PenyediaRegister() {
    const { data, setData, processing, errors, reset } = useForm({
        name: '',
        email: '',
        email_company: '',
        id_business: '',
        description: '',
        phone_company: '',
        address: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        router.post('/register-penyedia', data, {
            preserveScroll: true,
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <div className="mb-14 mt-14 w-full overflow-hidden border-2 border-slate-300 bg-white px-6 py-4 shadow-xl sm:max-w-lg sm:rounded-lg">
                <Head title="Daftar Penyedia" />

                <FormTitle title="DAFTAR" />

                <form onSubmit={handleSubmit}>
                    <div>
                        <InputLabel htmlFor="name" value="Nama Perusahaan" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            placeholder="Isi nama perusahaan Anda di sini"
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
                            placeholder="Isi email di sini"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="email_company"
                            value="Email Bisnis"
                        />

                        <TextInput
                            id="email_company"
                            type="email"
                            name="email_company"
                            value={data.email_company}
                            className="mt-1 block w-full"
                            autoComplete="email_company"
                            placeholder="Isi email bisnis di sini"
                            onChange={(e) =>
                                setData('email_company', e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.email_company}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="id_business"
                            value="Nomor Induk Berusaha"
                        />

                        <TextInput
                            id="id_business"
                            name="id_business"
                            value={data.id_business}
                            className="mt-1 block w-full"
                            placeholder="Nomor Induk Berusaha harus resmi"
                            autoComplete="id_business"
                            onChange={(e) =>
                                setData('id_business', e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.id_business}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="description"
                            value="Deskripsi Perusahaan"
                        />

                        <TextAreaInput
                            id="description"
                            type="text"
                            name="description"
                            value={data.description}
                            className="mt-1 block w-full"
                            placeholder="Isi deskripsi perusahaan di sini"
                            autoComplete="description"
                            onChange={(e) =>
                                setData('description', e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.description}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="phone_company"
                            value="Nomor Telepon"
                        />

                        <TextInput
                            id="phone_company"
                            type="text"
                            name="phone_company"
                            value={data.phone_company}
                            className="mt-1 block w-full"
                            autoComplete="phone_company"
                            placeholder="Isi nomor telepon perusahaan di sini"
                            onChange={(e) =>
                                setData('phone_company', e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.phone_company}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="address" value="Alamat" />

                        <TextInput
                            id="address"
                            type="text"
                            name="address"
                            value={data.address}
                            className="mt-1 block w-full"
                            autoComplete="address"
                            placeholder="Isi alamat Anda di sini"
                            onChange={(e) => setData('address', e.target.value)}
                            required
                        />

                        <InputError message={errors.address} className="mt-2" />
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
