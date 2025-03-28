import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type TasksType } from '@/types';
import { Button } from '@headlessui/react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { FormEvent } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tasks',
        href: '/tasks',
    },
];

export default function Tasks() {
    const { tasks } = usePage<TasksType>().props;

    const {delete:destory} = useForm();

    const deleteTask = (e: FormEvent, id: number) => {
        e.preventDefault();
        if(confirm("Are you sure want to remove this task?")){
            destory(route('tasks.destroy',id));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tasks" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex flex-col">
                    <Link
                        href={route('tasks.create')}
                        className="my-2 max-w-max rounded-lg border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-600 transition-colors duration-300 hover:bg-emerald-900/60 hover:text-green-600"
                    >
                        Add New Button
                    </Link>
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="inline-block min-w-full p-1.5 align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                id
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Title
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Body
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                        {tasks.map(({ id, title, body }: TasksType) => (
                                            <tr key={id} className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-800 dark:text-neutral-200">{id}</td>
                                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-800 dark:text-neutral-200">
                                                    {title}
                                                </td>
                                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-800 dark:text-neutral-200">{body}</td>
                                                <td className="px-6 py-4 text-end text-sm font-medium whitespace-nowrap">
                                                    <form onSubmit={(e) => deleteTask(e, id)} className="space-x-5">
                                                        <Link
                                                            href={route('tasks.edit', id)}
                                                            className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 hover:cursor-pointer hover:text-blue-800 focus:text-blue-800 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <Button
                                                            type='submit'
                                                            className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-red-600 hover:cursor-pointer hover:text-red-800 focus:text-red-800 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:text-red-500 dark:hover:text-red-400 dark:focus:text-red-400"
                                                        >
                                                            Delete
                                                        </Button>
                                                    </form>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
