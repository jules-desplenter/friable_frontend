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

    useEffect(() => {
        if (checkedItemsSupport === '')
            setCheckedItemsSupport(Registratie.identification.framed)
    }, [Registratie.identification.framed, checkedItemsSupport])

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
    const [checkedItemsStorageType, setCheckedItemsStorageType] = useState('')
    const [checkedItemsMaterial, setCheckedItemsMaterial] = useState([])
    useEffect(() => {
        if (checkedItemsLocation === '')
            setCheckedItemsLocation(Registratie.storage.location)
    }, [Registratie.storage.location, checkedItemsLocation])

    useEffect(() => {
        if (checkedItemsStorageType === '')
            setCheckedItemsStorageType(Registratie.storage.storageType)
    }, [Registratie.storage.storageType, checkedItemsStorageType])

    useEffect(() => {
        if (checkedItemsMaterial.length === 0) {
            setCheckedItemsMaterial(Registratie.storage.material)
        }
    }, [Registratie.storage.material, checkedItemsMaterial])

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
    const [checkedItemsSupportPaperType11, setCheckedItemsSupportPaperType11] =
        useState('')
    const [checkedItemsSupportPaperType21, setCheckedItemsSupportPaperType21] =
        useState('')
    const [checkedItemsSupportPaperType31, setCheckedItemsSupportPaperType31] =
        useState('')
    const [checkedItemsAssemblage1, setCheckedItemsAssemblage1] = useState('')
    const [checkedItemsVerso1, setCheckedItemsVerso1] = useState('')
    const [checkedItemsWatermark1, setCheckedItemsWatermark1] = useState('')
    const [checkedItemsPinholes1, setCheckedItemsPinholes1] = useState('')
    const [checkedItemsCondition1, setCheckedItemsCondition1] = useState('')
    const [checkedItemsSurface1, setCheckedItemsSurface1] = useState('')
    const [checkedItemsDamage1, setCheckedItemsDamage1] = useState([])

    useEffect(() => {
        if (checkedItemsSupportMaterial1.length === 0) {
            setCheckedItemsSupportMaterial1(Registratie.primarySupport.material)
        }
    }, [Registratie.primarySupport.material, checkedItemsSupportMaterial1])

    useEffect(() => {
        if (checkedItemsSupportPaperType11 === '')
            setCheckedItemsSupportPaperType11(
                Registratie.primarySupport.paperType1,
            )
    }, [Registratie.primarySupport.paperType1, checkedItemsSupportPaperType11])

    useEffect(() => {
        if (checkedItemsSupportPaperType21 === '')
            setCheckedItemsSupportPaperType21(
                Registratie.primarySupport.paperType2,
            )
    }, [Registratie.primarySupport.paperType2, checkedItemsSupportPaperType21])

    useEffect(() => {
        if (checkedItemsSupportPaperType31 === '')
            setCheckedItemsSupportPaperType31(
                Registratie.primarySupport.paperType3,
            )
    }, [Registratie.primarySupport.paperType3, checkedItemsSupportPaperType31])

    useEffect(() => {
        if (checkedItemsAssemblage1 === '')
            setCheckedItemsAssemblage1(Registratie.primarySupport.assemblage)
    }, [Registratie.primarySupport.assemblage, checkedItemsAssemblage1])

    useEffect(() => {
        if (checkedItemsVerso1 === '')
            setCheckedItemsVerso1(Registratie.primarySupport.rectoVerso)
    }, [Registratie.primarySupport.rectoVerso, checkedItemsVerso1])

    useEffect(() => {
        if (checkedItemsWatermark1 === '')
            setCheckedItemsWatermark1(Registratie.primarySupport.watermark)
    }, [Registratie.primarySupport.watermark, checkedItemsWatermark1])

    useEffect(() => {
        if (checkedItemsPinholes1 === '')
            setCheckedItemsPinholes1(Registratie.primarySupport.pinholed)
    }, [Registratie.primarySupport.pinholed, checkedItemsPinholes1])

    useEffect(() => {
        if (checkedItemsCondition1 === '')
            setCheckedItemsCondition1(
                Registratie.primarySupport.generalCondition,
            )
    }, [Registratie.primarySupport.generalCondition, checkedItemsCondition1])

    useEffect(() => {
        if (checkedItemsSurface1 === '')
            setCheckedItemsSurface1(Registratie.primarySupport.surface)
    }, [Registratie.primarySupport.surface, checkedItemsSurface1])

    useEffect(() => {
        if (checkedItemsDamage1.length === 0)
            setCheckedItemsDamage1(Registratie.primarySupport.damage)
    }, [Registratie.primarySupport.damage, checkedItemsDamage1])

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
    const [checkedItemsSupportPaperType12, setCheckedItemsSupportPaperType12] =
        useState('')
    const [checkedItemsSupportPaperType22, setCheckedItemsSupportPaperType22] =
        useState('')
    const [checkedItemsSupportPaperType32, setCheckedItemsSupportPaperType32] =
        useState('')
    const [checkedItemsAssemblage2, setCheckedItemsAssemblage2] = useState('')
    const [checkedItemsVerso2, setCheckedItemsVerso2] = useState('')
    const [checkedItemsWatermark2, setCheckedItemsWatermark2] = useState('')
    const [checkedItemsPinholes2, setCheckedItemsPinholes2] = useState('')
    const [checkedItemsCondition2, setCheckedItemsCondition2] = useState('')
    const [checkedItemsSurface2, setCheckedItemsSurface2] = useState('')
    const [checkedItemsDamage2, setCheckedItemsDamage2] = useState([])

    useEffect(() => {
        if (checkedItemsSupportMaterial2.length === 0) {
            setCheckedItemsSupportMaterial2(
                Registratie.secondarySupport.material,
            )
        }
    }, [Registratie.secondarySupport.material, checkedItemsSupportMaterial2])

    useEffect(() => {
        if (checkedItemsSupportPaperType12 === '')
            setCheckedItemsSupportPaperType12(
                Registratie.secondarySupport.paperType1,
            )
    }, [
        Registratie.secondarySupport.paperType1,
        checkedItemsSupportPaperType12,
    ])

    useEffect(() => {
        if (checkedItemsSupportPaperType22 === '')
            setCheckedItemsSupportPaperType22(
                Registratie.secondarySupport.paperType2,
            )
    }, [
        Registratie.secondarySupport.paperType2,
        checkedItemsSupportPaperType22,
    ])

    useEffect(() => {
        if (checkedItemsSupportPaperType32 === '')
            setCheckedItemsSupportPaperType32(
                Registratie.secondarySupport.paperType3,
            )
    }, [
        Registratie.secondarySupport.paperType3,
        checkedItemsSupportPaperType32,
    ])

    useEffect(() => {
        if (checkedItemsAssemblage2 === '')
            setCheckedItemsAssemblage2(Registratie.secondarySupport.assemblage)
    }, [Registratie.secondarySupport.assemblage, checkedItemsAssemblage2])

    useEffect(() => {
        if (checkedItemsVerso2 === '')
            setCheckedItemsVerso2(Registratie.secondarySupport.rectoVerso)
    }, [Registratie.secondarySupport.rectoVerso, checkedItemsVerso2])

    useEffect(() => {
        if (checkedItemsWatermark2 === '')
            setCheckedItemsWatermark2(Registratie.secondarySupport.watermark)
    }, [Registratie.secondarySupport.watermark, checkedItemsWatermark2])

    useEffect(() => {
        if (checkedItemsPinholes2 === '')
            setCheckedItemsPinholes2(Registratie.secondarySupport.pinholed)
    }, [Registratie.secondarySupport.pinholed, checkedItemsPinholes2])

    useEffect(() => {
        if (checkedItemsCondition2 === '')
            setCheckedItemsCondition2(
                Registratie.secondarySupport.generalCondition,
            )
    }, [Registratie.secondarySupport.generalCondition, checkedItemsCondition2])

    useEffect(() => {
        if (checkedItemsSurface2 === '')
            setCheckedItemsSurface2(Registratie.secondarySupport.surface)
    }, [Registratie.secondarySupport.surface, checkedItemsSurface2])

    useEffect(() => {
        if (checkedItemsDamage2.length === 0)
            setCheckedItemsDamage2(Registratie.secondarySupport.damage)
    }, [Registratie.secondarySupport.damage, checkedItemsDamage2])

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
                'Former_treatment',
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
    // prettier-ignore
    const [checkedPictorialMedia1, setCheckedPictorialMedia1] = useState([])
    const [checkedPictorialFixative1, setCheckedPictorialFixative1] =
        useState('')
    const [checkedPictorialOtherMedia1, setCheckedPictorialOtherMedia1] =
        useState([])
    const [checkedPictorialTechnique1, setCheckedPictorialTechnique1] =
        useState([])
    const [checkedPictorialCondition1, setCheckedPictorialCondition1] =
        useState('')
    const [checkedPictorialSurface1, setCheckedPictorialSurface1] = useState('')
    const [checkedPictorialDamage1, setCheckedPictorialDamage1] = useState([])

    useEffect(() => {
        if (checkedPictorialMedia1.length === 0)
            setCheckedPictorialMedia1(
                Registratie.primarySupport.pictorial.friableMedia,
            )
    }, [
        Registratie.primarySupport.pictorial.friableMedia,
        checkedPictorialMedia1,
    ])

    useEffect(() => {
        if (checkedPictorialFixative1 === '')
            setCheckedPictorialFixative1(
                Registratie.primarySupport.pictorial.fixative,
            )
    }, [
        Registratie.primarySupport.pictorial.fixative,
        checkedPictorialFixative1,
    ])

    useEffect(() => {
        if (checkedPictorialOtherMedia1.length === 0)
            setCheckedPictorialOtherMedia1(
                Registratie.primarySupport.pictorial.otherMedia,
            )
    }, [
        Registratie.primarySupport.pictorial.otherMedia,
        checkedPictorialOtherMedia1,
    ])

    useEffect(() => {
        if (checkedPictorialTechnique1.length === 0)
            setCheckedPictorialTechnique1(
                Registratie.primarySupport.pictorial.techniques,
            )
    }, [
        Registratie.primarySupport.pictorial.techniques,
        checkedPictorialTechnique1,
    ])

    useEffect(() => {
        if (checkedPictorialCondition1 === '')
            setCheckedPictorialCondition1(
                Registratie.primarySupport.pictorial.generalCondition,
            )
    }, [
        Registratie.primarySupport.pictorial.generalCondition,
        checkedPictorialCondition1,
    ])

    useEffect(() => {
        if (checkedPictorialSurface1 === '')
            setCheckedPictorialSurface1(
                Registratie.primarySupport.pictorial.surface,
            )
    }, [Registratie.primarySupport.pictorial.surface, checkedPictorialSurface1])

    useEffect(() => {
        if (checkedPictorialDamage1.length === 0)
            setCheckedPictorialDamage1(
                Registratie.primarySupport.pictorial.damage,
            )
    }, [Registratie.primarySupport.pictorial.damage, checkedPictorialDamage1])

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
                'Former_treatment',
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
    const [checkedPictorialFixative2, setCheckedPictorialFixative2] =
        useState('')
    const [checkedPictorialOtherMedia2, setCheckedPictorialOtherMedia2] =
        useState([])
    const [checkedPictorialTechnique2, setCheckedPictorialTechnique2] =
        useState([])
    const [checkedPictorialCondition2, setCheckedPictorialCondition2] =
        useState('')
    const [checkedPictorialSurface2, setCheckedPictorialSurface2] = useState('')
    const [checkedPictorialDamage2, setCheckedPictorialDamage2] = useState([])

    useEffect(() => {
        if (checkedPictorialMedia2.length === 0)
            setCheckedPictorialMedia2(
                Registratie.secondarySupport.pictorial.friableMedia,
            )
    }, [
        Registratie.secondarySupport.pictorial.friableMedia,
        checkedPictorialMedia2,
    ])

    useEffect(() => {
        if (checkedPictorialFixative2 === '')
            setCheckedPictorialFixative2(
                Registratie.secondarySupport.pictorial.fixative,
            )
    }, [
        Registratie.secondarySupport.pictorial.fixative,
        checkedPictorialFixative2,
    ])

    useEffect(() => {
        if (checkedPictorialOtherMedia2.length === 0)
            setCheckedPictorialOtherMedia2(
                Registratie.secondarySupport.pictorial.otherMedia,
            )
    }, [
        Registratie.secondarySupport.pictorial.otherMedia,
        checkedPictorialOtherMedia2,
    ])

    useEffect(() => {
        if (checkedPictorialTechnique2.length === 0)
            setCheckedPictorialTechnique2(
                Registratie.secondarySupport.pictorial.techniques,
            )
    }, [
        Registratie.secondarySupport.pictorial.techniques,
        checkedPictorialTechnique2,
    ])

    useEffect(() => {
        if (checkedPictorialCondition2 === '')
            setCheckedPictorialCondition2(
                Registratie.secondarySupport.pictorial.generalCondition,
            )
    }, [
        Registratie.secondarySupport.pictorial.generalCondition,
        checkedPictorialCondition2,
    ])

    useEffect(() => {
        if (checkedPictorialSurface2 === '')
            setCheckedPictorialSurface2(
                Registratie.secondarySupport.pictorial.surface,
            )
    }, [
        Registratie.secondarySupport.pictorial.surface,
        checkedPictorialSurface2,
    ])

    useEffect(() => {
        if (checkedPictorialDamage2.length === 0)
            setCheckedPictorialDamage2(
                Registratie.secondarySupport.pictorial.damage,
            )
    }, [Registratie.secondarySupport.pictorial.damage, checkedPictorialDamage2])

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
    const [checkedItemsAssemblage, setCheckedItemsAssemblage] = useState('')
    const [checkedItemsCondition, setCheckedItemsCondition] = useState('')
    const [checkedItemsSurface, setCheckedItemsSurface] = useState('')
    const [checkedItemsDamage, setCheckedItemsDamage] = useState([])

    useEffect(() => {
        if (checkedItemsNature === '')
            setCheckedItemsNature(Registratie.mounting.nature)
    }, [Registratie.mounting.nature, checkedItemsNature])

    useEffect(() => {
        if (checkedItemsAssemblage === '')
            setCheckedItemsAssemblage(Registratie.mounting.assemblage)
    }, [Registratie.mounting.assemblage, checkedItemsAssemblage])

    useEffect(() => {
        if (checkedItemsCondition === '')
            setCheckedItemsCondition(Registratie.mounting.generalCondition)
    }, [Registratie.mounting.generalCondition, checkedItemsCondition])

    useEffect(() => {
        if (checkedItemsSurface === '')
            setCheckedItemsSurface(Registratie.mounting.surface)
    }, [Registratie.mounting.surface, checkedItemsSurface])

    useEffect(() => {
        if (checkedItemsDamage.length === 0)
            setCheckedItemsDamage(Registratie.mounting.damage)
    }, [Registratie.mounting.damage, checkedItemsDamage])

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
