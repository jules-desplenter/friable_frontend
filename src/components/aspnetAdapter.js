export default class AspNetAdapter {
    /** */
    constructor(canvasId, endpointUrl) {
        this.canvasId = canvasId
        this.endpointUrl = endpointUrl
    }

    /** */
    get annotationPageId() {
        let info = this.canvasId.split('/')
        info = info.slice(-3)
        console.log(info)
        return `${this.endpointUrl}/${info[0]}/${info[1]}/${info[2]}`
    }

    /** */
    async create(annotation) {
        return fetch(this.endpointUrl, {
            body: JSON.stringify({
                canvas: this.canvasId,
                data: JSON.stringify(annotation),
                uuid: annotation.id,
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
            .then((response) => this.all())
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
        return fetch(`${this.endpointUrl}/${encodeURIComponent(annoId)}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
        })
            .then((response) => this.all())
            .catch(() => this.all())
    }

    /** */
    async get(annoId) {
        return (
            await fetch(`${this.endpointUrl}/${encodeURIComponent(annoId)}`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
        ).json()
    }

    /** */
    async all() {
        return (await fetch(this.annotationPageId)).json()
    }
}
