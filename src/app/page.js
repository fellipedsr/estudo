import { Page } from "@/components/page";
import { Suspense } from 'react'


export default function Home() {
    
    return (
        <>
        <h1>Lojas</h1>
        <Suspense fallback={<h1>Carregando..</h1>}>
            <Page />
        </Suspense>
        </>
    )
}