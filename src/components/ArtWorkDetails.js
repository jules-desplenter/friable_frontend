import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const ArtworkDetails = ({ artwork }) => {
    // Destructuring the artwork object
    console.log(artwork, 'artwork')
    const {
        id,
        name,
        reason,
        version,
        date,
        identification,
        primarySupport,
        secondarySupport,
        storage,
        mounting,
        framing,
    } = artwork

    return (
        <View>
            <h1>Artwork Details</h1>
            {/* Render the artwork details */}
            <Text>ID: {id}</Text>
            <Text>Name: {name}</Text>
            <Text>Reason: {reason}</Text>
            <Text>Version: {version}</Text>
            <Text>Date: {date}</Text>
            {/* Render Identification details */}
            <h2>Identification</h2>
            <Text>ID: {identification.id}</Text>
            <Text>Artist ID: {identification.artist.id}</Text>
            <Text>Artist Surname: {identification.artist.surName}</Text>
            <Text>Title (Dutch): {identification.titleDutch}</Text>
            <Text>Date ID: {identification.date.id}</Text>
            <Text>Date Value: {identification.date.value}</Text>
            <Text>Signature ID: {identification.signature.id}</Text>
            <Text>Signature Value: {identification.signature.value}</Text>
            {/* Render Primary Support details */}
            <h2>Primary Support</h2>
            <Text>ID: {primarySupport.id}</Text>
            <Text>Based On: {primarySupport.based}</Text>
            <Text>Material: {primarySupport.material[0]}</Text>
            <Text>
                Material Serialized: {primarySupport.materialSerialized}
            </Text>
            <Text>Paper Type 1: {primarySupport.paperType1}</Text>
            <Text>Paper Type 2: {primarySupport.paperType2}</Text>
            <Text>Paper Type 3: {primarySupport.paperType3}</Text>
            <Text>Assemblage: {primarySupport.assemblage}</Text>
            <Text>Recto Verso: {primarySupport.rectoVerso}</Text>
            <Text>Watermark: {primarySupport.watermark}</Text>
            <Text>Pinholed: {primarySupport.pinholed}</Text>
            <Text>Amount: {primarySupport.amount}</Text>
            <Text>General Condition: {primarySupport.generalCondition}</Text>
            <Text>Surface: {primarySupport.surface}</Text>
            <Text>
                Remarks Condition: {primarySupport.pictorial.remarksCondition}
            </Text>
            {/* Render Secondary Support details */}
            <h2>Secondary Support</h2>
            <Text>ID: {secondarySupport.id}</Text>
            <Text>Based On: {secondarySupport.based}</Text>
            <Text>Pictorial ID: {secondarySupport.pictorial.id}</Text>
            {/* Render Storage details */}
            <h2>Storage</h2>
            <Text>ID: {storage.id}</Text>
            <Text>Location: {storage.location}</Text>
            <Text>Location Number: {storage.locationNumber}</Text>
            <Text>Storage Type: {storage.storageType}</Text>
            <Text>Material Serialized: {storage.materialSerialized}</Text>
            {/* Render Mounting details */}
            <h2>Mounting</h2>
            <Text>ID: {mounting.id}</Text>
            <Text>Nature: {mounting.nature}</Text>
            <Text>Assemblage: {mounting.assemblage}</Text>
            <Text>General Condition: {mounting.generalCondition}</Text>
            {/* Render Framing details */}
            <h2>Framing</h2>
            <Text>ID: {framing.id}</Text>
            <Text>Height: {framing.height}</Text>
            <Text>Width: {framing.width}</Text>
            <Text>Depth: {framing.depth}</Text>
            <Text>Shape: {framing.shape}</Text>
            <Text>Damage Relevant: {framing.damageRelevant}</Text>
            <Text>Apperture Frame Height: {framing.appertureFrameHeight}</Text>
            <Text>Aperture Frame Width: {framing.apertureFrameWidth}</Text>
            <Text>Apreture Mount Height: {framing.apretureMountHeight}</Text>
            <Text>Aperture Mount Width: {framing.apertureMountWidth}</Text>
            <Text>
                Max Painting Dimensions Height:{' '}
                {framing.maxPaintingDimensionsHeight}
            </Text>
            <Text>
                Max Painting Dimensions Width:{' '}
                {framing.maxPaintingDimensionsWidth}
            </Text>
            <Text>Rabbet Accessible: {framing.rabbetAccessible}</Text>
            <Text>Rabbet Height: {framing.rabbetHeight}</Text>
            <Text>Rabbet Width: {framing.rabbetWidth}</Text>
            <Text>Rabbet Depth: {framing.rabbetDepth}</Text>
            <Text>Inner Spacers Height: {framing.innerSpacersHeight}</Text>
            <Text>Inner Spacers Width: {framing.innerSpacersWidth}</Text>
            <Text>Inner Spacers Depth: {framing.innerSpacersDepth}</Text>
            <Text>
                External Rising Sticks Height:{' '}
                {framing.externalRisingSticksHeight}
            </Text>
            <Text>
                External Rising Sticks Width:{' '}
                {framing.externalRisingSticksWidth}
            </Text>
            <Text>
                External Rising Sticks Depth:{' '}
                {framing.externalRisingSticksDepth}
            </Text>
            <Text>Dimension Remarks: {framing.dimensionRemarks}</Text>
            <Text>Moulding Material: {framing.mouldingMaterial}</Text>
            <Text>Moulding Assemblage: {framing.mouldingAssemblage}</Text>
            <Text>
                Raising Sticks Material: {framing.raisingSticksMaterial}
            </Text>
            <Text>
                Raising Sticks Assemblage: {framing.raisingSticksAssemblage}
            </Text>
            <Text>Inner Spacers 1: {framing.innerSpacers1}</Text>
            <Text>Inner Spacers 2: {framing.innerSpacers2}</Text>
            <Text>Backing Board 1: {framing.backingBoard1}</Text>
            <Text>Backing Board 2: {framing.backingBoard2}</Text>
            <Text>Sealing: {framing.sealing}</Text>
            <Text>Hanging System: {framing.hangingSystem}</Text>
            <Text>Indicators: {framing.indicators}</Text>
            <Text>Description Remarks: {framing.descriptionRemarks}</Text>
            <Text>Material: {framing.material}</Text>
            <Text>Assemblage: {framing.assemblage}</Text>
            <Text>Glazing Height: {framing.glazingHeight}</Text>
            <Text>Glazing Width: {framing.glazingWidth}</Text>
            <Text>Glazing Estimation: {framing.glazingEstimation}</Text>
            <Text>Glazing Remarks: {framing.glazingRemarks}</Text>
            <Text>Original Framing: {framing.originalFraming}</Text>
            <Text>History Indicators: {framing.historyIndicators}</Text>
            <Text>Labels Amount: {framing.labelsAmount}</Text>
            <Text>History Description: {framing.historyDescription}</Text>
            <Text>Surface: {framing.surface}</Text>
            <Text>Mechanical Problems: {framing.mechanicalProblems}</Text>
            <Text>Chemical Problems: {framing.checmicalProblems}</Text>
            <Text>Biological Problems: {framing.biologicalProblems}</Text>
            <Text>Aestethic Problems: {framing.aestethicProblems}</Text>
        </View>
    )
}

export default ArtworkDetails
