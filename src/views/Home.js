import '../App.css'
import React from 'react'
import { Icon } from 'react-icons-kit'
import { androidArrowDropdown } from 'react-icons-kit/ionicons/androidArrowDropdown'
import { ic_search } from 'react-icons-kit/md/ic_search'
import useGetManifest from '../hooks/useGetManifests'
import useGetListRegistration from '../hooks/useGetListRegistration'
import TableRegistration from '../components/TableRegistration'

function Home() {
    const manifest = useGetManifest()
    const { element } = useGetListRegistration()
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
                        {element ? (
                            <TableRegistration
                                data={element}
                            ></TableRegistration>
                        ) : (
                            <div>loading</div>
                        )}
                    </div>
                </div>
            </div>
            <a
                href="/bloblist"
                className="bg-greenCustom rounded-2xl fixed bottom-0 right-0 m-6 text-white hover:bg-blackCustom"
            >
                <p className="mx-4 my-1">Voeg rapport toe</p>
            </a>
        </>
    )
}

export default Home
