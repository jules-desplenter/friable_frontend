import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './views/errorpage'
import Home from './views/Home'
import BlobList from './views/BlobList'
import NieuwSchaderapport from './views/NieuwSchaderapport'
import NieuwSchaderapportMeerdere from './views/NieuwSchadeRapportMeerder'

import SchadeRapportEditor from './views/SchadeRapportEditor'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/bloblist',
            element: <BlobList />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/nieuwschade/:url',
            element: <NieuwSchaderapport />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/nieuwschademeer',
            element: <NieuwSchaderapportMeerdere />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/schaderapport/:objectid',
            element: <SchadeRapportEditor />,
            errorElement: <ErrorPage />,
        },
    ])

    return (
        <div className="App">
            <div className="bg-white fixed w-full">
                <div className="flex justif-content justify-between items-center mx-6 mt-3 border-b-2 pb-2">
                    <a
                        href="/"
                        className="text-3xl text-gray-700 font-bold group hover:text-greenCustom"
                    >
                        <span className="text-greenCustom group-hover:text-gray-700">
                            FRIABLE
                        </span>{' '}
                        annotation tool
                    </a>
                    <div className="mr-2">
                        <a
                            href="/"
                            className="text-underling cursor-pointer align-center"
                        >
                            Home
                        </a>
                    </div>
                </div>
            </div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
