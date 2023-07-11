import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './views/errorpage'
import Home from './views/Home'
import BlobList from './views/BlobList'
import NieuwSchaderapport from './views/NieuwSchaderapport'
import NieuwSchaderapportMeerdere from './views/NieuwSchadeRapportMeerder'
import FotosToevoegen from './views/FotosToevoegen'

import SchadeRapportEditor from './views/SchadeRapportEditor'
import PdfViewer from './views/PDFViewer'
import { useEffect, useState } from 'react'
import axios from 'axios'

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
        {
            path: '/pdfviewer/:objectid',
            element: <PdfViewer />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/fotosToevoegen/:objectid',
            element: <FotosToevoegen />,
            errorElement: <ErrorPage />,
        },
    ])
    const [token, setToken] = useState(localStorage.getItem('token'))

    useEffect(() => {
        if (token !== null) {
            axios.defaults.headers.common['Authorzation'] = `Bearer ${token}`
        }
    }, [token])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(`Email: ${email}, Password: ${password}`)
        const response = await axios.post('Authentication', {
            userName: email,
            password: password,
        })
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token)
            setToken(response.data.token)
        }
    }

    return (
        <div className="App">
            {token === null ? (
                <div className="flex justify-center items-center h-screen">
                    <form
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        onSubmit={handleSubmit}
                    >
                        <h2 className="text-2xl font-bold mb-6">Login</h2>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="username"
                            >
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div>
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
            )}
        </div>
    )
}

export default App
