import Link from "next/link";

export function ShowMore(){
    return (
    <div className="flex w-full justify-center pt-10">
        <div className="border-y-2 pt-5 pb-5 text-center w-2/3">
            <Link href="#" className=" font-medium text-blue-600 dark:text-blue-500 hover:underline">Leer más publicaciones</Link>
        </div>
    </div>
    )

}
