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
            inscriptions: [
                {
                    id: uuidv4(),
                    text: null,
                    location: null,
                    media: null,
                    value: null,
                },
            ],
            collectionMarks: [
                {
                    id: uuidv4(),
                    text: null,
                    location: null,
                    media: null,
                    value: null,
                },
            ],
            materials: null,
            techniques: null,
            support: null,
            framed: null,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
        primarySupport: {
            id: uuidv4(),
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
            surface: null,
            damage: [null],
            damageSerialized: null,
            remarksCondition: null,
            pictorial: {
                id: uuidv4(),
                friableMedia: [null],
                friableMediaSerialized: null,
                fixative: null,
                otherMedia: [null],
                otherMediaSerialized: null,
                techniques: [null],
                techniquesSerialized: null,
                remarksDescription: null,
                generalCondition: null,
                surface: null,
                damage: [null],
                damageSerialized: null,
                remarksCondition: null,
            },
        },
        secondarySupport: {
            id: uuidv4(),
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
            surface: null,
            damage: [null],
            damageSerialized: null,
            remarksCondition: null,
            pictorial: {
                id: uuidv4(),
                friableMedia: [null],
                friableMediaSerialized: null,
                fixative: null,
                otherMedia: [null],
                otherMediaSerialized: null,
                techniques: [null],
                techniquesSerialized: null,
                remarksDescription: null,
                generalCondition: null,
                surface: null,
                damage: [null],
                damageSerialized: null,
                remarksCondition: null,
            },
        },
        storage: {
            id: uuidv4(),
            location: null,
            locationNumber: 0,
            storageType: null,
            material: [null],
            materialSerialized: null,
            remarks: null,
        },
        mounting: {
            id: uuidv4(),
            nature: null,
            assemblage: null,
            generalCondition: null,
            surface: null,
            damage: [null],
            damageSerialized: null,
            myProperty: null,
            descriptionRemarks: null,
            conditionRemarks: null,
        },
    })

    const { loading, error, element } = useGetRegistration(objectid)

    const postRegistration = useAddRegistration()
    const updateRegistration = useUpdateRegistration(objectid)
    const [response, setResponse] = useState()
    const [firstTime, setFirstTime] = useState(true)
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

    useEffect(() => console.log(response), [response])

    //registration section

    const registrationForm = [
        { label: 'name', name: 'name', type: 'text' },
        { label: 'function', name: 'function', type: 'text' },
        { label: 'date', name: 'date', type: 'text' },
        { label: 'reason for reporting', name: 'reason', type: 'text' },
    ]

    const handleRegistrationChange = (event) => {
        const { name, value } = event.target
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            [name]: value,
        }))
    }

    // identification section
    const [checkedItemsSupport, setCheckedItemsSupport] = useState('')
    const [checkedItemsSupportSetted, checkedItemsSupportSetSetted] =
        useState(true)

    useEffect(() => {
        if (checkedItemsSupportSetted) {
            if (
                Registratie.identification.framed !== '' &&
                Registratie.identification.framed !== undefined &&
                Registratie.identification.framed !== null
            ) {
                console.log('done')
                setCheckedItemsSupport(Registratie.identification.framed)
                checkedItemsSupportSetSetted(false)
            }
        }
    }, [Registratie.identification.framed, checkedItemsSupportSetted])

    useEffect(() => {
        Registratie.identification.framed = checkedItemsSupport
    }, [checkedItemsSupport, Registratie.identification])

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
            type: 'radio',
            options: ['unframed', 'possibly_previously_framed', 'framed'],
            checkedItems: checkedItemsSupport,
            setCheckedItems: setCheckedItemsSupport,
            refresh: Registratie.identification.framed,
        },
        { label: 'height (mm)', name: 'height', type: 'number' },
        { label: 'width (mm)', name: 'width', type: 'number' },
        { label: 'shape', name: 'shape', type: 'text' },
        { label: 'top', name: 'top', type: 'number' },
        { label: 'right', name: 'right', type: 'number' },
        { label: 'bottom', name: 'bottom', type: 'number' },
        { label: 'left', name: 'left', type: 'number' },
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
                console.log('done')
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
                console.log('done')
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
        { label: 'location number', name: 'locationNumber', type: 'number' },
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
        { label: 'remarks', name: 'remarks', type: 'textArea' },
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
        useState('')
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
    const [checkedItemsSurface1, setCheckedItemsSurface1] = useState('')
    const [checkedItemsSurface1Setted, checkedItemsSurface1SetSetted] =
        useState(true)
    const [checkedItemsDamage1, setCheckedItemsDamage1] = useState([])
    const [checkedItemsDamage1Setted, checkedItemsDamage1SetSetted] =
        useState(true)

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
                console.log('done')
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
                console.log('done')
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
                Registratie.primarySupport.paperType3 !== '' &&
                Registratie.primarySupport.paperType3 !== undefined &&
                Registratie.primarySupport.paperType3 !== null
            ) {
                console.log('done')
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
                console.log('done')
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
                console.log('done')
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
                console.log('done')
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
                console.log('done')
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
                console.log('done')
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
                Registratie.primarySupport.surface !== '' &&
                Registratie.primarySupport.surface !== undefined &&
                Registratie.primarySupport.surface !== null
            ) {
                console.log('done')
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

    const PrimarySupportForm = [
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
            type: 'radio',
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
            options: ['None', 'Not accessible'],
            checkedItems: checkedItemsVerso1,
            setCheckedItems: setCheckedItemsVerso1,
        },
        {
            label: 'watermark',
            name: 'watermark',
            type: 'radio',
            options: ['None', 'Not accessible'],
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
            type: 'text',
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
            type: 'radio',
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
                'Abradion',
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
                'Wrinklinf',
                'Tear',
                'Yellowing',
            ],
            checkedItems: checkedItemsDamage1,
            setCheckedItems: setCheckedItemsDamage1,
        },
        {
            label: 'remarks',
            name: 'remarksCondition',
            type: 'text',
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
        useState('')
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
    const [checkedItemsSurface2, setCheckedItemsSurface2] = useState('')
    const [checkedItemsSurface2Setted, checkedItemsSurface2SetSetted] =
        useState(true)
    const [checkedItemsDamage2, setCheckedItemsDamage2] = useState([])
    const [checkedItemsDamage2Setted, checkedItemsDamage2SetSetted] =
        useState(true)

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
                console.log('done')
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
                console.log('done')
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
                Registratie.secondarySupport.paperType3 !== '' &&
                Registratie.secondarySupport.paperType3 !== undefined &&
                Registratie.secondarySupport.paperType3 !== null
            ) {
                console.log('done')
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
                console.log('done')
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
                console.log('done')
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
                console.log('done')
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
                console.log('done')
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
                console.log('done')
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
                Registratie.secondarySupport.surface !== '' &&
                Registratie.secondarySupport.surface !== undefined &&
                Registratie.secondarySupport.surface !== null
            ) {
                console.log('done')
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

    const SecondartSupportForm = [
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
            type: 'radio',
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
            type: 'text',
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
            type: 'radio',
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
                'Abradion',
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
                'Wrinklinf',
                'Tear',
                'Yellowing',
            ],
            checkedItems: checkedItemsDamage2,
            setCheckedItems: setCheckedItemsDamage2,
        },
        {
            label: 'remarks',
            name: 'remarksCondition',
            type: 'text',
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
    const [checkedPictorialSurface1, setCheckedPictorialSurface1] = useState('')
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
                console.log('done')
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
                console.log('done')
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
                Registratie.primarySupport.pictorial.surface !== '' &&
                Registratie.primarySupport.pictorial.surface !== undefined &&
                Registratie.primarySupport.pictorial.surface !== null
            ) {
                console.log('done')
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
            label: 'firable media',
            name: 'firableMedia',
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
                'Strumping',
                'Wet_brush',
                'Wash',
            ],
            checkedItems: checkedPictorialTechnique1,
            setCheckedItems: setCheckedPictorialTechnique1,
        },
        { label: 'remarks', name: 'remarksDescription', type: 'textarea' },
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
            type: 'radio',
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
                'Abradion',
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
                'Wrinklinf',
                'Tear',
                'Yellowing',
            ],
            checkedItems: checkedPictorialDamage1,
            setCheckedItems: setCheckedPictorialDamage1,
        },
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
    const [checkedPictorialSurface2, setCheckedPictorialSurface2] = useState('')
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
        if (checkedItemsPictorialFixative2Setted) {
            if (
                Registratie.secondarySupport.pictorial.fixative !== '' &&
                Registratie.secondarySupport.pictorial.fixative !== undefined &&
                Registratie.secondarySupport.pictorial.fixative !== null
            ) {
                console.log('done')
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
                console.log('done')
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
                Registratie.secondarySupport.pictorial.surface !== '' &&
                Registratie.secondarySupport.pictorial.surface !== undefined &&
                Registratie.secondarySupport.pictorial.surface !== null
            ) {
                console.log('done')
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
                'Strumping',
                'Wet_brush',
                'Wash',
            ],
            checkedItems: checkedPictorialTechnique2,
            setCheckedItems: setCheckedPictorialTechnique2,
        },
        { label: 'remarks', name: 'remarksDescription', type: 'textarea' },
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
            type: 'radio',
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
                'Abradion',
                'Cut',
                'Deformation',
                'Discoloration',
                'Fold',
                'Former_treatment',
                'Mold',
                'Insect_damage',
                'Former_treatment',
                'Scratch',
                'Staining',
                'Rust',
                'Water_damage',
                'Wrinklinf',
                'Tear',
                'Yellowing',
            ],
            checkedItems: checkedPictorialDamage2,
            setCheckedItems: setCheckedPictorialDamage2,
        },
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
        setRegistratie((prevRegistratie) => ({
            ...prevRegistratie,
            remarks: event.target.value,
        }))
    }

    // mounting section

    const [checkedItemsNature, setCheckedItemsNature] = useState('')
    const [checkedItemsNatureSetted, checkedItemsNatureSetSetted] =
        useState(true)
    const [checkedItemsAssemblage, setCheckedItemsAssemblage] = useState('')
    const [checkedItemsAssemblageSetted, checkedItemsAssemblageSetSetted] =
        useState(true)
    const [checkedItemsCondition, setCheckedItemsCondition] = useState('')
    const [checkedItemsConditionSetted, checkedItemsConditionSetSetted] =
        useState(true)
    const [checkedItemsSurface, setCheckedItemsSurface] = useState('')
    const [checkedItemsSurfaceSetted, checkedItemsSurfaceSetSetted] =
        useState(true)
    const [checkedItemsDamage, setCheckedItemsDamage] = useState([])
    const [checkedItemsDamageSetted, checkedItemsDamageSetSetted] =
        useState(true)

    useEffect(() => {
        if (checkedItemsNatureSetted) {
            if (
                Registratie.mounting.nature !== '' &&
                Registratie.mounting.nature !== undefined &&
                Registratie.mounting.nature !== null
            ) {
                console.log('done')
                setCheckedItemsNature(Registratie.mounting.nature)
                checkedItemsNatureSetSetted(false)
            }
        }
    }, [Registratie.mounting.nature, checkedItemsNatureSetted])

    useEffect(() => {
        if (checkedItemsAssemblageSetted) {
            if (
                Registratie.mounting.assemblage !== '' &&
                Registratie.mounting.assemblage !== undefined &&
                Registratie.mounting.assemblage !== null
            ) {
                console.log('done')
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
                console.log('done')
                setCheckedItemsCondition(Registratie.mounting.generalCondition)
                checkedItemsConditionSetSetted(false)
            }
        }
    }, [Registratie.mounting.generalCondition, checkedItemsConditionSetted])

    useEffect(() => {
        if (checkedItemsSurfaceSetted) {
            if (
                Registratie.mounting.surface !== '' &&
                Registratie.mounting.surface !== undefined &&
                Registratie.mounting.surface !== null
            ) {
                console.log('done')
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
            type: 'radio',
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
            type: 'radio',
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
            type: 'radio',
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
                'Insect damage',
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

    const DatesForm = [
        { name: 'text', label: 'text', type: 'text' },
        { name: 'location', label: 'location', type: 'text' },
        { name: 'media', label: 'media', type: 'text' },
        { name: 'value', label: 'value', type: 'text' },
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
    const [numElementsInscription, setNumElementsInscription] = useState(1)

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
        useState(1)

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

    const [page, setPage] = useState(0)

    return (
        <>
            <div className="w-full flex flex-wrap">
                <div className="w-1/2  pt-20 pb-28">
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
                            />
                            artist
                            <AutomaticForm
                                fields={ArtistForm}
                                handleChange={handleArtistChange}
                                formData={Registratie.identification.artist}
                            />
                            date
                            <AutomaticForm
                                fields={DatesForm}
                                handleChange={handleDatesChange}
                                formData={Registratie.identification.date}
                            />
                            signature
                            <AutomaticForm
                                fields={DatesForm}
                                handleChange={handleSignatureChange}
                                formData={Registratie.identification.signature}
                            />
                            inscription
                            <div>
                                <button onClick={handleClickInscription}>
                                    Click to Add inscription
                                </button>
                                {[...Array(numElementsInscription)].map(
                                    (_, index) => (
                                        <>
                                            inscription {index}
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
                            collectionmark
                            <div>
                                <button onClick={handleClickCollectionMarks}>
                                    Click to Add collection mark
                                </button>
                                {[...Array(numElementsCollectionMarks)].map(
                                    (_, index) => (
                                        <>
                                            inscription {index}
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
                        />
                    ) : page === 3 ? (
                        <AutomaticForm
                            fields={PrimarySupportForm}
                            handleChange={handlePrimarySupportChange}
                            formData={Registratie.primarySupport}
                        />
                    ) : page === 4 ? (
                        <AutomaticForm
                            fields={SecondartSupportForm}
                            handleChange={handleSecondarySupportChange}
                            formData={Registratie.secondarySupport}
                        />
                    ) : page === 5 ? (
                        <AutomaticForm
                            fields={FirstPictorialForm}
                            handleChange={handleFirstPictorailChange}
                            formData={Registratie.primarySupport.pictorial}
                        />
                    ) : page === 6 ? (
                        <AutomaticForm
                            fields={SecondaryPictorialForm}
                            handleChange={handleSecondPictorailChange}
                            formData={Registratie.secondarySupport.pictorial}
                        />
                    ) : page === 7 ? (
                        <AutomaticForm
                            fields={mountingForm}
                            handleChange={handleMountingChange}
                            formData={Registratie.mounting}
                        />
                    ) : (
                        <textarea
                            value={Registratie.remarks}
                            onChange={handleGeneralRemarks}
                        ></textarea>
                    )}
                    <div className="fixed bottom-0 pb-6 pt-4 w-1/2 flex justify-center bg-white border-t-2">
                        <div className="flex justify-between w-9/12 flex-wrap">
                            <div
                                onClick={() => setPage(0)}
                                className={`underline cursor-pointer ${
                                    page === 0
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                Registratie
                            </div>
                            <div
                                onClick={() => setPage(1)}
                                className={`underline cursor-pointer ${
                                    page === 1
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                identificatie
                            </div>
                            <div
                                onClick={() => setPage(2)}
                                className={`underline cursor-pointer ${
                                    page === 2
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                storage
                            </div>
                            <div
                                onClick={() => setPage(3)}
                                className={`underline cursor-pointer ${
                                    page === 3
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                primary support
                            </div>
                            <div
                                onClick={() => setPage(4)}
                                className={`underline cursor-pointer ${
                                    page === 4
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                secondary support
                            </div>
                            <div
                                onClick={() => setPage(5)}
                                className={`underline cursor-pointer ${
                                    page === 5
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                pictorial layer (recto)
                            </div>
                            <div
                                onClick={() => setPage(6)}
                                className={`underline cursor-pointer ${
                                    page === 6
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                pictorial layer (verso)
                            </div>
                            <div
                                onClick={() => setPage(7)}
                                className={`underline cursor-pointer ${
                                    page === 7
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                Mounting
                            </div>
                            <div
                                onClick={() => setPage(8)}
                                className={`underline cursor-pointer ${
                                    page === 8
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                general remarks
                            </div>
                            <div
                                onClick={handleSubmit}
                                className={`underline cursor-pointer ${
                                    page === 8
                                        ? 'font-bold opacity-100'
                                        : 'opacity-50'
                                }`}
                            >
                                submit this shit
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
