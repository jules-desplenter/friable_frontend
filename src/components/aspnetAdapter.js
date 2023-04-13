export default class AspNetAdapter {
    /** */
    constructor(canvasId, endpointUrl, setManifestUrl) {
        this.canvasId = canvasId
        this.endpointUrl = endpointUrl
        this.setManifestUrl = setManifestUrl
    }

    /** */
    get annotationPageId() {
        console.log(this.canvasId)
        let info = this.canvasId
        // prettier-ignore
        info = info.replace("context.json", "")
        info = info.split('/')
        info = info.slice(-3)
        return `${this.endpointUrl}/${info[0]}/${info[1]}/${info[2]}`
    }

    /** */
    async create(annotation) {
        let info = this.canvasId.split('/')
        info = info.slice(-3)
        return fetch(this.endpointUrl, {
            body: JSON.stringify({
                canvas: info[0],
                data: JSON.stringify(annotation),
                uuid: annotation.id,
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
            .then((response) => {
                console.log(response)
                return this.all()
            })
            .catch(() => this.all())
    }

    /** */
    async update(annotation) {
        return fetch(
            `${this.endpointUrl}/${encodeURIComponent(annotation.id)}`,
            {
                body: JSON.stringify({
                    annotation: {
                        data: JSON.stringify(annotation),
                        uuid: annotation.id,
                    },
                }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'PATCH',
            },
        )
            .then((response) => this.all())
            .catch(() => this.all())
    }

    /** */
    async delete(annoId) {
        console.log(this.canvasId)
        let info = this.canvasId
        // prettier-ignore
        info = info.replace("context.json", "")
        info = info.split('/')
        info = info.slice(-3)
        return fetch(
            `${this.endpointUrl}/${info[0]}/${info[1]}/${
                info[2]
            }/${encodeURIComponent(annoId)}`,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'DELETE',
            },
        )
            .then((response) => {
                this.all()
                this.setManifestUrl('iets anders')
            })
            .catch(() => this.all())
    }

    /** */
    async get(annoId) {
        let info = this.canvasId
        // prettier-ignore
        info = info.replace("context.json", "")
        info = info.split('/')
        info = info.slice(-3)
        return (
            await fetch(
                `${this.endpointUrl}/${info[0]}/${info[1]}/${
                    info[2]
                }/${encodeURIComponent(annoId)}`,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                },
            )
        ).json()
    }

    /** */
    async all() {
        return (await fetch(this.annotationPageId)).json()
    }
}
