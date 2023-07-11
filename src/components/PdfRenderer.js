import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import ArtworkDetails from './ArtWorkDetails'

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
})

// Create Document Component
const MyDocument = ({ registratie }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <ArtworkDetails artwork={registratie} />
        </Page>
    </Document>
)

export default MyDocument
