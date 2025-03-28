import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { Task, type BreadcrumbItem } from '@/types';
import { Textarea } from '@headlessui/react';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tasks',
        href: '/tasks',
    },
    {
        title: 'Task Create',
        href: '/create',
    },
];

export default function TaskCreate() {
    const { data, setData, errors, post } = useForm<Required<Task>>({
        title: '',
        body: '',
    });
    const submit:FormEventHandler =(e)=>{
        e.preventDefault();
        post(route('tasks.store'));
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Task Create" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex flex-col px-4 py-2">
                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="title">title</Label>

                            <Input
                                id="title"
                                className="mt-1 block w-full"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                required
                                autoComplete="title"
                                placeholder="Title"
                                />

                            <InputError className="mt-2" message={errors.title} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="body">Body</Label>

                            <Textarea
                                id="body"
                                className="mt-1 block w-full"
                                value={data.body}
                                onChange={(e) => setData('body', e.target.value)}
                                required
                                autoComplete="body"
                                placeholder="body"
                            ></Textarea>

                            <InputError className="mt-2" message={errors.body} />
                        </div>

                        <div className="flex items-center gap-4">
                            <Button>Save</Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
