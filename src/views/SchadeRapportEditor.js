import '../App.css'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AutomaticForm from '../components/AutomaticForm'
import useUpdateRegistration from '../hooks/useUpdateRegistration'
import useAddRegistration from '../hooks/useAddRegistration'
import useGetRegistration from '../hooks/useGetRegistration'
import MiradorViewer from '../components/MiradorViewer'
import Modal from 'react-modal'

function SchadeRapportEditor() {
    const { objectid } = useParams()
    const [Registratie, setRegistratie] = useState({
        id: objectid,
        name: null,
        function: null,
        reason: null,
        version: 0,
        remarks: null,
        identification: {
            id: uuidv4(),
            invetoryNumber: 0,
            artist: {
                id: uuidv4(),
                surName: null,
                firstName: null,
            },
            titleDutch: null,
            titleFrench: null,
            date: {
                id: uuidv4(),
                text: null,
                location: null,
                media: null,
                value: null,
            },
            signature: {
                id: uuidv4(),
                text: null,
                location: null,
                media: null,
                value: null,
            },
            inscriptions: [],
            collectionMarkAvailable: null,
            collectionMarks: [],
            materials: null,
            techniques: null,
            support: null,
            framed: [null],
            framedSerialized: null,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
        primarySupport: {
            id: uuidv4(),
            based: null,
            material: [null],
            materialSerialized: null,
            paperType1: null,
            paperType2: null,
            paperType3: [null],
            assemblage: null,
            rectoVerso: null,
            watermark: null,
            watermarkDescription: null,
            watermarkLocation: null,
            pinholed: null,
            amount: 0,
            location: null,
            remarksDescription: null,
            generalCondition: null,
            surface: [null],
            surfaceSerialized: null,
            damage: [null],
            damageSerialized: null,
            remarksCondition: null,
            pictorial: {
                id: uuidv4(),
                friableMedia: [null],
                friableMediaSerialized: null,
                fixative: null,
                fixativeIndicators: null,
                otherMedia: [null],
                otherMediaSerialized: null,
                techniques: [null],
                techniquesSerialized: null,
                remarksDescription: null,
                generalCondition: null,
                surface: [null],
                damage: [null],
                damageSerialized: null,
                remarksCondition: null,
            },
        },
        secondarySupport: {
            id: uuidv4(),
            supportAccessible: null,
            based: null,
            material: [null],
            materialSerialized: null,
            paperType1: null,
            paperType2: null,
            paperType3: null,
            assemblage: null,
            rectoVerso: null,
            watermark: null,
            watermarkDescription: null,
            watermarkLocation: null,
            pinholed: null,
            amount: 0,
            location: null,
            remarksDescription: null,
            generalCondition: null,
            surface: [null],
            damage: [null],
            damageSerialized: null,
            remarksCondition: null,
            attachment: null,
            pictorial: {
                id: uuidv4(),
                pictorialAccessible: null,
                friableMedia: [null],
                friableMediaSerialized: null,
                fixative: null,
                fixativeIndicators: null,
                otherMedia: [null],
                otherMediaSerialized: null,
                techniques: [null],
                techniquesSerialized: null,
                remarksDescription: null,
                generalCondition: null,
                surface: [null],
                damage: [null],
                damageSerialized: null,
                remarksCondition: null,
            },
        },
        storage: {
            id: uuidv4(),
            location: null,
            locationNumber: null,
            storageType: null,
            material: [null],
            materialSerialized: null,
            remarks: null,
        },
        mounting: {
            id: uuidv4(),
            nature: [null],
            assemblage: [null],
            generalCondition: null,
            surface: [null],
            damage: [null],
            damageSerialized: null,
            myProperty: null,
            descriptionRemarks: null,
            conditionRemarks: null,
        },
        framing: {
            id: uuidv4(),
            height: 0,
            width: 0,
            depth: 0,
            shape: null,
            damageRelevant: null,
            appertureFrameHeight: 0,
            apertureFrameWidth: 0,
            apretureMountHeight: 0,
            apertureMountWidth: 0,
            maxPaintingDimensionsHeight: 0,
            maxPaintingDimensionsWidth: 0,
            rabbetAccessible: null,
            rabbetHeight: 0,
            rabbetWidth: 0,
            rabbetDepth: 0,
            innerSpacersHeight: 0,
            innerSpacersWidth: 0,
            innerSpacersDepth: 0,
            externalRisingSticksHeight: 0,
            externalRisingSticksWidth: 0,
            externalRisingSticksDepth: 0,
            dimensionRemarks: null,
            mouldingMaterial: null,
            mouldingAssemblage: null,
            raisingSticksMaterial: null,
            raisingSticksAssemblage: null,
            innerSpacers1: [null],
            innerSpacers2: [null],
            backingBoard1: [null],
            backingBoard2: [null],
            sealing: [null],
            hangingSystem: null,
            indicators: null,
            descriptionRemarks: null,
            material: null,
            assemblage: null,
            glazingHeight: 0,
            glazingWidth: 0,
            glazingEstimation: null,
            glazingRemarks: null,
            originalFraming: null,
            historyIndicators: null,
            labelsAmount: 0,
            historyDescription: null,
            surface: [null],
            mechanicalProblems: [null],
            mechanicalProblemsSerialized: null,
            chemicalProblems: [null],
            chemicalProblemsSerialized: null,
            biologicalProblems: [null],
            biologicalProblemsSerialized: null,
            aestheticProblems: [null],
            aestheticProblemsSerialized: null,
        },
    })
    // const [Registratie, setRegistratie] = useState({})

    // useEffect(() => {
    //     const unloadCallback = (event) => {
    //         const e = event || window.event
    //         //console.log(e)
    //         e.preventDefault()
    //         if (e) {
    //             console.log(e.originalEvent)
    //             e.returnValue = 'normaal zou dit hier moeten komen niet?'
    //         }
    //         return ''
    //     }

    //     window.addEventListener('beforeunload', unloadCallback)
    //     return () => {
    //         //cleanup function
    //         window.removeEventListener('beforeunload', unloadCallback)
    //     }
    // }, [])

    window.onbeforeunload = () => {
        return 'testmessage'
    }

    useEffect(() => console.log(Registratie), [Registratie])
    const { loading, error, element } = useGetRegistration(objectid)

    const postRegistration = useAddRegistration()
    const updateRegistration = useUpdateRegistration(objectid)
    const [response, setResponse] = useState()
    const [firstTime, setFirstTime] = useState(true)
    const [submitModal, setSubmitModal] = useState(false)
    useEffect(() => {
        if (
            loading === false &&
            error === null &&
            Object.keys(element).length !== 0
        ) {
            setFirstTime(false)
            setRegistratie(element)
        }
    }, [element, error, loading])

    const handleSubmit = () => {
        if (firstTime) {
            postRegistration(Registratie, setResponse)
        } else {
            updateRegistration(Registratie, setResponse)
        }
    }

    useEffect(() => {
        console.log(response)
        if (response) {
            setSubmitModal(true)
            setFirstTime(false)
            setResponse()
        }
    }, [response])

    //registration section
    const [checkedItemsReason, setCheckedItemsReason] = useState('')
    const [checkedItemsReasonSetted, checkedItemsReasonSetSetted] =
        useState(true)

    useEffect(() => {
        if (checkedItemsReasonSetted) {
            if (
                Registratie.reason !== '' &&
                Registratie.reason !== undefined &&
                Registratie.reason !== null
            ) {
                setCheckedItemsReason(Registratie.reason)
                checkedItemsReasonSetSetted(false)
            }
        }
    }, [Registratie.reason, checkedItemsReasonSetted])

    useEffect(() => {
        Registratie.reason = checkedItemsReason
    }, [checkedItemsReason, Registratie])

    const registrationForm = [
        { label: 'name', name: 'name', type: 'text' },
        { label: 'function', name: 'function', type: 'text' },
        { label: 'date', name: 'date', type: 'date' },
        {
            label: 'reason for reporting',
            name: 'reason',
            type: 'radio',
            options: ['Friable project'],
            checkedItems: checkedItemsReason,
            setCheckedItems: setCheckedItemsReason,
        },
    ]

    const handleRegistrationChange = (event) => {
        const { name, value } = event.target
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            [name]: value,
        }))
    }

    // identification section
    const [checkedItemsSupport, setCheckedItemsSupport] = useState([])
    const [checkedItemsSupportSetted, checkedItemsSupportSetSetted] =
        useState(true)

    useEffect(() => {
        if (checkedItemsSupportSetted) {
            if (
                Registratie.identification.framed.length !== 0 &&
                Registratie.identification.framed.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsSupport(Registratie.identification.framed)
                checkedItemsSupportSetSetted(false)
            }
        }
    }, [Registratie.identification.framed, checkedItemsSupportSetted])

    useEffect(() => {
        Registratie.identification.framed = checkedItemsSupport
    }, [checkedItemsSupport, Registratie.identification])

    const [checkedItemsIdentificationhape, setCheckedItemsIdentificationhape] =
        useState('')
    const [
        checkedItemsIdentificationhapeSetted,
        checkedItemsIdentificationhapeSetSetted,
    ] = useState(true)

    useEffect(() => {
        if (checkedItemsIdentificationhapeSetted) {
            if (
                Registratie.identification.shape !== '' &&
                Registratie.identification.shape !== undefined &&
                Registratie.identification.shape !== null
            ) {
                setCheckedItemsIdentificationhape(
                    Registratie.identification.shape,
                )
                checkedItemsIdentificationhapeSetSetted(false)
            }
        }
    }, [Registratie.identification.shape, checkedItemsIdentificationhapeSetted])

    useEffect(() => {
        Registratie.identification.shape = checkedItemsIdentificationhape
    }, [checkedItemsIdentificationhape, Registratie.identification])

    const IdentificationForm = [
        { label: 'inventory number', name: 'inventoryNumber', type: 'number' },
        { label: 'title dutch', name: 'titleDutch', type: 'text' },
        { label: 'title french', name: 'titleFrench', type: 'text' },
        { label: 'materials', name: 'materials', type: 'text' },
        { label: 'techniques', name: 'techniques', type: 'text' },
        { label: 'support', name: 'support', type: 'text' },
        {
            name: 'framed',
            label: 'framed',
            type: 'checkBox',
            options: ['unframed', 'possibly_previously_framed', 'framed'],
            checkedItems: checkedItemsSupport,
            setCheckedItems: setCheckedItemsSupport,
            refresh: Registratie.identification.framed,
        },
        { label: 'height (mm)', name: 'height', type: 'number' },
        { label: 'width (mm)', name: 'width', type: 'number' },
        {
            label: 'shape',
            name: 'shape',
            type: 'radio',
            options: [
                'Portrait rectangle',
                'Landscape rectangle',
                'Oval',
                'Square',
            ],
            checkedItems: checkedItemsIdentificationhape,
            setCheckedItems: setCheckedItemsIdentificationhape,
        },
    ]

    const handleIdentificationChange = (event) => {
        const { name, value } = event.target
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            identification: {
                ...prevRegistratie.identification,
                [name]: value,
            },
        }))
    }

    // storage section
    const [checkedItemsLocation, setCheckedItemsLocation] = useState('')
    const [checkedItemsLocationSetted, checkedItemsLocationSetSetted] =
        useState(true)
    const [checkedItemsStorageType, setCheckedItemsStorageType] = useState('')
    const [checkedItemsStorageTypesSetted, checkedItemsStorageTypesSetSetted] =
        useState(true)
    const [checkedItemsMaterial, setCheckedItemsMaterial] = useState([])
    const [checkedItemsMaterialSetted, checkedItemsMaterialSetSetted] =
        useState(true)

    useEffect(() => {
        if (checkedItemsLocationSetted) {
            if (
                Registratie.storage.location !== '' &&
                Registratie.storage.location !== undefined &&
                Registratie.storage.location !== null
            ) {
                setCheckedItemsLocation(Registratie.storage.location)
                checkedItemsLocationSetSetted(false)
            }
        }
    }, [Registratie.storage.location, checkedItemsLocationSetted])

    useEffect(() => {
        if (checkedItemsStorageTypesSetted) {
            if (
                Registratie.storage.storageType !== '' &&
                Registratie.storage.storageType !== undefined &&
                Registratie.storage.storageType !== null
            ) {
                setCheckedItemsStorageType(Registratie.storage.storageType)
                checkedItemsStorageTypesSetSetted(false)
            }
        }
    }, [Registratie.storage.storageType, checkedItemsStorageTypesSetted])

    useEffect(() => {
        if (checkedItemsMaterialSetted) {
            if (
                Registratie.storage.material.length !== 0 &&
                Registratie.storage.material.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsMaterial(Registratie.storage.material)
                checkedItemsMaterialSetSetted(false)
            }
        }
    }, [Registratie.storage.material, checkedItemsMaterialSetted])

    useEffect(() => {
        Registratie.storage.location = checkedItemsLocation
    }, [checkedItemsLocation, Registratie.storage])

    useEffect(() => {
        Registratie.storage.storageType = checkedItemsStorageType
    }, [checkedItemsStorageType, Registratie.storage])

    useEffect(() => {
        Registratie.storage.material = checkedItemsMaterial
    }, [checkedItemsMaterial, Registratie.storage])

    const StorageForm = [
        {
            name: 'location',
            label: 'location',
            type: 'radio',
            options: ['MFDS', 'Coffre', 'Reserve-7', 'Reserve-5', 'reserve-19'],
            checkedItems: checkedItemsLocation,
            setCheckedItems: setCheckedItemsLocation,
        },
        { label: 'location number', name: 'locationNumber', type: 'text' },
        {
            label: 'storage type',
            name: 'storageType',
            type: 'radio',
            options: [
                'Folder',
                'Four_flap',
                'box',
                'shelf',
                'grid',
                'exhibition',
            ],
            checkedItems: checkedItemsStorageType,
            setCheckedItems: setCheckedItemsStorageType,
        },
        {
            name: 'materials',
            label: 'material',
            type: 'checkBox',
            options: [
                'Cardboard',
                'Paper',
                'Silk paper',
                'Tape',
                'Kraft_paper',
            ],
            checkedItems: checkedItemsMaterial,
            setCheckedItems: setCheckedItemsMaterial,
        },
        { label: 'remarks', name: 'remarks', type: 'textBox' },
    ]

    const handleStorageChange = (event) => {
        const { name, value } = event.target
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            storage: {
                ...prevRegistratie.storage,
                [name]: value,
            },
        }))
    }

    // primary support section
    const [checkedItemsSupportBased1, setCheckedItemsSupportBased1] =
        useState('')
    const [
        checkedItemsSupportBased1Setted,
        checkedItemsSupportBased1SetSetted,
    ] = useState(true)
    const [checkedItemsSupportMaterial1, setCheckedItemsSupportMaterial1] =
        useState([])
    const [
        checkedItemsSupportMaterial1Setted,
        checkedItemsSupportMaterial1SetSetted,
    ] = useState(true)
    const [checkedItemsSupportPaperType11, setCheckedItemsSupportPaperType11] =
        useState('')
    const [
        checkedItemsSupportPaperType11Setted,
        checkedItemsSupportPaperType11SetSetted,
    ] = useState(true)
    const [checkedItemsSupportPaperType21, setCheckedItemsSupportPaperType21] =
        useState('')
    const [
        checkedItemsSupportPaperType21Setted,
        checkedItemsSupportPaperType21SetSetted,
    ] = useState(true)
    const [checkedItemsSupportPaperType31, setCheckedItemsSupportPaperType31] =
        useState([])
    const [
        checkedItemsSupportPaperType31Setted,
        checkedItemsSupportPaperType31SetSetted,
    ] = useState(true)
    const [checkedItemsAssemblage1, setCheckedItemsAssemblage1] = useState('')
    const [checkedItemsAssemblage1Setted, checkedItemsAssemblage1SetSetted] =
        useState(true)
    const [checkedItemsVerso1, setCheckedItemsVerso1] = useState('')
    const [checkedItemsVerso1Setted, checkedItemsVerso1SetSetted] =
        useState(true)
    const [checkedItemsWatermark1, setCheckedItemsWatermark1] = useState('')
    const [checkedItemsWatermark1Setted, checkedItemsWatermark1SetSetted] =
        useState(true)
    const [checkedItemsPinholes1, setCheckedItemsPinholes1] = useState('')
    const [checkedItemsPinholes1Setted, checkedItemsPinholes1SetSetted] =
        useState(true)
    const [checkedItemsCondition1, setCheckedItemsCondition1] = useState('')
    const [checkedItemsCondition1Setted, checkedItemsCondition1SetSetted] =
        useState(true)
    const [checkedItemsSurface1, setCheckedItemsSurface1] = useState([])
    const [checkedItemsSurface1Setted, checkedItemsSurface1SetSetted] =
        useState(true)
    const [checkedItemsDamage1, setCheckedItemsDamage1] = useState([])
    const [checkedItemsDamage1Setted, checkedItemsDamage1SetSetted] =
        useState(true)

    useEffect(() => {
        if (checkedItemsSupportBased1Setted) {
            if (
                Registratie.primarySupport.based !== '' &&
                Registratie.primarySupport.based !== undefined &&
                Registratie.primarySupport.based !== null
            ) {
                setCheckedItemsSupportBased1(Registratie.primarySupport.based)
                checkedItemsSupportBased1SetSetted(false)
            }
        }
    }, [Registratie.primarySupport.based, checkedItemsSupportBased1Setted])

    useEffect(() => {
        if (checkedItemsSupportMaterial1Setted) {
            if (
                Registratie.primarySupport.material.length !== 0 &&
                Registratie.primarySupport.material.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsSupportMaterial1(
                    Registratie.primarySupport.material,
                )
                checkedItemsSupportMaterial1SetSetted(false)
            }
        }
    }, [
        Registratie.primarySupport.material,
        checkedItemsSupportMaterial1Setted,
    ])

    useEffect(() => {
        if (checkedItemsSupportPaperType11Setted) {
            if (
                Registratie.primarySupport.paperType1 !== '' &&
                Registratie.primarySupport.paperType1 !== undefined &&
                Registratie.primarySupport.paperType1 !== null
            ) {
                setCheckedItemsSupportPaperType11(
                    Registratie.primarySupport.paperType1,
                )
                checkedItemsSupportPaperType11SetSetted(false)
            }
        }
    }, [
        Registratie.primarySupport.paperType1,
        checkedItemsSupportPaperType11Setted,
    ])

    useEffect(() => {
        if (checkedItemsSupportPaperType21Setted) {
            if (
                Registratie.primarySupport.paperType2 !== '' &&
                Registratie.primarySupport.paperType2 !== undefined &&
                Registratie.primarySupport.paperType2 !== null
            ) {
                setCheckedItemsSupportPaperType21(
                    Registratie.primarySupport.paperType2,
                )
                checkedItemsSupportPaperType21SetSetted(false)
            }
        }
    }, [
        Registratie.primarySupport.paperType2,
        checkedItemsSupportPaperType21Setted,
    ])
    useEffect(() => {
        if (checkedItemsSupportPaperType31Setted) {
            if (
                Registratie.primarySupport.surface.length !== 0 &&
                Registratie.primarySupport.surface.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsSupportPaperType31(
                    Registratie.primarySupport.paperType3,
                )
                checkedItemsSupportPaperType31SetSetted(false)
            }
        }
    }, [
        Registratie.primarySupport.paperType3,
        checkedItemsSupportPaperType31Setted,
    ])

    useEffect(() => {
        if (checkedItemsAssemblage1Setted) {
            if (
                Registratie.primarySupport.assemblage !== '' &&
                Registratie.primarySupport.assemblage !== undefined &&
                Registratie.primarySupport.assemblage !== null
            ) {
                setCheckedItemsAssemblage1(
                    Registratie.primarySupport.assemblage,
                )
                checkedItemsAssemblage1SetSetted(false)
            }
        }
    }, [Registratie.primarySupport.assemblage, checkedItemsAssemblage1Setted])

    useEffect(() => {
        if (checkedItemsVerso1Setted) {
            if (
                Registratie.primarySupport.rectoVerso !== '' &&
                Registratie.primarySupport.rectoVerso !== undefined &&
                Registratie.primarySupport.rectoVerso !== null
            ) {
                setCheckedItemsVerso1(Registratie.primarySupport.rectoVerso)
                checkedItemsVerso1SetSetted(false)
            }
        }
    }, [Registratie.primarySupport.rectoVerso, checkedItemsVerso1Setted])

    useEffect(() => {
        if (checkedItemsWatermark1Setted) {
            if (
                Registratie.primarySupport.watermark !== '' &&
                Registratie.primarySupport.watermark !== undefined &&
                Registratie.primarySupport.watermark !== null
            ) {
                setCheckedItemsWatermark1(Registratie.primarySupport.watermark)
                checkedItemsWatermark1SetSetted(false)
            }
        }
    }, [Registratie.primarySupport.watermark, checkedItemsWatermark1Setted])

    useEffect(() => {
        if (checkedItemsPinholes1Setted) {
            if (
                Registratie.primarySupport.pinholed !== '' &&
                Registratie.primarySupport.pinholed !== undefined &&
                Registratie.primarySupport.pinholed !== null
            ) {
                setCheckedItemsPinholes1(Registratie.primarySupport.pinholed)
                checkedItemsPinholes1SetSetted(false)
            }
        }
    }, [Registratie.primarySupport.pinholed, checkedItemsPinholes1Setted])

    useEffect(() => {
        if (checkedItemsCondition1Setted) {
            if (
                Registratie.primarySupport.generalCondition !== '' &&
                Registratie.primarySupport.generalCondition !== undefined &&
                Registratie.primarySupport.generalCondition !== null
            ) {
                setCheckedItemsCondition1(
                    Registratie.primarySupport.generalCondition,
                )
                checkedItemsCondition1SetSetted(false)
            }
        }
    }, [
        Registratie.primarySupport.generalCondition,
        checkedItemsCondition1Setted,
    ])

    useEffect(() => {
        if (checkedItemsSurface1Setted) {
            if (
                Registratie.primarySupport.surface.length !== 0 &&
                Registratie.primarySupport.surface.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsSurface1(Registratie.primarySupport.surface)
                checkedItemsSurface1SetSetted(false)
            }
        }
    }, [Registratie.primarySupport.surface, checkedItemsSurface1Setted])

    useEffect(() => {
        if (checkedItemsDamage1Setted) {
            if (
                Registratie.primarySupport.damage.length !== 0 &&
                Registratie.primarySupport.damage.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsDamage1(Registratie.primarySupport.damage)
                checkedItemsDamage1SetSetted(false)
            }
        }
    }, [Registratie.primarySupport.damage, checkedItemsDamage1Setted])

    useEffect(() => {
        Registratie.primarySupport.based = checkedItemsSupportBased1
    }, [checkedItemsSupportBased1, Registratie.primarySupport])

    useEffect(() => {
        Registratie.primarySupport.material = checkedItemsSupportMaterial1
    }, [checkedItemsSupportMaterial1, Registratie.primarySupport])

    useEffect(() => {
        Registratie.primarySupport.paperType1 = checkedItemsSupportPaperType11
    }, [checkedItemsSupportPaperType11, Registratie.primarySupport])
    useEffect(() => {
        Registratie.primarySupport.paperType2 = checkedItemsSupportPaperType21
    }, [checkedItemsSupportPaperType21, Registratie.primarySupport])
    useEffect(() => {
        Registratie.primarySupport.paperType3 = checkedItemsSupportPaperType31
    }, [checkedItemsSupportPaperType31, Registratie.primarySupport])
    useEffect(() => {
        Registratie.primarySupport.assemblage = checkedItemsAssemblage1
    }, [checkedItemsAssemblage1, Registratie.primarySupport])
    useEffect(() => {
        Registratie.primarySupport.rectoVerso = checkedItemsVerso1
    }, [checkedItemsVerso1, Registratie.primarySupport])
    useEffect(() => {
        Registratie.primarySupport.watermark = checkedItemsWatermark1
    }, [checkedItemsWatermark1, Registratie.primarySupport])
    useEffect(() => {
        Registratie.primarySupport.pinholed = checkedItemsPinholes1
    }, [checkedItemsPinholes1, Registratie.primarySupport])
    useEffect(() => {
        Registratie.primarySupport.generalCondition = checkedItemsCondition1
    }, [checkedItemsCondition1, Registratie.primarySupport])
    useEffect(() => {
        Registratie.primarySupport.surface = checkedItemsSurface1
    }, [checkedItemsSurface1, Registratie.primarySupport])
    useEffect(() => {
        Registratie.primarySupport.damage = checkedItemsDamage1
    }, [checkedItemsDamage1, Registratie.primarySupport])

    useEffect(() => {
        console.log(Registratie)
    }, [Registratie])

    const PrimarySupportForm = [
        {
            label: 'based',
            name: 'based',
            type: 'radio',
            options: [
                'Based on previous description',
                'Based on visual analysis',
            ],
            checkedItems: checkedItemsSupportBased1,
            setCheckedItems: setCheckedItemsSupportBased1,
        },
        {
            label: 'materials',
            name: 'material',
            type: 'checkBox',
            options: ['Canvas', 'Cardboard', 'Linen', 'Paper', 'Parchment'],
            checkedItems: checkedItemsSupportMaterial1,
            setCheckedItems: setCheckedItemsSupportMaterial1,
        },
        {
            label: 'paper type 1',
            name: 'paperType1',
            type: 'radio',
            options: [
                'Laid_paper',
                'Prepared_paper',
                'Wove_paper',
                'Variegated_paper',
            ],
            checkedItems: checkedItemsSupportPaperType11,
            setCheckedItems: setCheckedItemsSupportPaperType11,
        },
        {
            label: 'paper type 2',
            name: 'paperType2',
            type: 'radio',
            options: ['Unknown', 'Thick', 'Medium', 'Thin'],
            checkedItems: checkedItemsSupportPaperType21,
            setCheckedItems: setCheckedItemsSupportPaperType21,
        },
        {
            label: 'paper type 3',
            name: 'paperType3',
            type: 'checkBox',
            options: ['Rough', 'Matt', 'Glossy', 'Satin'],
            checkedItems: checkedItemsSupportPaperType31,
            setCheckedItems: setCheckedItemsSupportPaperType31,
        },
        {
            label: 'assemblage',
            name: 'assemblage',
            type: 'radio',
            options: ['One_piece', 'Multiple_pieces'],
            checkedItems: checkedItemsAssemblage1,
            setCheckedItems: setCheckedItemsAssemblage1,
        },
        {
            label: 'verso',
            name: 'rectoVerso',
            type: 'radio',
            options: ['None', 'Not accessible', 'Accessible'],
            checkedItems: checkedItemsVerso1,
            setCheckedItems: setCheckedItemsVerso1,
        },
        {
            label: 'watermark',
            name: 'watermark',
            type: 'radio',
            options: ['None', 'Not accessible', 'Accessible'],
            checkedItems: checkedItemsWatermark1,
            setCheckedItems: setCheckedItemsWatermark1,
        },
        {
            label: 'watermark description',
            name: 'watermarkDescription',
            type: 'text',
        },
        {
            label: 'watermark location',
            name: 'watermarkLocation',
            type: 'text',
        },
        {
            label: 'pinholes',
            name: 'pinholes',
            type: 'radio',
            options: ['None', 'Not accessible'],
            checkedItems: checkedItemsPinholes1,
            setCheckedItems: setCheckedItemsPinholes1,
        },
        {
            label: 'pinholes amount',
            name: 'pinholesDescription',
            type: 'text',
        },
        {
            label: 'pinholes location',
            name: 'pinholesLocation',
            type: 'text',
        },
        {
            label: 'remarks',
            name: 'remarksDescription',
            type: 'textBox',
        },
        {
            label: 'general condition',
            name: 'generalCondition',
            type: 'radio',
            options: ['Good_condition', 'Average_condition', 'Bad_condition'],
            checkedItems: checkedItemsCondition1,
            setCheckedItems: setCheckedItemsCondition1,
        },
        {
            label: 'surface',
            name: 'surface',
            type: 'checkBox',
            options: ['Dust', 'Dirt', 'Appears_clean'],
            checkedItems: checkedItemsSurface1,
            setCheckedItems: setCheckedItemsSurface1,
        },
        {
            label: 'damage',
            name: 'damage',
            type: 'checkBox',
            options: [
                'No_damage',
                'Abrasion',
                'Cut',
                'Deformation',
                'Discoloration',
                'Fold',
                'Former_treatment',
                'Mold',
                'Insect_damage',
                'Scratch',
                'Staining',
                'Rust',
                'Water_damage',
                'Wrinkling',
                'Tear',
                'Yellowing',
                'Dent',
                'Loss',
                'Mold_active',
                'Mold_non-active',
                'Insect_damage_active',
                'Insect_damage_non-active',
                'Foxing',
                'Hole',
            ],
            checkedItems: checkedItemsDamage1,
            setCheckedItems: setCheckedItemsDamage1,
        },
        {
            label: 'remarks',
            name: 'remarksCondition',
            type: 'textBox',
        },
    ]

    const handlePrimarySupportChange = (event) => {
        const { name, value } = event.target
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            primarySupport: {
                ...prevRegistratie.primarySupport,
                [name]: value,
            },
        }))
    }

    // secondary support section
    const [checkedItemsSupportAccessible2, setCheckedItemsSupportAccessible2] =
        useState('')
    const [
        checkedItemsSupportAccessible2Setted,
        checkedItemsSupportAccessible2SetSetted,
    ] = useState(true)
    const [checkedItemsSupportBased2, setCheckedItemsSupportBased2] =
        useState('')
    const [
        checkedItemsSupportBased2Setted,
        checkedItemsSupportBased2SetSetted,
    ] = useState(true)
    const [checkedItemsSupportMaterial2, setCheckedItemsSupportMaterial2] =
        useState([])
    const [
        checkedItemsSupportMaterial2Setted,
        checkedItemsSupportMaterial2SetSetted,
    ] = useState(true)
    const [checkedItemsSupportPaperType12, setCheckedItemsSupportPaperType12] =
        useState('')
    const [
        checkedItemsSupportPaperType12Setted,
        checkedItemsSupportPaperType12SetSetted,
    ] = useState(true)
    const [checkedItemsSupportPaperType22, setCheckedItemsSupportPaperType22] =
        useState('')
    const [
        checkedItemsSupportPaperType22Setted,
        checkedItemsSupportPaperType22SetSetted,
    ] = useState(true)
    const [checkedItemsSupportPaperType32, setCheckedItemsSupportPaperType32] =
        useState([])
    const [
        checkedItemsSupportPaperType32Setted,
        checkedItemsSupportPaperType32SetSetted,
    ] = useState(true)
    const [checkedItemsAssemblage2, setCheckedItemsAssemblage2] = useState('')
    const [checkedItemsAssemblage2Setted, checkedItemsAssemblage2SetSetted] =
        useState(true)
    const [checkedItemsVerso2, setCheckedItemsVerso2] = useState('')
    const [checkedItemsVerso2Setted, checkedItemsVerso2SetSetted] =
        useState(true)
    const [checkedItemsWatermark2, setCheckedItemsWatermark2] = useState('')
    const [checkedItemsWatermark2Setted, checkedItemsWatermark2SetSetted] =
        useState(true)
    const [checkedItemsPinholes2, setCheckedItemsPinholes2] = useState('')
    const [checkedItemsPinholes2Setted, checkedItemsPinholes2SetSetted] =
        useState(true)
    const [checkedItemsCondition2, setCheckedItemsCondition2] = useState('')
    const [checkedItemsCondition2Setted, checkedItemsCondition2SetSetted] =
        useState(true)
    const [checkedItemsSurface2, setCheckedItemsSurface2] = useState([])
    const [checkedItemsSurface2Setted, checkedItemsSurface2SetSetted] =
        useState(true)
    const [checkedItemsDamage2, setCheckedItemsDamage2] = useState([])
    const [checkedItemsDamage2Setted, checkedItemsDamage2SetSetted] =
        useState(true)

    useEffect(() => {
        if (checkedItemsSupportAccessible2Setted) {
            if (
                Registratie.secondarySupport.supportAccessible !== '' &&
                Registratie.secondarySupport.supportAccessible !== undefined &&
                Registratie.secondarySupport.supportAccessible !== null
            ) {
                setCheckedItemsSupportAccessible2(
                    Registratie.secondarySupport.supportAccessible,
                )
                checkedItemsSupportAccessible2SetSetted(false)
            }
        }
    }, [
        Registratie.secondarySupport.supportAccessible,
        checkedItemsSupportAccessible2Setted,
    ])

    useEffect(() => {
        if (checkedItemsSupportBased2Setted) {
            if (
                Registratie.secondarySupport.based !== '' &&
                Registratie.secondarySupport.based !== undefined &&
                Registratie.secondarySupport.based !== null
            ) {
                setCheckedItemsSupportBased2(Registratie.secondarySupport.based)
                checkedItemsSupportBased2SetSetted(false)
            }
        }
    }, [Registratie.secondarySupport.based, checkedItemsSupportBased2Setted])
    useEffect(() => {
        if (checkedItemsSupportMaterial2Setted) {
            if (
                Registratie.secondarySupport.material.length !== 0 &&
                Registratie.secondarySupport.material.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsSupportMaterial2(
                    Registratie.secondarySupport.material,
                )
                checkedItemsSupportMaterial2SetSetted(false)
            }
        }
    }, [
        Registratie.secondarySupport.material,
        checkedItemsSupportMaterial2Setted,
    ])

    useEffect(() => {
        if (checkedItemsSupportPaperType12Setted) {
            if (
                Registratie.secondarySupport.paperType1 !== '' &&
                Registratie.secondarySupport.paperType1 !== undefined &&
                Registratie.secondarySupport.paperType1 !== null
            ) {
                setCheckedItemsSupportPaperType12(
                    Registratie.secondarySupport.paperType1,
                )
                checkedItemsSupportPaperType12SetSetted(false)
            }
        }
    }, [
        Registratie.secondarySupport.paperType1,
        checkedItemsSupportPaperType12Setted,
    ])

    useEffect(() => {
        if (checkedItemsSupportPaperType22Setted) {
            if (
                Registratie.secondarySupport.paperType2 !== '' &&
                Registratie.secondarySupport.paperType2 !== undefined &&
                Registratie.secondarySupport.paperType2 !== null
            ) {
                setCheckedItemsSupportPaperType22(
                    Registratie.secondarySupport.paperType2,
                )
                checkedItemsSupportPaperType22SetSetted(false)
            }
        }
    }, [
        Registratie.secondarySupport.paperType2,
        checkedItemsSupportPaperType22Setted,
    ])
    useEffect(() => {
        if (checkedItemsSupportPaperType32Setted) {
            if (
                Registratie.primarySupport.surface.length !== 0 &&
                Registratie.primarySupport.surface.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsSupportPaperType32(
                    Registratie.secondarySupport.paperType3,
                )
                checkedItemsSupportPaperType32SetSetted(false)
            }
        }
    }, [
        Registratie.secondarySupport.paperType3,
        checkedItemsSupportPaperType32Setted,
    ])

    useEffect(() => {
        if (checkedItemsAssemblage2Setted) {
            if (
                Registratie.secondarySupport.assemblage !== '' &&
                Registratie.secondarySupport.assemblage !== undefined &&
                Registratie.secondarySupport.assemblage !== null
            ) {
                setCheckedItemsAssemblage2(
                    Registratie.secondarySupport.assemblage,
                )
                checkedItemsAssemblage2SetSetted(false)
            }
        }
    }, [Registratie.secondarySupport.assemblage, checkedItemsAssemblage2Setted])

    useEffect(() => {
        if (checkedItemsVerso2Setted) {
            if (
                Registratie.secondarySupport.rectoVerso !== '' &&
                Registratie.secondarySupport.rectoVerso !== undefined &&
                Registratie.secondarySupport.rectoVerso !== null
            ) {
                setCheckedItemsVerso2(Registratie.secondarySupport.rectoVerso)
                checkedItemsVerso2SetSetted(false)
            }
        }
    }, [Registratie.secondarySupport.rectoVerso, checkedItemsVerso2Setted])

    useEffect(() => {
        if (checkedItemsWatermark2Setted) {
            if (
                Registratie.secondarySupport.watermark !== '' &&
                Registratie.secondarySupport.watermark !== undefined &&
                Registratie.secondarySupport.watermark !== null
            ) {
                setCheckedItemsWatermark2(
                    Registratie.secondarySupport.watermark,
                )
                checkedItemsWatermark2SetSetted(false)
            }
        }
    }, [Registratie.secondarySupport.watermark, checkedItemsWatermark2Setted])

    useEffect(() => {
        if (checkedItemsPinholes2Setted) {
            if (
                Registratie.secondarySupport.pinholed !== '' &&
                Registratie.secondarySupport.pinholed !== undefined &&
                Registratie.secondarySupport.pinholed !== null
            ) {
                setCheckedItemsPinholes2(Registratie.secondarySupport.pinholed)
                checkedItemsPinholes2SetSetted(false)
            }
        }
    }, [Registratie.secondarySupport.pinholed, checkedItemsPinholes2Setted])

    useEffect(() => {
        if (checkedItemsCondition2Setted) {
            if (
                Registratie.secondarySupport.generalCondition !== '' &&
                Registratie.secondarySupport.generalCondition !== undefined &&
                Registratie.secondarySupport.generalCondition !== null
            ) {
                setCheckedItemsCondition2(
                    Registratie.secondarySupport.generalCondition,
                )
                checkedItemsCondition2SetSetted(false)
            }
        }
    }, [
        Registratie.secondarySupport.generalCondition,
        checkedItemsCondition2Setted,
    ])

    useEffect(() => {
        if (checkedItemsSurface2Setted) {
            if (
                Registratie.secondarySupport.surface.length !== 0 &&
                Registratie.secondarySupport.surface.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsSurface2(Registratie.secondarySupport.surface)
                checkedItemsSurface2SetSetted(false)
            }
        }
    }, [Registratie.secondarySupport.surface, checkedItemsSurface2Setted])

    useEffect(() => {
        if (checkedItemsDamage2Setted) {
            if (
                Registratie.secondarySupport.damage.length !== 0 &&
                Registratie.secondarySupport.damage.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsDamage2(Registratie.secondarySupport.damage)
                checkedItemsDamage2SetSetted(false)
            }
        }
    }, [Registratie.secondarySupport.damage, checkedItemsDamage2Setted])

    useEffect(() => {
        Registratie.secondarySupport.supportAccessible =
            checkedItemsSupportAccessible2
    }, [checkedItemsSupportAccessible2, Registratie.secondarySupport])

    useEffect(() => {
        Registratie.secondarySupport.based = checkedItemsSupportBased2
    }, [checkedItemsSupportBased2, Registratie.secondarySupport])

    useEffect(() => {
        Registratie.secondarySupport.material = checkedItemsSupportMaterial2
    }, [checkedItemsSupportMaterial2, Registratie.secondarySupport])

    useEffect(() => {
        Registratie.secondarySupport.paperType1 = checkedItemsSupportPaperType12
    }, [checkedItemsSupportPaperType12, Registratie.secondarySupport])
    useEffect(() => {
        Registratie.secondarySupport.paperType2 = checkedItemsSupportPaperType22
    }, [checkedItemsSupportPaperType22, Registratie.secondarySupport])
    useEffect(() => {
        Registratie.secondarySupport.paperType3 = checkedItemsSupportPaperType32
    }, [checkedItemsSupportPaperType32, Registratie.secondarySupport])
    useEffect(() => {
        Registratie.secondarySupport.assemblage = checkedItemsAssemblage2
    }, [checkedItemsAssemblage2, Registratie.secondarySupport])
    useEffect(() => {
        Registratie.secondarySupport.rectoVerso = checkedItemsVerso2
    }, [checkedItemsVerso2, Registratie.secondarySupport])
    useEffect(() => {
        Registratie.secondarySupport.watermark = checkedItemsWatermark2
    }, [checkedItemsWatermark2, Registratie.secondarySupport])
    useEffect(() => {
        Registratie.secondarySupport.pinholed = checkedItemsPinholes2
    }, [checkedItemsPinholes2, Registratie.secondarySupport])
    useEffect(() => {
        Registratie.secondarySupport.generalCondition = checkedItemsCondition2
    }, [checkedItemsCondition2, Registratie.secondarySupport])
    useEffect(() => {
        Registratie.secondarySupport.surface = checkedItemsSurface2
    }, [checkedItemsSurface2, Registratie.secondarySupport])
    useEffect(() => {
        Registratie.secondarySupport.damage = checkedItemsDamage2
    }, [checkedItemsDamage2, Registratie.secondarySupport])

    const [checkedItemsAttachment, setCheckedItemsAttachment] = useState('')
    const [checkedItemsAttachmentSetted, checkedItemsAttachmentSetSetted] =
        useState(true)

    useEffect(() => {
        if (checkedItemsAttachmentSetted) {
            if (
                Registratie.secondarySupport.attachment !== '' &&
                Registratie.secondarySupport.attachment !== undefined &&
                Registratie.secondarySupport.attachment !== null
            ) {
                setCheckedItemsAttachment(
                    Registratie.secondarySupport.attachment,
                )
                checkedItemsAttachmentSetSetted(false)
            }
        }
    }, [Registratie.secondarySupport.attachment, checkedItemsAttachmentSetted])

    useEffect(() => {
        Registratie.secondarySupport.attachment = checkedItemsAttachment
    }, [checkedItemsAttachment, Registratie.secondarySupport])

    const SecondartSupportForm = [
        {
            label: 'support',
            name: 'supportAccessible',
            type: 'radio',
            options: ['Not accessible/unknown', 'No secondary support'],
            checkedItems: checkedItemsSupportAccessible2,
            setCheckedItems: setCheckedItemsSupportAccessible2,
        },
        {
            label: 'based',
            name: 'based',
            type: 'radio',
            options: [
                'Based on previous description',
                'Based on visual analysis',
            ],
            checkedItems: checkedItemsSupportBased2,
            setCheckedItems: setCheckedItemsSupportBased2,
        },
        {
            label: 'materials',
            name: 'material',
            type: 'checkBox',
            options: ['Canvas', 'Cardboard', 'Linen', 'Paper', 'Parchment'],
            checkedItems: checkedItemsSupportMaterial2,
            setCheckedItems: setCheckedItemsSupportMaterial2,
        },
        {
            label: 'paper type 1',
            name: 'paperType1',
            type: 'radio',
            options: [
                'Laid_paper',
                'Prepared_paper',
                'Wove_paper',
                'Variegated_paper',
            ],
            checkedItems: checkedItemsSupportPaperType12,
            setCheckedItems: setCheckedItemsSupportPaperType12,
        },
        {
            label: 'paper type 2',
            name: 'paperType2',
            type: 'radio',
            options: ['Unknown', 'Thick', 'Medium', 'Thin'],
            checkedItems: checkedItemsSupportPaperType22,
            setCheckedItems: setCheckedItemsSupportPaperType22,
        },
        {
            label: 'paper type 3',
            name: 'paperType3',
            type: 'checkBox',
            options: ['Rough', 'Matt', 'Glossy', 'Satin'],
            checkedItems: checkedItemsSupportPaperType32,
            setCheckedItems: setCheckedItemsSupportPaperType32,
        },
        {
            label: 'assemblage',
            name: 'assemblage',
            type: 'radio',
            options: ['One_piece', 'Multiple_pieces'],
            checkedItems: checkedItemsAssemblage2,
            setCheckedItems: setCheckedItemsAssemblage2,
        },
        {
            label: 'verso',
            name: 'rectoVerso',
            type: 'radio',
            options: ['None', 'Not accessible'],
            checkedItems: checkedItemsVerso2,
            setCheckedItems: setCheckedItemsVerso2,
        },
        {
            label: 'Attachment to primary support',
            name: 'attachment',
            type: 'radio',
            options: ['Partly glued', 'Fully glued'],
            checkedItems: checkedItemsAttachment,
            setCheckedItems: setCheckedItemsAttachment,
        },
        {
            label: 'watermark',
            name: 'watermark',
            type: 'radio',
            options: ['None', 'Not accessible'],
            checkedItems: checkedItemsWatermark2,
            setCheckedItems: setCheckedItemsWatermark2,
        },
        {
            label: 'watermark description',
            name: 'watermarkDescription',
            type: 'text',
        },
        {
            label: 'watermark location',
            name: 'watermarkLocation',
            type: 'text',
        },
        {
            label: 'pinholes',
            name: 'pinholes',
            type: 'radio',
            options: ['None', 'Not accessible'],
            checkedItems: checkedItemsPinholes2,
            setCheckedItems: setCheckedItemsPinholes2,
        },
        {
            label: 'pinholes description',
            name: 'pinholesDescription',
            type: 'text',
        },
        {
            label: 'pinholes location',
            name: 'pinholesLocation',
            type: 'text',
        },
        {
            label: 'remarks',
            name: 'remarksDescription',
            type: 'textBox',
        },
        {
            label: 'general condition',
            name: 'generalCondition',
            type: 'radio',
            options: ['Good_condition', 'Average_condition', 'Bad_condition'],
            checkedItems: checkedItemsCondition2,
            setCheckedItems: setCheckedItemsCondition2,
        },
        {
            label: 'surface',
            name: 'surface',
            type: 'checkBox',
            options: ['Dust', 'Dirt', 'Appears_clean'],
            checkedItems: checkedItemsSurface2,
            setCheckedItems: setCheckedItemsSurface2,
        },
        {
            label: 'damage',
            name: 'damage',
            type: 'checkBox',
            options: [
                'No_damage',
                'Abrasion',
                'Cut',
                'Deformation',
                'Discoloration',
                'Fold',
                'Former_treatment',
                'Mold',
                'Insect_damage',
                'Scratch',
                'Staining',
                'Rust',
                'Water_damage',
                'Wrinkling',
                'Tear',
                'Yellowing',
                'Dent',
                'Loss',
                'Mold_active',
                'Mold_non-active',
                'Insect_damage_active',
                'Insect_damage_non-active',
                'Foxing',
                'Hole',
            ],
            checkedItems: checkedItemsDamage2,
            setCheckedItems: setCheckedItemsDamage2,
        },
        {
            label: 'remarks',
            name: 'remarksCondition',
            type: 'textBox',
        },
    ]

    const handleSecondarySupportChange = (event) => {
        const { name, value } = event.target
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            secondarySupport: {
                ...prevRegistratie.secondarySupport,
                [name]: value,
            },
        }))
    }

    // first pictorial section
    const [checkedPictorialMedia1, setCheckedPictorialMedia1] = useState([])
    const [
        checkedItemsPictorialMedia1Setted,
        checkedItemsPictorialMedia1SetSetted,
    ] = useState(true)
    const [checkedPictorialFixative1, setCheckedPictorialFixative1] =
        useState('')
    const [
        checkedItemsPictorialFixative1Setted,
        checkedItemsPictorialFixative1SetSetted,
    ] = useState(true)
    const [checkedPictorialOtherMedia1, setCheckedPictorialOtherMedia1] =
        useState([])
    const [
        checkedItemsPictorialOtherMedia1Setted,
        checkedItemsPictorialOtherMedia1SetSetted,
    ] = useState(true)
    const [checkedPictorialTechnique1, setCheckedPictorialTechnique1] =
        useState([])
    const [
        checkedItemsPictorialTechnique1Setted,
        checkedItemsPictorialTechnique1SetSetted,
    ] = useState(true)
    const [checkedPictorialCondition1, setCheckedPictorialCondition1] =
        useState('')
    const [
        checkedItemsPictorialCondition1Setted,
        checkedItemsPictorialCondition1SetSetted,
    ] = useState(true)
    const [checkedPictorialSurface1, setCheckedPictorialSurface1] = useState([])
    const [
        checkedItemsPictorialSurface1Setted,
        checkedItemsPictorialSurface1SetSetted,
    ] = useState(true)
    const [checkedPictorialDamage1, setCheckedPictorialDamage1] = useState([])
    const [
        checkedItemsPictorialDamage1Setted,
        checkedItemsPictorialDamage1SetSetted,
    ] = useState(true)

    useEffect(() => {
        if (checkedItemsPictorialMedia1Setted) {
            if (
                Registratie.primarySupport.pictorial.friableMedia.length !==
                    0 &&
                Registratie.primarySupport.pictorial.friableMedia.every(
                    function (v) {
                        return v === null
                    },
                ) !== true
            ) {
                setCheckedPictorialMedia1(
                    Registratie.primarySupport.pictorial.friableMedia,
                )
                checkedItemsPictorialMedia1SetSetted(false)
            }
        }
    }, [
        Registratie.primarySupport.pictorial.friableMedia,
        checkedItemsPictorialMedia1Setted,
    ])

    useEffect(() => {
        if (checkedItemsPictorialFixative1Setted) {
            if (
                Registratie.primarySupport.pictorial.fixative !== '' &&
                Registratie.primarySupport.pictorial.fixative !== undefined &&
                Registratie.primarySupport.pictorial.fixative !== null
            ) {
                setCheckedPictorialFixative1(
                    Registratie.primarySupport.pictorial.fixative,
                )
                checkedItemsPictorialFixative1SetSetted(false)
            }
        }
    }, [
        Registratie.primarySupport.pictorial.fixative,
        checkedItemsPictorialFixative1Setted,
    ])

    useEffect(() => {
        if (checkedItemsPictorialOtherMedia1Setted) {
            if (
                Registratie.primarySupport.pictorial.otherMedia.length !== 0 &&
                Registratie.primarySupport.pictorial.otherMedia.every(function (
                    v,
                ) {
                    return v === null
                }) !== true
            ) {
                setCheckedPictorialOtherMedia1(
                    Registratie.primarySupport.pictorial.otherMedia,
                )
                checkedItemsPictorialOtherMedia1SetSetted(false)
            }
        }
    }, [
        Registratie.primarySupport.pictorial.otherMedia,
        checkedItemsPictorialOtherMedia1Setted,
    ])

    useEffect(() => {
        if (checkedItemsPictorialTechnique1Setted) {
            if (
                Registratie.primarySupport.pictorial.techniques.length !== 0 &&
                Registratie.primarySupport.pictorial.techniques.every(function (
                    v,
                ) {
                    return v === null
                }) !== true
            ) {
                setCheckedPictorialTechnique1(
                    Registratie.primarySupport.pictorial.techniques,
                )
                checkedItemsPictorialTechnique1SetSetted(false)
            }
        }
    }, [
        Registratie.primarySupport.pictorial.techniques,
        checkedItemsPictorialTechnique1Setted,
    ])

    useEffect(() => {
        if (checkedItemsPictorialCondition1Setted) {
            if (
                Registratie.primarySupport.pictorial.generalCondition !== '' &&
                Registratie.primarySupport.pictorial.generalCondition !==
                    undefined &&
                Registratie.primarySupport.pictorial.generalCondition !== null
            ) {
                setCheckedPictorialCondition1(
                    Registratie.primarySupport.pictorial.generalCondition,
                )
                checkedItemsPictorialCondition1SetSetted(false)
            }
        }
    }, [
        Registratie.primarySupport.pictorial.generalCondition,
        checkedItemsPictorialCondition1Setted,
    ])

    useEffect(() => {
        if (checkedItemsPictorialSurface1Setted) {
            if (
                Registratie.primarySupport.pictorial.surface.length !== 0 &&
                Registratie.primarySupport.pictorial.surface.every(function (
                    v,
                ) {
                    return v === null
                }) !== true
            ) {
                setCheckedPictorialSurface1(
                    Registratie.primarySupport.pictorial.surface,
                )
                checkedItemsPictorialSurface1SetSetted(false)
            }
        }
    }, [
        Registratie.primarySupport.pictorial.surface,
        checkedItemsPictorialSurface1Setted,
    ])

    useEffect(() => {
        if (checkedItemsPictorialDamage1Setted) {
            if (
                Registratie.primarySupport.pictorial.damage.length !== 0 &&
                Registratie.primarySupport.pictorial.damage.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedPictorialDamage1(
                    Registratie.primarySupport.pictorial.damage,
                )
                checkedItemsPictorialDamage1SetSetted(false)
            }
        }
    }, [
        Registratie.primarySupport.pictorial.damage,
        checkedItemsPictorialDamage1Setted,
    ])

    useEffect(() => {
        Registratie.primarySupport.pictorial.friableMedia =
            checkedPictorialMedia1
    }, [checkedPictorialMedia1, Registratie.primarySupport.pictorial])

    useEffect(() => {
        Registratie.primarySupport.pictorial.fixative =
            checkedPictorialFixative1
    }, [checkedPictorialFixative1, Registratie.primarySupport.pictorial])

    useEffect(() => {
        Registratie.primarySupport.pictorial.otherMedia =
            checkedPictorialOtherMedia1
    }, [checkedPictorialOtherMedia1, Registratie.primarySupport.pictorial])

    useEffect(() => {
        Registratie.primarySupport.pictorial.techniques =
            checkedPictorialTechnique1
    }, [checkedPictorialTechnique1, Registratie.primarySupport.pictorial])

    useEffect(() => {
        Registratie.primarySupport.pictorial.generalCondition =
            checkedPictorialCondition1
    }, [checkedPictorialCondition1, Registratie.primarySupport.pictorial])

    useEffect(() => {
        Registratie.primarySupport.pictorial.surface = checkedPictorialSurface1
    }, [checkedPictorialSurface1, Registratie.primarySupport.pictorial])

    useEffect(() => {
        Registratie.primarySupport.pictorial.damage = checkedPictorialDamage1
    }, [checkedPictorialDamage1, Registratie.primarySupport.pictorial])

    const FirstPictorialForm = [
        {
            label: 'friable media',
            name: 'friableMedia',
            type: 'checkBox',
            options: ['Chalk', 'Black dry medium', 'Charcoal', 'Pastel'],
            checkedItems: checkedPictorialMedia1,
            setCheckedItems: setCheckedPictorialMedia1,
        },
        {
            label: 'fixative',
            name: 'fixative',
            type: 'radio',
            options: ['Probably_yes', 'Probably_not', 'Yes', 'No', 'Unclear'],
            checkedItems: checkedPictorialFixative1,
            setCheckedItems: setCheckedPictorialFixative1,
        },
        {
            label: 'fixative indicators',
            name: 'fixativeIndicators',
            type: 'text',
        },
        {
            label: 'other media',
            name: 'otherMedia',
            type: 'checkBox',
            options: [
                'Ballpoint_pen',
                'Bistre',
                'Colored_pencil',
                'Gouache',
                'Graphite_pencil',
                'Ink',
                'Marker',
                'Oil_paint',
                'Sepia',
                'Tempera',
                'Watercolor',
            ],
            checkedItems: checkedPictorialOtherMedia1,
            setCheckedItems: setCheckedPictorialOtherMedia1,
        },
        {
            label: 'techniques',
            name: 'techniques',
            type: 'checkBox',
            options: [
                'Blending',
                'Drawing',
                'Erasing',
                'Incising',
                'Layering',
                'Scraping',
                'Scratching',
                'Smudging',
                'Squaring',
                'Stumping',
                'Wet_brush',
                'Wash',
            ],
            checkedItems: checkedPictorialTechnique1,
            setCheckedItems: setCheckedPictorialTechnique1,
        },
        { label: 'remarks', name: 'remarksDescription', type: 'textBox' },
        {
            label: 'general condition',
            name: 'generalCondition',
            type: 'radio',
            options: ['Good_condition', 'Average_condition', 'Bad_condition'],
            checkedItems: checkedPictorialCondition1,
            setCheckedItems: setCheckedPictorialCondition1,
        },
        {
            label: 'surface',
            name: 'surface',
            type: 'checkBox',
            options: ['Dust', 'Dirt', 'Appears_clean'],
            checkedItems: checkedPictorialSurface1,
            setCheckedItems: setCheckedPictorialSurface1,
        },
        {
            label: 'damage',
            name: 'damage',
            type: 'checkBox',
            options: [
                'No_damage',
                'Abrasion',
                'Bleeding',
                'Blister',
                'Bulge',
                'Cleavage',
                'Cut',
                'Deformation',
                'Discoloration',
                'Fingerprint',
                'Flaking',
                'Fold',
                'Former_treatment',
                'Insect_damage',
                'Insect_damage_active',
                'Insect_damage_non-active',
                'Lifting',
                'Mold',
                'Mold_active',
                'Mold_non-active',
                'Loss',
                'Rust',
                'Scratch',
                'Smudging',
                'Staining',
                'Tear',
                'Transfer',
                'Water_damage',
                'Wrinkling',
                'Yellowing',
            ],
            checkedItems: checkedPictorialDamage1,
            setCheckedItems: setCheckedPictorialDamage1,
        },
        { label: 'remarks', name: 'remarksCondition', type: 'textBox' },
    ]

    const handleFirstPictorailChange = (event) => {
        const { name, value } = event.target
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            primarySupport: {
                ...prevRegistratie.primarySupport,
                pictorial: {
                    ...prevRegistratie.primarySupport.pictorial,
                    [name]: value,
                },
            },
        }))
    }

    // second pictorial section
    const [checkedPictorialAccessible2, setCheckedPictorialAccessible2] =
        useState('')
    const [
        checkedItemsPictorialAccessible2Setted,
        checkedItemsPictorialAccessible2SetSetted,
    ] = useState(true)
    const [checkedPictorialMedia2, setCheckedPictorialMedia2] = useState([])
    const [
        checkedItemsPictorialMedia2Setted,
        checkedItemsPictorialMedia2SetSetted,
    ] = useState(true)
    const [checkedPictorialFixative2, setCheckedPictorialFixative2] =
        useState('')
    const [
        checkedItemsPictorialFixative2Setted,
        checkedItemsPictorialFixative2SetSetted,
    ] = useState(true)
    const [checkedPictorialOtherMedia2, setCheckedPictorialOtherMedia2] =
        useState([])
    const [
        checkedItemsPictorialOtherMedia2Setted,
        checkedItemsPictorialOtherMedia2SetSetted,
    ] = useState(true)
    const [checkedPictorialTechnique2, setCheckedPictorialTechnique2] =
        useState([])
    const [
        checkedItemsPictorialTechnique2Setted,
        checkedItemsPictorialTechnique2SetSetted,
    ] = useState(true)
    const [checkedPictorialCondition2, setCheckedPictorialCondition2] =
        useState('')
    const [
        checkedItemsPictorialCondition2Setted,
        checkedItemsPictorialCondition2SetSetted,
    ] = useState(true)
    const [checkedPictorialSurface2, setCheckedPictorialSurface2] = useState([])
    const [
        checkedItemsPictorialSurface2Setted,
        checkedItemsPictorialSurface2SetSetted,
    ] = useState(true)
    const [checkedPictorialDamage2, setCheckedPictorialDamage2] = useState([])
    const [
        checkedItemsPictorialDamage2Setted,
        checkedItemsPictorialDamage2SetSetted,
    ] = useState(true)

    useEffect(() => {
        if (checkedItemsPictorialMedia2Setted) {
            if (
                Registratie.secondarySupport.pictorial.friableMedia.length !==
                    0 &&
                Registratie.secondarySupport.pictorial.friableMedia.every(
                    function (v) {
                        return v === null
                    },
                ) !== true
            ) {
                setCheckedPictorialMedia2(
                    Registratie.secondarySupport.pictorial.friableMedia,
                )
                checkedItemsPictorialMedia2SetSetted(false)
            }
        }
    }, [
        Registratie.secondarySupport.pictorial.friableMedia,
        checkedItemsPictorialMedia2Setted,
    ])

    useEffect(() => {
        if (checkedItemsPictorialAccessible2Setted) {
            if (
                Registratie.secondarySupport.pictorial.pictorialAccessible !==
                    '' &&
                Registratie.secondarySupport.pictorial.pictorialAccessible !==
                    undefined &&
                Registratie.secondarySupport.pictorial.pictorialAccessible !==
                    null
            ) {
                setCheckedPictorialAccessible2(
                    Registratie.secondarySupport.pictorial.pictorialAccessible,
                )
                checkedItemsPictorialAccessible2SetSetted(false)
            }
        }
    }, [
        Registratie.secondarySupport.pictorial.pictorialAccessible,
        checkedItemsPictorialAccessible2Setted,
    ])

    useEffect(() => {
        if (checkedItemsPictorialFixative2Setted) {
            if (
                Registratie.secondarySupport.pictorial.fixative !== '' &&
                Registratie.secondarySupport.pictorial.fixative !== undefined &&
                Registratie.secondarySupport.pictorial.fixative !== null
            ) {
                setCheckedPictorialFixative2(
                    Registratie.secondarySupport.pictorial.fixative,
                )
                checkedItemsPictorialFixative2SetSetted(false)
            }
        }
    }, [
        Registratie.secondarySupport.pictorial.fixative,
        checkedItemsPictorialFixative2Setted,
    ])

    useEffect(() => {
        if (checkedItemsPictorialOtherMedia2Setted) {
            if (
                Registratie.secondarySupport.pictorial.otherMedia.length !==
                    0 &&
                Registratie.secondarySupport.pictorial.otherMedia.every(
                    function (v) {
                        return v === null
                    },
                ) !== true
            ) {
                setCheckedPictorialOtherMedia2(
                    Registratie.secondarySupport.pictorial.otherMedia,
                )
                checkedItemsPictorialOtherMedia2SetSetted(false)
            }
        }
    }, [
        Registratie.secondarySupport.pictorial.otherMedia,
        checkedItemsPictorialOtherMedia2Setted,
    ])

    useEffect(() => {
        if (checkedItemsPictorialTechnique2Setted) {
            if (
                Registratie.secondarySupport.pictorial.techniques.length !==
                    0 &&
                Registratie.secondarySupport.pictorial.techniques.every(
                    function (v) {
                        return v === null
                    },
                ) !== true
            ) {
                setCheckedPictorialTechnique2(
                    Registratie.secondarySupport.pictorial.techniques,
                )
                checkedItemsPictorialTechnique2SetSetted(false)
            }
        }
    }, [
        Registratie.secondarySupport.pictorial.techniques,
        checkedItemsPictorialTechnique2Setted,
    ])

    useEffect(() => {
        if (checkedItemsPictorialCondition2Setted) {
            if (
                Registratie.secondarySupport.pictorial.generalCondition !==
                    '' &&
                Registratie.secondarySupport.pictorial.generalCondition !==
                    undefined &&
                Registratie.secondarySupport.pictorial.generalCondition !== null
            ) {
                setCheckedPictorialCondition2(
                    Registratie.secondarySupport.pictorial.generalCondition,
                )
                checkedItemsPictorialCondition2SetSetted(false)
            }
        }
    }, [
        Registratie.secondarySupport.pictorial.generalCondition,
        checkedItemsPictorialCondition2Setted,
    ])

    useEffect(() => {
        if (checkedItemsPictorialSurface2Setted) {
            if (
                Registratie.secondarySupport.pictorial.surface.length !== 0 &&
                Registratie.secondarySupport.pictorial.surface.every(function (
                    v,
                ) {
                    return v === null
                }) !== true
            ) {
                setCheckedPictorialSurface2(
                    Registratie.secondarySupport.pictorial.surface,
                )
                checkedItemsPictorialSurface2SetSetted(false)
            }
        }
    }, [
        Registratie.secondarySupport.pictorial.surface,
        checkedItemsPictorialSurface2Setted,
    ])

    useEffect(() => {
        if (checkedItemsPictorialDamage2Setted) {
            if (
                Registratie.secondarySupport.pictorial.damage.length !== 0 &&
                Registratie.secondarySupport.pictorial.damage.every(function (
                    v,
                ) {
                    return v === null
                }) !== true
            ) {
                setCheckedPictorialDamage2(
                    Registratie.secondarySupport.pictorial.damage,
                )
                checkedItemsPictorialDamage2SetSetted(false)
            }
        }
    }, [
        Registratie.secondarySupport.pictorial.damage,
        checkedItemsPictorialDamage2Setted,
    ])

    useEffect(() => {
        Registratie.secondarySupport.pictorial.friableMedia =
            checkedPictorialMedia2
    }, [checkedPictorialMedia2, Registratie.secondarySupport.pictorial])

    useEffect(() => {
        Registratie.secondarySupport.pictorial.pictorialAccessible =
            checkedPictorialAccessible2
    }, [checkedPictorialAccessible2, Registratie.secondarySupport.pictorial])

    useEffect(() => {
        Registratie.secondarySupport.pictorial.fixative =
            checkedPictorialFixative2
    }, [checkedPictorialFixative2, Registratie.secondarySupport.pictorial])

    useEffect(() => {
        Registratie.secondarySupport.pictorial.otherMedia =
            checkedPictorialOtherMedia2
    }, [checkedPictorialOtherMedia2, Registratie.secondarySupport.pictorial])

    useEffect(() => {
        Registratie.secondarySupport.pictorial.techniques =
            checkedPictorialTechnique2
    }, [checkedPictorialTechnique2, Registratie.secondarySupport.pictorial])

    useEffect(() => {
        Registratie.secondarySupport.pictorial.generalCondition =
            checkedPictorialCondition2
    }, [checkedPictorialCondition2, Registratie.secondarySupport.pictorial])

    useEffect(() => {
        Registratie.secondarySupport.pictorial.surface =
            checkedPictorialSurface2
    }, [checkedPictorialSurface2, Registratie.secondarySupport.pictorial])

    useEffect(() => {
        Registratie.secondarySupport.pictorial.damage = checkedPictorialDamage2
    }, [checkedPictorialDamage2, Registratie.secondarySupport.pictorial])

    const SecondaryPictorialForm = [
        {
            label: 'pictorial',
            name: 'pictorialAccessible',
            type: 'radio',
            options: ['Not accessible/unknown', 'No secondary support'],
            checkedItems: checkedPictorialAccessible2,
            setCheckedItems: setCheckedPictorialAccessible2,
        },
        {
            label: 'firable media',
            name: 'firableMedia',
            type: 'checkBox',
            options: ['Chalk', 'Black dry medium', 'Charcoal', 'Pastel'],
            checkedItems: checkedPictorialMedia2,
            setCheckedItems: setCheckedPictorialMedia2,
        },
        {
            label: 'fixative',
            name: 'fixative',
            type: 'radio',
            options: ['Probably_yes', 'Probably_not', 'Yes', 'No', 'Unclear'],
            checkedItems: checkedPictorialFixative2,
            setCheckedItems: setCheckedPictorialFixative2,
        },
        {
            label: 'fixative indicators',
            name: 'fixativeIndicators',
            type: 'text',
        },
        {
            label: 'other media',
            name: 'otherMedia',
            type: 'checkBox',
            options: [
                'Ballpoint_pen',
                'Bistre',
                'Colored_pencil',
                'Gouache',
                'Graphite_pencil',
                'Ink',
                'Marker',
                'Oil_paint',
                'Sepia',
                'Tempera',
                'Watercolor',
            ],
            checkedItems: checkedPictorialOtherMedia2,
            setCheckedItems: setCheckedPictorialOtherMedia2,
        },
        {
            label: 'techniques',
            name: 'techniques',
            type: 'checkBox',
            options: [
                'Blending',
                'Drawing',
                'Erasing',
                'Incising',
                'Layering',
                'Scraping',
                'Scratching',
                'Smudging',
                'Squaring',
                'Stumping',
                'Wet_brush',
                'Wash',
            ],
            checkedItems: checkedPictorialTechnique2,
            setCheckedItems: setCheckedPictorialTechnique2,
        },
        { label: 'remarks', name: 'remarksDescription', type: 'textBox' },
        {
            label: 'general condition',
            name: 'generalCondition',
            type: 'radio',
            options: ['Good_condition', 'Average_condition', 'Bad_condition'],
            checkedItems: checkedPictorialCondition2,
            setCheckedItems: setCheckedPictorialCondition2,
        },
        {
            label: 'surface',
            name: 'surface',
            type: 'checkBox',
            options: ['Dust', 'Dirt', 'Appears_clean'],
            checkedItems: checkedPictorialSurface2,
            setCheckedItems: setCheckedPictorialSurface2,
        },
        {
            label: 'damage',
            name: 'damage',
            type: 'checkBox',
            options: [
                'No_damage',
                'Abrasion',
                'Bleeding',
                'Blister',
                'Bulge',
                'Cleavage',
                'Cut',
                'Deformation',
                'Discoloration',
                'Fingerprint',
                'Flaking',
                'Fold',
                'Former_treatment',
                'Insect_damage',
                'Insect_damage_active',
                'Insect_damage_non-active',
                'Lifting',
                'Loss',
                'Mold',
                'Mold_active',
                'Mold_non-active',
                'Rust',
                'Scratch',
                'Smudging',
                'Staining',
                'Tear',
                'Transfer',
                'Water_damage',
                'Wrinkling',
                'Yellowing',
            ],
            checkedItems: checkedPictorialDamage2,
            setCheckedItems: setCheckedPictorialDamage2,
        },
        { label: 'remarks', name: 'remarksCondition', type: 'textBox' },
    ]

    const handleSecondPictorailChange = (event) => {
        const { name, value } = event.target
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            secondarySupport: {
                ...prevRegistratie.secondarySupport,
                pictorial: {
                    ...prevRegistratie.secondarySupport.pictorial,
                    [name]: value,
                },
            },
        }))
    }

    const handleGeneralRemarks = (event) => {
        const { value } = event.target
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            remarks: value,
        }))
    }

    // mounting section

    const [checkedItemsNature, setCheckedItemsNature] = useState([])
    const [checkedItemsNatureSetted, checkedItemsNatureSetSetted] =
        useState(true)
    const [checkedItemsAssemblage, setCheckedItemsAssemblage] = useState([])
    const [checkedItemsAssemblageSetted, checkedItemsAssemblageSetSetted] =
        useState(true)
    const [checkedItemsCondition, setCheckedItemsCondition] = useState('')
    const [checkedItemsConditionSetted, checkedItemsConditionSetSetted] =
        useState(true)
    const [checkedItemsSurface, setCheckedItemsSurface] = useState([])
    const [checkedItemsSurfaceSetted, checkedItemsSurfaceSetSetted] =
        useState(true)
    const [checkedItemsDamage, setCheckedItemsDamage] = useState([])
    const [checkedItemsDamageSetted, checkedItemsDamageSetSetted] =
        useState(true)

    useEffect(() => {
        if (checkedItemsNatureSetted) {
            if (
                Registratie.mounting.nature.length !== 0 &&
                Registratie.mounting.nature.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsNature(Registratie.mounting.nature)
                checkedItemsNatureSetSetted(false)
            }
        }
    }, [Registratie.mounting.nature, checkedItemsNatureSetted])

    useEffect(() => {
        if (checkedItemsAssemblageSetted) {
            if (
                Registratie.mounting.assemblage.length !== 0 &&
                Registratie.mounting.assemblage.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsAssemblage(Registratie.mounting.assemblage)
                checkedItemsAssemblageSetSetted(false)
            }
        }
    }, [Registratie.mounting.assemblage, checkedItemsAssemblageSetted])

    useEffect(() => {
        if (checkedItemsConditionSetted) {
            if (
                Registratie.mounting.generalCondition !== '' &&
                Registratie.mounting.generalCondition !== undefined &&
                Registratie.mounting.generalCondition !== null
            ) {
                setCheckedItemsCondition(Registratie.mounting.generalCondition)
                checkedItemsConditionSetSetted(false)
            }
        }
    }, [Registratie.mounting.generalCondition, checkedItemsConditionSetted])

    useEffect(() => {
        if (checkedItemsSurfaceSetted) {
            if (
                Registratie.mounting.surface.length !== 0 &&
                Registratie.mounting.surface.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsSurface(Registratie.mounting.surface)
                checkedItemsSurfaceSetSetted(false)
            }
        }
    }, [Registratie.mounting.surface, checkedItemsSurfaceSetted])

    useEffect(() => {
        if (checkedItemsDamageSetted) {
            if (
                Registratie.mounting.damage.length !== 0 &&
                Registratie.mounting.damage.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsDamage(Registratie.mounting.damage)
                checkedItemsDamageSetSetted(false)
            }
        }
    }, [Registratie.mounting.damage, checkedItemsDamageSetted])

    useEffect(() => {
        Registratie.mounting.nature = checkedItemsNature
    }, [checkedItemsNature, Registratie.mounting])

    useEffect(() => {
        Registratie.mounting.assemblage = checkedItemsAssemblage
    }, [checkedItemsAssemblage, Registratie.mounting])

    useEffect(() => {
        Registratie.mounting.generalCondition = checkedItemsCondition
    }, [checkedItemsCondition, Registratie.mounting])

    useEffect(() => {
        Registratie.mounting.surface = checkedItemsSurface
    }, [checkedItemsSurface, Registratie.mounting])

    useEffect(() => {
        Registratie.mounting.damage = checkedItemsDamage
    }, [checkedItemsDamage, Registratie.mounting])

    const mountingForm = [
        {
            label: 'nature',
            name: 'nature',
            type: 'checkBox',
            checkedItems: checkedItemsNature,
            setCheckedItems: setCheckedItemsNature,
            options: [
                'Strainer',
                'Stretcher',
                'CardBoard',
                'WoodenPanel',
                'Paper',
            ],
        },
        {
            label: 'assemblage',
            name: 'assemblage',
            type: 'checkBox',
            checkedItems: checkedItemsAssemblage,
            setCheckedItems: setCheckedItemsAssemblage,
            options: [
                'Unknown/notAccesibble',
                'PartlyGlued',
                'FullyGlued',
                'Hinged',
                'Inlay',
            ],
        },
        { name: 'descriptionRemarks', label: 'remarks', type: 'textBox' },
        {
            label: 'condition',
            name: 'condition',
            type: 'radio',
            checkedItems: checkedItemsCondition,
            setCheckedItems: setCheckedItemsCondition,
            options: ['Good condition', 'Average condtion', 'Bad condition'],
        },
        {
            label: 'surface',
            name: 'surface',
            type: 'checkBox',
            checkedItems: checkedItemsSurface,
            setCheckedItems: setCheckedItemsSurface,
            options: ['Dust', 'Dirt', 'Appears clean'],
        },
        {
            label: 'damage',
            name: 'damage',
            type: 'checkBox',
            checkedItems: checkedItemsDamage,
            setCheckedItems: setCheckedItemsDamage,
            options: [
                'No damage',
                'Acidic material',
                'Deformation',
                'Former treatmanet',
                'Mold',
                'Mold active',
                'Mold non-active',
                'Loss',
                'Insect damage active',
                'Insect damage non-active',
                'Tension of the support',
                'Wrinkling',
            ],
        },
        { name: 'conditionRemarks', label: 'remarks', type: 'textBox' },
    ]
    const handleMountingChange = (event) => {
        const { name, value } = event.target
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            mounting: {
                ...prevRegistratie.mounting,
                [name]: value,
            },
        }))
    }

    //artist section
    const ArtistForm = [
        { label: 'surname', name: 'surName', type: 'text' },
        { label: 'first name', name: 'firstName', type: 'text' },
    ]

    const handleArtistChange = (event) => {
        const { name, value } = event.target
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            identification: {
                ...prevRegistratie.identification,
                artist: {
                    ...prevRegistratie.identification.artist,
                    [name]: value,
                },
            },
        }))
    }

    //dates section
    const [checkedItemsDateValue, setCheckedItemsDateValue] = useState('')
    const [checkedItemsDateValueSetted, checkedItemsDateValueSetSetted] =
        useState(true)

    useEffect(() => {
        if (checkedItemsDateValueSetted) {
            if (
                Registratie.identification.date.value !== '' &&
                Registratie.identification.date.value !== undefined &&
                Registratie.identification.date.value !== null
            ) {
                setCheckedItemsDateValue(Registratie.identification.date.value)
                checkedItemsDateValueSetSetted(false)
            }
        }
    }, [Registratie.identification.date.value, checkedItemsDateValueSetted])

    useEffect(() => {
        Registratie.identification.date.value = checkedItemsDateValue
    }, [checkedItemsDateValue, Registratie.identification.date])

    const DatesForm = [
        { name: 'text', label: 'text', type: 'text' },
        { name: 'location', label: 'location', type: 'text' },
        { name: 'media', label: 'media', type: 'text' },
        { name: 'supposedDate', label: 'supposed date', type: 'text' },
        {
            name: 'value',
            label: 'value',
            type: 'radio',
            options: ['Supposed', 'Known', 'Unknown'],
            checkedItems: checkedItemsDateValue,
            setCheckedItems: setCheckedItemsDateValue,
        },
    ]

    const handleDatesChange = (event) => {
        const { name, value } = event.target
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            identification: {
                ...prevRegistratie.identification,
                date: {
                    ...prevRegistratie.identification.date,
                    [name]: value,
                },
            },
        }))
    }

    //signature section
    const [checkedItemsSignatureValue, setCheckedItemsSignatureValue] =
        useState('')
    const [
        checkedItemsSignatureValueSetted,
        checkedItemsSignatureValueSetSetted,
    ] = useState(true)

    useEffect(() => {
        if (checkedItemsSignatureValueSetted) {
            if (
                Registratie.identification.signature.value !== '' &&
                Registratie.identification.signature.value !== undefined &&
                Registratie.identification.signature.value !== null
            ) {
                setCheckedItemsSignatureValue(
                    Registratie.identification.signature.value,
                )
                checkedItemsSignatureValueSetSetted(false)
            }
        }
    }, [
        Registratie.identification.signature.value,
        checkedItemsSignatureValueSetted,
    ])

    useEffect(() => {
        Registratie.identification.signature.value = checkedItemsSignatureValue
    }, [checkedItemsSignatureValue, Registratie.identification.signature])

    const SignatureForm = [
        { name: 'text', label: 'text', type: 'text' },
        { name: 'location', label: 'location', type: 'text' },
        { name: 'media', label: 'media', type: 'text' },
        {
            name: 'value',
            label: 'value',
            type: 'radio',
            options: [
                'Monogram',
                'Not signed',
                'Symbol',
                'Initials',
                'Full signature',
            ],
            checkedItems: checkedItemsSignatureValue,
            setCheckedItems: setCheckedItemsSignatureValue,
        },
    ]

    const handleSignatureChange = (event) => {
        const { name, value } = event.target
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            identification: {
                ...prevRegistratie.identification,
                signature: {
                    ...prevRegistratie.identification.signature,
                    [name]: value,
                },
            },
        }))
    }

    // inscription section
    const [numElementsInscription, setNumElementsInscription] = useState(0)

    useEffect(() => {
        setNumElementsInscription(
            Registratie.identification.inscriptions.length,
        )
    }, [Registratie.identification.inscriptions])

    const handleClickInscription = () => {
        setNumElementsInscription(numElementsInscription + 1)
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            identification: {
                ...prevRegistratie.identification,
                inscriptions: [
                    ...prevRegistratie.identification.inscriptions,
                    {
                        id: uuidv4(),
                        text: null,
                        location: null,
                        media: null,
                        value: null,
                    },
                ],
            },
        }))
    }

    const handleClickDeleteInscription = () => {
        setNumElementsInscription(numElementsInscription - 1)
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            identification: {
                ...prevRegistratie.identification,
                inscriptions: [
                    ...prevRegistratie.identification.inscriptions.slice(0, -1),
                ],
            },
        }))
    }

    const InscriptionForm = [
        { name: 'text', label: 'text', type: 'text' },
        { name: 'location', label: 'location', type: 'text' },
        { name: 'media', label: 'media', type: 'text' },
        { name: 'value', label: 'value', type: 'text' },
    ]

    const handleInscriptionChange = (event, index) => {
        const { name, value } = event.target
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            identification: {
                ...prevRegistratie.identification,
                inscriptions: [
                    ...prevRegistratie.identification.inscriptions.slice(
                        0,
                        index,
                    ),
                    {
                        ...prevRegistratie.identification.inscriptions[index],
                        [name]: value,
                    },
                    ...prevRegistratie.identification.inscriptions.slice(
                        index + 1,
                    ),
                ],
            },
        }))
    }

    //collectionmark section
    const [numElementsCollectionMarks, setNumElementsCollectionMarks] =
        useState(0)

    useEffect(() => {
        setNumElementsCollectionMarks(
            Registratie.identification.collectionMarks.length,
        )
    }, [Registratie.identification.collectionMarks])

    const handleClickCollectionMarks = () => {
        setNumElementsCollectionMarks(numElementsCollectionMarks + 1)
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            identification: {
                ...prevRegistratie.identification,
                collectionMarks: [
                    ...prevRegistratie.identification.collectionMarks,
                    {
                        id: uuidv4(),
                        text: null,
                        location: null,
                        media: null,
                        value: null,
                    },
                ],
            },
        }))
    }

    const handleClickDeleteCollectionMarks = () => {
        setNumElementsCollectionMarks(numElementsCollectionMarks - 1)
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            identification: {
                ...prevRegistratie.identification,
                collectionMarks: [
                    ...prevRegistratie.identification.collectionMarks.slice(
                        0,
                        -1,
                    ),
                ],
            },
        }))
    }

    const CollectionMarksForm = [
        { name: 'text', label: 'text', type: 'text' },
        { name: 'location', label: 'location', type: 'text' },
        { name: 'media', label: 'media', type: 'text' },
        { name: 'value', label: 'value', type: 'text' },
    ]
    const handleCollectionMarksChange = (event, index) => {
        const { name, value } = event.target
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            identification: {
                ...prevRegistratie.identification,
                collectionMarks: [
                    ...prevRegistratie.identification.collectionMarks.slice(
                        0,
                        index,
                    ),
                    {
                        ...prevRegistratie.identification.collectionMarks[
                            index
                        ],
                        [name]: value,
                    },
                    ...prevRegistratie.identification.collectionMarks.slice(
                        index + 1,
                    ),
                ],
            },
        }))
    }

    // framing section

    useState(true)
    const [checkedItemsRabbetAccessible, setCheckedItemsRabbetAccessible] =
        useState('')
    const [
        checkedItemsRabbetAccessibleSetted,
        checkedItemsRabbetAccessibleSetSetted,
    ] = useState(true)
    const [checkedItemsInnerSpacers1, setCheckedItemsInnerSpacers1] = useState(
        [],
    )
    const [
        checkedItemsInnerSpacers1Setted,
        checkedItemsInnerSpacers1SetSetted,
    ] = useState(true)
    const [checkedItemsInnerSpacers2, setCheckedItemsInnerSpacers2] = useState(
        [],
    )
    const [
        checkedItemsInnerSpacers2Setted,
        checkedItemsInnerSpacers2SetSetted,
    ] = useState(true)
    const [checkedItemsBackingBoard1, setCheckedItemsBackingBoard1] = useState(
        [],
    )
    const [
        checkedItemsBackingBoard1Setted,
        checkedItemsBackingBoard1SetSetted,
    ] = useState(true)
    const [checkedItemsBackingBoard2, setCheckedItemsBackingBoard2] = useState(
        [],
    )
    const [
        checkedItemsBackingBoard2Setted,
        checkedItemsBackingBoard2SetSetted,
    ] = useState(true)
    const [checkedItemsSealing, setCheckedItemsSealing] = useState([])
    const [checkedItemsSealingSetted, checkedItemsSealingSetSetted] =
        useState(true)
    const [checkedItemsHangingSystem, setCheckedItemsHangingSystem] =
        useState('')
    const [
        checkedItemsHangingSystemSetted,
        checkedItemsHangingSystemSetSetted,
    ] = useState(true)
    const [checkedItemsFramingMaterial, setCheckedItemsFramingMaterial] =
        useState('')
    const [
        checkedItemsFramingMaterialSetted,
        checkedItemsFramingMaterialSetSetted,
    ] = useState(true)
    const [checkedItemsFramingAssemblage, setCheckedItemsFramingAssemblage] =
        useState('')
    const [
        checkedItemsFramingAssemblageSetted,
        checkedItemsFramingAssemblageSetSetted,
    ] = useState(true)
    const [checkedItemsOriginalFraming, setCheckedItemsOriginalFraming] =
        useState('')
    const [
        checkedItemsOriginalFramingSetted,
        checkedItemsOriginalFramingSetSetted,
    ] = useState(true)

    const [checkedItemsFramingSurface, setCheckedItemsFramingSurface] =
        useState([])
    const [
        checkedItemsFramingSurfaceSetted,
        checkedItemsFramingSurfaceSetSetted,
    ] = useState(true)
    const [checkedItemsMechanicalProblems, setCheckedItemsMechanicalProblems] =
        useState([])
    const [
        checkedItemsMechanicalProblemsSetted,
        checkedItemsMechanicalProblemsSetSetted,
    ] = useState(true)
    const [checkedItemsChemicalProblems, setCheckedItemsChemicalProblems] =
        useState([])
    const [
        checkedItemsChemicalProblemsSetted,
        checkedItemsChemicalProblemsSetSetted,
    ] = useState(true)
    const [checkedItemsBiologicalProblems, setCheckedItemsBiologicalProblems] =
        useState([])
    const [
        checkedItemsBiologicalProblemsSetted,
        checkedItemsBiologicalProblemsSetSetted,
    ] = useState(true)
    const [checkedItemsAestheticProblems, setCheckedItemsAestheticProblems] =
        useState([])
    const [
        checkedItemsAestheticProblemsSetted,
        checkedItemsAestheticProblemsSetSetted,
    ] = useState(true)

    useEffect(() => {
        if (checkedItemsRabbetAccessibleSetted) {
            if (
                Registratie.framing.rabbetAccessible !== '' &&
                Registratie.framing.rabbetAccessible !== undefined &&
                Registratie.framing.rabbetAccessible !== null
            ) {
                setCheckedItemsRabbetAccessible(
                    Registratie.framing.rabbetAccessible,
                )
                checkedItemsRabbetAccessibleSetSetted(false)
            }
        }
    }, [
        Registratie.framing.rabbetAccessible,
        checkedItemsRabbetAccessibleSetted,
    ])

    useEffect(() => {
        if (checkedItemsInnerSpacers1Setted) {
            if (
                Registratie.framing.innerSpacers1.length !== 0 &&
                Registratie.framing.innerSpacers1.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsInnerSpacers1(Registratie.framing.innerSpacers1)
                checkedItemsInnerSpacers1SetSetted(false)
            }
        }
    }, [Registratie.framing.innerSpacers1, checkedItemsInnerSpacers1Setted])

    useEffect(() => {
        if (checkedItemsInnerSpacers2Setted) {
            if (
                Registratie.framing.innerSpacers2.length !== 0 &&
                Registratie.framing.innerSpacers2.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsInnerSpacers2(Registratie.framing.innerSpacers2)
                checkedItemsInnerSpacers2SetSetted(false)
            }
        }
    }, [Registratie.framing.innerSpacers2, checkedItemsInnerSpacers2Setted])

    useEffect(() => {
        if (checkedItemsBackingBoard1Setted) {
            if (
                Registratie.framing.backingBoard1.length !== 0 &&
                Registratie.framing.backingBoard1.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsBackingBoard1(Registratie.framing.backingBoard1)
                checkedItemsBackingBoard1SetSetted(false)
            }
        }
    }, [Registratie.framing.backingBoard1, checkedItemsBackingBoard1Setted])

    useEffect(() => {
        if (checkedItemsBackingBoard2Setted) {
            if (
                Registratie.framing.backingBoard2.length !== 0 &&
                Registratie.framing.backingBoard2.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsBackingBoard2(Registratie.framing.backingBoard2)
                checkedItemsBackingBoard2SetSetted(false)
            }
        }
    }, [Registratie.framing.backingBoard2, checkedItemsBackingBoard2Setted])

    useEffect(() => {
        if (checkedItemsSealingSetted) {
            if (
                Registratie.framing.sealing.length !== 0 &&
                Registratie.framing.sealing.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsSealing(Registratie.framing.sealing)
                checkedItemsSealingSetSetted(false)
            }
        }
    }, [Registratie.framing.sealing, checkedItemsSealingSetted])

    useEffect(() => {
        if (checkedItemsHangingSystemSetted) {
            if (
                Registratie.framing.hangingSystem !== '' &&
                Registratie.framing.hangingSystem !== undefined &&
                Registratie.framing.hangingSystem !== null
            ) {
                setCheckedItemsHangingSystem(Registratie.framing.hangingSystem)
                checkedItemsHangingSystemSetSetted(false)
            }
        }
    }, [Registratie.framing.hangingSystem, checkedItemsHangingSystemSetted])

    useEffect(() => {
        if (checkedItemsFramingMaterialSetted) {
            if (
                Registratie.framing.material !== '' &&
                Registratie.framing.material !== undefined &&
                Registratie.framing.material !== null
            ) {
                setCheckedItemsFramingMaterial(Registratie.framing.material)
                checkedItemsFramingMaterialSetSetted(false)
            }
        }
    }, [Registratie.framing.material, checkedItemsFramingMaterialSetted])

    useEffect(() => {
        if (checkedItemsFramingAssemblageSetted) {
            if (
                Registratie.framing.assemblage !== '' &&
                Registratie.framing.assemblage !== undefined &&
                Registratie.framing.assemblage !== null
            ) {
                setCheckedItemsFramingAssemblage(Registratie.framing.assemblage)
                checkedItemsFramingAssemblageSetSetted(false)
            }
        }
    }, [Registratie.framing.assemblage, checkedItemsFramingAssemblageSetted])

    useEffect(() => {
        if (checkedItemsOriginalFramingSetted) {
            if (
                Registratie.framing.originalFraming !== '' &&
                Registratie.framing.originalFraming !== undefined &&
                Registratie.framing.originalFraming !== null
            ) {
                setCheckedItemsOriginalFraming(
                    Registratie.framing.originalFraming,
                )
                checkedItemsOriginalFramingSetSetted(false)
            }
        }
    }, [Registratie.framing.originalFraming, checkedItemsOriginalFramingSetted])

    useEffect(() => {
        if (checkedItemsFramingSurfaceSetted) {
            if (
                Registratie.framing.surface.length !== 0 &&
                Registratie.framing.surface.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsFramingSurface(Registratie.framing.surface)
                checkedItemsFramingSurfaceSetSetted(false)
            }
        }
    }, [Registratie.framing.surface, checkedItemsFramingSurfaceSetted])

    useEffect(() => {
        if (checkedItemsMechanicalProblemsSetted) {
            if (
                Registratie.framing.mechanicalProblems.length !== 0 &&
                Registratie.framing.mechanicalProblems.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsMechanicalProblems(
                    Registratie.framing.mechanicalProblems,
                )
                checkedItemsMechanicalProblemsSetSetted(false)
            }
        }
    }, [
        Registratie.framing.mechanicalProblems,
        checkedItemsMechanicalProblemsSetted,
    ])

    useEffect(() => {
        if (checkedItemsBiologicalProblemsSetted) {
            if (
                Registratie.framing.biologicalProblems.length !== 0 &&
                Registratie.framing.biologicalProblems.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsBiologicalProblems(
                    Registratie.framing.biologicalProblems,
                )
                checkedItemsBiologicalProblemsSetSetted(false)
            }
        }
    }, [
        Registratie.framing.biologicalProblems,
        checkedItemsBiologicalProblemsSetted,
    ])

    useEffect(() => {
        if (checkedItemsChemicalProblemsSetted) {
            if (
                Registratie.framing.chemicalProblems.length !== 0 &&
                Registratie.framing.chemicalProblems.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsChemicalProblems(
                    Registratie.framing.chemicalProblems,
                )
                checkedItemsChemicalProblemsSetSetted(false)
            }
        }
    }, [
        Registratie.framing.chemicalProblems,
        checkedItemsChemicalProblemsSetted,
    ])

    useEffect(() => {
        if (checkedItemsAestheticProblemsSetted) {
            if (
                Registratie.framing.aestheticProblems.length !== 0 &&
                Registratie.framing.aestheticProblems.every(function (v) {
                    return v === null
                }) !== true
            ) {
                setCheckedItemsAestheticProblems(
                    Registratie.framing.aestheticProblems,
                )
                checkedItemsAestheticProblemsSetSetted(false)
            }
        }
    }, [
        Registratie.framing.aestheticProblems,
        checkedItemsAestheticProblemsSetted,
    ])

    useEffect(() => {
        Registratie.framing.rabbetAccessible = checkedItemsRabbetAccessible
    }, [checkedItemsRabbetAccessible, Registratie.framing])

    useEffect(() => {
        Registratie.framing.innerSpacers1 = checkedItemsInnerSpacers1
    }, [checkedItemsInnerSpacers1, Registratie.framing])

    useEffect(() => {
        Registratie.framing.innerSpacers2 = checkedItemsInnerSpacers2
    }, [checkedItemsInnerSpacers2, Registratie.framing])

    useEffect(() => {
        Registratie.framing.backingBoard1 = checkedItemsBackingBoard1
    }, [checkedItemsBackingBoard1, Registratie.framing])

    useEffect(() => {
        Registratie.framing.backingBoard2 = checkedItemsBackingBoard2
    }, [checkedItemsBackingBoard2, Registratie.framing])

    useEffect(() => {
        Registratie.framing.sealing = checkedItemsSealing
    }, [checkedItemsSealing, Registratie.framing])

    useEffect(() => {
        Registratie.framing.hangingSystem = checkedItemsHangingSystem
    }, [checkedItemsHangingSystem, Registratie.framing])

    useEffect(() => {
        Registratie.framing.material = checkedItemsFramingMaterial
    }, [checkedItemsFramingMaterial, Registratie.framing])

    useEffect(() => {
        Registratie.framing.assemblage = checkedItemsFramingAssemblage
    }, [checkedItemsFramingAssemblage, Registratie.framing])

    useEffect(() => {
        Registratie.framing.originalFraming = checkedItemsOriginalFraming
    }, [checkedItemsOriginalFraming, Registratie.framing])

    useEffect(() => {
        Registratie.framing.surface = checkedItemsFramingSurface
    }, [checkedItemsFramingSurface, Registratie.framing])

    useEffect(() => {
        Registratie.framing.mechanicalProblems = checkedItemsMechanicalProblems
    }, [checkedItemsMechanicalProblems, Registratie.framing])

    useEffect(() => {
        Registratie.framing.chemicalProblems = checkedItemsChemicalProblems
    }, [checkedItemsChemicalProblems, Registratie.framing])

    useEffect(() => {
        Registratie.framing.biologicalProblems = checkedItemsBiologicalProblems
    }, [checkedItemsBiologicalProblems, Registratie.framing])

    useEffect(() => {
        Registratie.framing.aestheticProblems = checkedItemsAestheticProblems
    }, [checkedItemsAestheticProblems, Registratie.framing])

    const [checkedItemsFraminghape, setCheckedItemsFraminghape] = useState('')
    const [checkedItemsFraminghapeSetted, checkedItemsFraminghapeSetSetted] =
        useState(true)

    useEffect(() => {
        if (checkedItemsFraminghapeSetted) {
            if (
                Registratie.framing.shape !== '' &&
                Registratie.framing.shape !== undefined &&
                Registratie.framing.shape !== null
            ) {
                setCheckedItemsFraminghape(Registratie.framing.shape)
                checkedItemsFraminghapeSetSetted(false)
            }
        }
    }, [Registratie.framing.shape, checkedItemsFraminghapeSetted])

    useEffect(() => {
        Registratie.framing.shape = checkedItemsFraminghape
    }, [checkedItemsFraminghape, Registratie.framing])

    const [checkedItemsDamageRelevant, setCheckedItemsDamageRelevant] =
        useState('')
    const [
        checkedItemsDamageRelevantSetted,
        checkedItemsDamageRelevantSetSetted,
    ] = useState(true)

    useEffect(() => {
        if (checkedItemsDamageRelevantSetted) {
            if (
                Registratie.framing.damageRelevant !== '' &&
                Registratie.framing.damageRelevant !== undefined &&
                Registratie.framing.damageRelevant !== null
            ) {
                setCheckedItemsDamageRelevant(
                    Registratie.framing.damageRelevant,
                )
                checkedItemsDamageRelevantSetSetted(false)
            }
        }
    }, [Registratie.framing.damageRelevant, checkedItemsDamageRelevantSetted])

    useEffect(() => {
        Registratie.framing.damageRelevant = checkedItemsDamageRelevant
    }, [checkedItemsDamageRelevant, Registratie.framing])

    const framingForm = [
        { name: 'height', label: 'height', type: 'number' },
        { name: 'width', label: 'width', type: 'number' },
        { name: 'depth', label: 'depth', type: 'number' },
        {
            label: 'shape',
            name: 'shape',
            type: 'radio',
            options: [
                'Portrait rectangle',
                'Landscape rectangle',
                'Oval',
                'Square',
            ],
            checkedItems: checkedItemsFraminghape,
            setCheckedItems: setCheckedItemsFraminghape,
        },
        {
            name: 'appertureFrameHeight',
            label: 'apperture frame height',
            type: 'number',
        },
        {
            name: 'apertureFrameWidth',
            label: 'apperture frame width',
            type: 'number',
        },
        {
            name: 'apretureMountHeight',
            label: 'apperture mount height',
            type: 'number',
        },
        {
            name: 'apertureMountWidth',
            label: 'apperture mount width',
            type: 'number',
        },
        {
            name: 'maxPaintingDimensionsHeight',
            label: 'Maximum pastel painting dimensions height',
            type: 'number',
        },
        {
            name: 'maxPaintingDimensionsWidth',
            label: 'Maximum pastel painting dimensions width',
            type: 'number',
        },
        {
            label: 'Additional framing dimensions',
            name: 'rabbetAccessible',
            type: 'radio',
            checkedItems: checkedItemsRabbetAccessible,
            setCheckedItems: setCheckedItemsRabbetAccessible,
            options: ['Accessible', 'Not accessible'],
        },
        { name: 'rabbetHeight', label: 'rabbet height', type: 'number' },
        { name: 'rabbetWidth', label: 'rabbet width', type: 'number' },
        { name: 'rabbetDepth', label: 'rabbet depth', type: 'number' },
        {
            name: 'innerSpacersHeight',
            label: 'inner spacers height',
            type: 'number',
        },
        {
            name: 'innerSpacersWidth',
            label: 'inner spacers width',
            type: 'number',
        },
        {
            name: 'innerSpacersDepth',
            label: 'inner spacers depth',
            type: 'number',
        },
        {
            name: 'externalRisingSticksHeight',
            label: 'external rising sticks height',
            type: 'number',
        },
        {
            name: 'externalRisingSticksWidth',
            label: 'external rising sticks width',
            type: 'number',
        },
        {
            name: 'externalRisingSticksDepth',
            label: 'external rising sticks depth',
            type: 'number',
        },
        {
            name: 'dimensionRemarks',
            label: 'dimension Remarks',
            type: 'textBox',
        },
        { name: 'mouldingMaterial', label: 'moulding material', type: 'text' },
        {
            name: 'mouldingAssemblage',
            label: 'moulding assemblage',
            type: 'text',
        },
        {
            name: 'raisingSticksMaterial',
            label: 'raising sticks material',
            type: 'text',
        },
        {
            name: 'raisingSticksAssemblage',
            label: 'raising sticks assemblage',
            type: 'text',
        },
        {
            name: 'innerSpacers1',
            label: 'inner spacers 1',
            type: 'checkBox',
            options: ['Wood', 'Cork', 'Cardboard'],
            checkedItems: checkedItemsInnerSpacers1,
            setCheckedItems: setCheckedItemsInnerSpacers1,
        },
        {
            name: 'innerSpacers2',
            label: 'inner spacers 2',
            type: 'checkBox',
            checkedItems: checkedItemsInnerSpacers2,
            setCheckedItems: setCheckedItemsInnerSpacers2,
            options: [
                'Unknown',
                'Glued to the rabbet/pastel',
                'Loose',
                'Nailed in the rabbet',
                'Metallic clips',
                'Passe-partout',
                'Other assemblage',
            ],
        },
        {
            name: 'backingBoard1',
            label: 'backing board 1',
            type: 'checkBox',
            options: ['Wood', 'Metal', 'Cardboard'],
            checkedItems: checkedItemsBackingBoard1,
            setCheckedItems: setCheckedItemsBackingBoard1,
        },
        {
            name: 'backingBoard2',
            label: 'backing board 2',
            type: 'checkBox',
            options: [
                'Screwed',
                'Framing staples in rabbet',
                'Fraiming points in the rabbet',
                'Nailed',
                'Taped',
                'Glued',
            ],
            checkedItems: checkedItemsBackingBoard2,
            setCheckedItems: setCheckedItemsBackingBoard2,
        },
        {
            name: 'sealing',
            label: 'sealing',
            type: 'checkBox',
            options: [
                'Paper strips',
                'Frame sealing tape',
                'Auto-adhesive tape',
            ],
            checkedItems: checkedItemsSealing,
            setCheckedItems: setCheckedItemsSealing,
        },
        {
            name: 'hangingSystem',
            label: 'hanging system',
            type: 'radio',
            options: ['One', 'Multiple'],
            checkedItems: checkedItemsHangingSystem,
            setCheckedItems: setCheckedItemsHangingSystem,
        },
        { name: 'indicators', label: 'indicators', type: 'text' },
        {
            name: 'descriptionRemarks',
            label: 'description remarks',
            type: 'textBox',
        },
        {
            name: 'material',
            label: 'material',
            type: 'radio',
            options: [
                'Old glass',
                'Laminated',
                'UV protection',
                'New glass',
                'Plexiglass/Acrylic',
                'Material uncertain',
            ],
            checkedItems: checkedItemsFramingMaterial,
            setCheckedItems: setCheckedItemsFramingMaterial,
        },
        {
            name: 'assemblage',
            label: 'assemblage',
            type: 'radio',
            options: ['Unknown', 'Gummed paper strips'],
            checkedItems: checkedItemsFramingAssemblage,
            setCheckedItems: setCheckedItemsFramingAssemblage,
        },
        { name: 'glazingHeight', label: 'height', type: 'number' },
        { name: 'glazingWidth', label: 'width', type: 'number' },
        {
            name: 'glazingEstimation',
            label: 'Estimation of space between artwork and glazing (mm)',
            type: 'number',
        },
        { name: 'glazingRemarks', label: 'remarks', type: 'textBox' },
        {
            name: 'originalFraming',
            label: 'Original framing or mounting?',
            type: 'radio',
            options: ['Unknown', 'Yes', 'Probably', 'No'],
            checkedItems: checkedItemsOriginalFraming,
            setCheckedItems: setCheckedItemsOriginalFraming,
        },
        { name: 'historyIndicators', label: 'indicators', type: 'text' },
        { name: 'labelsAmount', label: 'amount of labels', type: 'number' },
        { name: 'historyDescription', label: 'remarks', type: 'textBox' },
        {
            name: 'Damage relevant to project',
            label: 'damageRelevant',
            type: 'radio',
            options: ['Yes', 'No'],
            checkedItems: checkedItemsDamageRelevant,
            setCheckedItems: setCheckedItemsDamageRelevant,
        },
        {
            name: 'surface',
            label: 'surface',
            type: 'checkBox',
            options: ['Dust', 'Dirt', 'Appears clean'],
            checkedItems: checkedItemsFramingSurface,
            setCheckedItems: setCheckedItemsFramingSurface,
        },
        {
            name: 'mechanicalProblems',
            label: 'mechanical problems',
            type: 'checkBox',
            options: [
                'None',
                'Deformation',
                'Structural failure',
                'Loss',
                'Wrinkling',
                'Loose elements',
                'Former treatments',
            ],
            checkedItems: checkedItemsMechanicalProblems,
            setCheckedItems: setCheckedItemsMechanicalProblems,
        },
        {
            name: 'chemicalProblems',
            label: 'chemical problems',
            type: 'checkBox',
            options: ['None', 'Rusty material(s)', 'Acidic material(s)'],
            checkedItems: checkedItemsChemicalProblems,
            setCheckedItems: setCheckedItemsChemicalProblems,
        },
        {
            name: 'biologicalProblems',
            label: 'biological problems',
            type: 'checkBox',
            options: [
                'Mold active',
                'Mold non-active',
                'Insect damage active',
                'Insect damage non-active',
                'None',
            ],
            checkedItems: checkedItemsBiologicalProblems,
            setCheckedItems: setCheckedItemsBiologicalProblems,
        },
        {
            name: 'aestethicProblems',
            label: 'aestethic problems',
            type: 'checkBox',
            options: ['Loss', 'Guidling missing', 'None'],
            checkedItems: checkedItemsAestheticProblems,
            setCheckedItems: setCheckedItemsAestheticProblems,
        },
    ]

    const handleFramingChange = (event) => {
        const { name, value } = event.target
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            framing: {
                ...prevRegistratie.framing,
                [name]: value,
            },
        }))
    }

    const [page, setPage] = useState(0)
    const [otherValues, setOtherValues] = useState(
        Array.from({ length: 8 }, () => ''),
    )
    const [otherValuesPrimarySupport, setOtherValuesPrimarySupport] = useState(
        Array.from({ length: 8 }, () => ''),
    )
    const [otherValuesSecondarySupport, setOtherValuesSecondarySupport] =
        useState(Array.from({ length: 8 }, () => ''))
    const [otherValuesPrimaryPictorial, setOtherValuesPrimaryPictorial] =
        useState(Array.from({ length: 8 }, () => ''))
    const [otherValuesSecondaryPictorial, setOtherValuesSecondaryPictorial] =
        useState(Array.from({ length: 8 }, () => ''))
    const [otherValuesMounting, setOtherValuesMounting] = useState(
        Array.from({ length: 8 }, () => ''),
    )
    const [otherValuesFraming, setOtherValuesFraming] = useState(
        Array.from({ length: 8 }, () => ''),
    )
    const [otherValuesIdentification, setOtherValuesIdentification] = useState(
        Array.from({ length: 8 }, () => ''),
    )
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    }

    return (
        <>
            <Modal
                isOpen={submitModal}
                onRequestClose={() => setSubmitModal(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>Succesfully uploaded your data</div>
                <div className="flex justify-between mt-2">
                    <button
                        className="bg-darkBrown px-2 rounded-2xl hover:bg-blackCustom text-white"
                        onClick={() => setSubmitModal(false)}
                    >
                        close
                    </button>
                    <a
                        href="/"
                        className="bg-greenCustom px-2 rounded-2xl hover:bg-blackCustom text-white"
                    >
                        home
                    </a>
                </div>
            </Modal>
            <div className="w-full md:w-1/2 flex flex-wrap">
                <div className="w-full  pt-20 pb-48">
                    {page === 0 ? (
                        <AutomaticForm
                            fields={registrationForm}
                            handleChange={handleRegistrationChange}
                            formData={Registratie}
                        />
                    ) : page === 1 ? (
                        <>
                            <AutomaticForm
                                fields={IdentificationForm}
                                handleChange={handleIdentificationChange}
                                formData={Registratie.identification}
                                otherValues={otherValuesIdentification}
                                setOtherValues={setOtherValuesIdentification}
                            />
                            <p className="text-xl font-bold mt-6">artist</p>
                            <AutomaticForm
                                fields={ArtistForm}
                                handleChange={handleArtistChange}
                                formData={Registratie.identification.artist}
                            />
                            <p className="text-xl font-bold mt-6">date</p>
                            <AutomaticForm
                                fields={DatesForm}
                                handleChange={handleDatesChange}
                                formData={Registratie.identification.date}
                            />
                            <p className="text-xl font-bold mt-6">signature</p>
                            <AutomaticForm
                                fields={SignatureForm}
                                handleChange={handleSignatureChange}
                                formData={Registratie.identification.signature}
                            />
                            <p className="text-xl font-bold mt-6">
                                inscription
                            </p>
                            <div>
                                <button
                                    onClick={handleClickInscription}
                                    className="cursor-pointer bg-greenCustom px-2 rounded-2xl mt-2 items-center mr-5 hover:bg-blackCustom text-white"
                                >
                                    Click to Add inscription
                                </button>
                                <button
                                    onClick={handleClickDeleteInscription}
                                    className="cursor-pointer bg-darkBrown px-2 rounded-2xl mt-2 items-center hover:bg-blackCustom text-white"
                                >
                                    Click to Remove last inscription
                                </button>
                                {numElementsInscription === 0 ? (
                                    <div>no incriptions</div>
                                ) : (
                                    ''
                                )}
                                {[...Array(numElementsInscription)].map(
                                    (_, index) => (
                                        <>
                                            <div className="mt-5">
                                                inscription {index}
                                            </div>
                                            <AutomaticForm
                                                key={index}
                                                fields={InscriptionForm}
                                                handleChange={(e) =>
                                                    handleInscriptionChange(
                                                        e,
                                                        index,
                                                    )
                                                }
                                                formData={
                                                    Registratie.identification
                                                        .inscriptions[index]
                                                }
                                            />
                                        </>
                                    ),
                                )}
                            </div>
                            <p className="text-xl font-bold mt-6">
                                collectionmark
                            </p>
                            <div>
                                <button
                                    onClick={handleClickCollectionMarks}
                                    className="cursor-pointer bg-greenCustom px-2 rounded-2xl mt-2 items-center mr-5 hover:bg-blackCustom text-white"
                                >
                                    Click to Add collection mark
                                </button>
                                <button
                                    onClick={handleClickDeleteCollectionMarks}
                                    className="cursor-pointer bg-darkBrown px-2 rounded-2xl mt-2 items-center hover:bg-blackCustom text-white"
                                >
                                    Click to Remove last collection mark
                                </button>
                                {numElementsCollectionMarks === 0 ? (
                                    <>
                                        <div>no collectionmarks</div>
                                        <input
                                            type="radio"
                                            name="accessibility"
                                            id="accessibility"
                                            value="None"
                                            onClick={(event) => {
                                                const { value } = event.target
                                                setRegistratie(
                                                    (prevRegistratie) => ({
                                                        ...prevRegistratie,
                                                        identification: {
                                                            ...prevRegistratie.identification,
                                                            collectionMarkAccessible:
                                                                value,
                                                        },
                                                    }),
                                                )
                                            }}
                                        />
                                        <label
                                            for="accessibility"
                                            className="mr-5"
                                        >
                                            None
                                        </label>

                                        <input
                                            type="radio"
                                            name="accessibility"
                                            id="not-accessible"
                                            value="Not accessible"
                                            onClick={(event) => {
                                                const { value } = event.target
                                                setRegistratie(
                                                    (prevRegistratie) => ({
                                                        ...prevRegistratie,
                                                        identification: {
                                                            ...prevRegistratie.identification,
                                                            collectionMarkAccessible:
                                                                value,
                                                        },
                                                    }),
                                                )
                                            }}
                                        />
                                        <label for="not-accessible">
                                            Not accessible
                                        </label>
                                    </>
                                ) : (
                                    ''
                                )}
                                {[...Array(numElementsCollectionMarks)].map(
                                    (_, index) => (
                                        <>
                                            <div>inscription {index}</div>
                                            <AutomaticForm
                                                key={index}
                                                fields={CollectionMarksForm}
                                                handleChange={(e) =>
                                                    handleCollectionMarksChange(
                                                        e,
                                                        index,
                                                    )
                                                }
                                                formData={
                                                    Registratie.identification
                                                        .collectionMarks[index]
                                                }
                                            />
                                        </>
                                    ),
                                )}
                            </div>
                        </>
                    ) : page === 2 ? (
                        <AutomaticForm
                            fields={StorageForm}
                            handleChange={handleStorageChange}
                            formData={Registratie.storage}
                            otherValues={otherValues}
                            setOtherValues={setOtherValues}
                        />
                    ) : page === 3 ? (
                        <AutomaticForm
                            fields={PrimarySupportForm}
                            handleChange={handlePrimarySupportChange}
                            formData={Registratie.primarySupport}
                            otherValues={otherValuesPrimarySupport}
                            setOtherValues={setOtherValuesPrimarySupport}
                        />
                    ) : page === 4 ? (
                        <AutomaticForm
                            fields={SecondartSupportForm}
                            handleChange={handleSecondarySupportChange}
                            formData={Registratie.secondarySupport}
                            otherValues={otherValuesSecondarySupport}
                            setOtherValues={setOtherValuesSecondarySupport}
                        />
                    ) : page === 5 ? (
                        <AutomaticForm
                            fields={FirstPictorialForm}
                            handleChange={handleFirstPictorailChange}
                            formData={Registratie.primarySupport.pictorial}
                            otherValues={otherValuesPrimaryPictorial}
                            setOtherValues={setOtherValuesPrimaryPictorial}
                        />
                    ) : page === 6 ? (
                        <AutomaticForm
                            fields={SecondaryPictorialForm}
                            handleChange={handleSecondPictorailChange}
                            formData={Registratie.secondarySupport.pictorial}
                            otherValues={otherValuesSecondaryPictorial}
                            setOtherValues={setOtherValuesSecondaryPictorial}
                        />
                    ) : page === 7 ? (
                        <AutomaticForm
                            fields={mountingForm}
                            handleChange={handleMountingChange}
                            formData={Registratie.mounting}
                            otherValues={otherValuesMounting}
                            setOtherValues={setOtherValuesMounting}
                        />
                    ) : page === 8 ? (
                        <AutomaticForm
                            fields={framingForm}
                            handleChange={handleFramingChange}
                            formData={Registratie.framing}
                            otherValues={otherValuesFraming}
                            setOtherValues={setOtherValuesFraming}
                        />
                    ) : (
                        <textarea
                            value={Registratie.remarks}
                            onChange={handleGeneralRemarks}
                            className="bg-background border border-blackCustom pl-2 rounded text-blackCustom placeholder-gray-700 w-1/2"
                            placeholder="Remarks"
                        ></textarea>
                    )}
                    <div className="fixed bottom-0 pb-6 pt-4 w-full md:w-1/2 flex justify-center bg-white border-t-2">
                        <div className="flex justify-between w-9/12 flex-wrap items-center">
                            <div
                                onClick={() => setPage(0)}
                                className={`underline cursor-pointer mt-2 ${
                                    page === 0
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                Registratie
                            </div>
                            <div
                                onClick={() => setPage(1)}
                                className={`underline cursor-pointer mt-2 ${
                                    page === 1
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                identificatie
                            </div>
                            <div
                                onClick={() => setPage(2)}
                                className={`underline cursor-pointer mt-2 ${
                                    page === 2
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                storage
                            </div>
                            <div
                                onClick={() => setPage(3)}
                                className={`underline cursor-pointer mt-2 ${
                                    page === 3
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                primary support
                            </div>
                            <div
                                onClick={() => setPage(4)}
                                className={`underline cursor-pointer mt-2 ${
                                    page === 4
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                secondary support
                            </div>
                            <div
                                onClick={() => setPage(5)}
                                className={`underline cursor-pointer mt-2 ${
                                    page === 5
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                pictorial layer (recto)
                            </div>
                            <div
                                onClick={() => setPage(6)}
                                className={`underline cursor-pointer mt-2 ${
                                    page === 6
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                pictorial layer (verso)
                            </div>
                            <div
                                onClick={() => setPage(7)}
                                className={`underline cursor-pointer mt-2 ${
                                    page === 7
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                Mounting
                            </div>
                            <div
                                onClick={() => setPage(8)}
                                className={`underline cursor-pointer mt-2 ${
                                    page === 8
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                Framing
                            </div>
                            <div
                                onClick={() => setPage(9)}
                                className={`underline cursor-pointer mt-2 ${
                                    page === 9
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                general remarks
                            </div>
                            <div
                                onClick={handleSubmit}
                                className={`cursor-pointer bg-greenCustom px-2 rounded-2xl mt-2 flex items-center hover:bg-blackCustom text-white`}
                            >
                                submit
                            </div>
                        </div>
                    </div>
                </div>
                <MiradorViewer id={objectid}></MiradorViewer>
            </div>
        </>
    )
}

export default SchadeRapportEditor
