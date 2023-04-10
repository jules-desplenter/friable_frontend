import '../App.css'
import React from 'react'
import { Icon } from 'react-icons-kit'
import { androidArrowDropdown } from 'react-icons-kit/ionicons/androidArrowDropdown'
import { ic_search } from 'react-icons-kit/md/ic_search'
import Registratie from '../components/Registratie'
import useGetManifest from '../hooks/useGetManifests'

function Home() {
    const manifest = useGetManifest()
    console.log(manifest)
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="w-1/2">
                    <div className="flex flex-wrap justify-between w-full mt-6 pb-2 border-b-2">
                        <p>schade-annotaties</p>
                        <div>
                            <Icon icon={androidArrowDropdown} />
                            <span>Filter</span>
                        </div>
                        <div>
                            <Icon icon={ic_search} />
                            <span>Zoeken</span>
                        </div>
                    </div>
                    <div>
                        <Registratie></Registratie>
                    </div>
                </div>
            </div>
            <a
                href="/bloblist"
                className="bg-greenCustom rounded-2xl fixed bottom-0 right-0 m-6"
            >
                <p className="mx-4 my-1">Voeg rapport toe</p>
            </a>
        </>
    )
}

export default Home
